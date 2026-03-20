# Konzept: CNC Aquarell-Roboter V6.0 (Aqua-Davinci)

Dieses Dokument beschreibt die übergeordnete Software-Architektur und die Kernkonzepte des Aqua-Davinci Projekts.

## 1. Ziel

Entwicklung eines CNC-gesteuerten Roboters, der Aquarellbilder auf A4-Papier malen kann. Die Steuerung erfolgt über eine Web-Oberfläche, die eine 3D-Simulation des Malprozesses ermöglicht und den notwendigen G-Code generiert.

## 2. Software-Architektur: Die Drei Schichten

Die Software ist in drei klar getrennte, unabhängige Schichten aufgeteilt, um Komplexität zu reduzieren und die Wartbarkeit zu erhöhen.

### Layer 1: Frontend & CAM (Vite/TypeScript/Three.js)

Dies ist die Kommandozentrale und die Schnittstelle zum Benutzer.

*   **Verantwortlichkeiten:**
    *   Bild-Analyse: Zerlegung von Vorlagen in Farbauszüge.
    *   Pfad-Generierung: Umwandlung der Farbauszüge in Vektorpfade für den Pinsel.
    *   3D-Simulation: Visuelle Vorschau des gesamten Malprozesses zur Kollisionserkennung und Überprüfung.
    *   G-Code-Generierung: Übersetzung der Pinselpfade in RepRapFirmware-kompatiblen G-Code.
    *   Maschinensteuerung: Kommunikation mit der Firmware via Web-API (Duet Web Control) zum Starten und Überwachen des Drucks.
*   **Wichtige Module (geplant in `src/`):**
    *   `image-processing/`: Logik zur Bildverarbeitung.
    *   `cam/`: G-Code-Export und Kinematik-Kompensation.
    *   `simulation/`: Die Three.js-basierte 3D-Umgebung.
    *   `network/`: API-Client für die Kommunikation mit dem Roboter.
    *   `ui/`: Benutzeroberfläche.

### Layer 2: Firmware & Motion Control (RepRapFirmware auf BTT Octopus)

Dies ist das "Rückenmark" des Roboters, das für die präzise Ausführung der Bewegungen zuständig ist.

*   **Verantwortlichkeiten:**
    *   Präzise Ausführung von G-Code.
    *   Ansteuerung der Stepper-Motoren (X/Y-Achsen) und Servos (Z-Achse/Pinselhub).
    *   Verwaltung von Werkzeugen und deren Offsets.
    *   Ausführung von Makros für wiederkehrende Aufgaben (z.B. Pinsel reinigen, Werkzeug wechseln).
*   **Wichtige Dateien (auf der SD-Karte des Boards):**
    *   `sys/config.g`: Hauptkonfiguration für Achsen, Motoren, Endschalter und Servos.
    *   `sys/macros/`: Sammlung von G-Code-Skripten für Aktionen wie `toolchange_brush1.g` oder `wipe_brush.g`.

### Layer 3: Machine Vision (Raspberry Pi Zero + OpenCV)

Dies ist das "Auge" des Systems, ein dedizierter Microservice für die hochpräzise Z-Kalibrierung.

*   **Verantwortlichkeit:**
    *   Implementierung des "Kiss-Tests" zur automatischen und exakten Findung des Z-Nullpunkts (Papieroberfläche).
*   **Technologie:**
    *   Ein Python-Server (z.B. mit FastAPI) stellt einen HTTP-Endpunkt bereit.
    *   OpenCV analysiert den Kamera-Stream in Echtzeit.
*   **Methode (Schatten-Kiss-Test):**
    1.  Ein seitlich montierter, gerichteter LED-Spot wirft einen scharfen Schatten der Pinselspitze auf das Papier.
    2.  Die Kamera beobachtet die Pinselspitze und ihren Schatten.
    3.  Der Z-Nullpunkt ist exakt dann erreicht, wenn Pinselspitze und Schatten im Kamerabild verschmelzen (Abstand = 0).
    4.  Bei Erkennung wird ein Signal an das Octopus-Board gesendet (z.B. über einen GPIO-Pin, der als Endstop konfiguriert ist), um die Bewegung sofort zu stoppen und `G92 Z0` auszuführen.

## 3. Wichtige Algorithmen & Konzepte

*   **Konstante Z-Höhe:** Ein mechanisches System (federgedrückter Papierblock) stellt sicher, dass die Papieroberfläche immer auf der gleichen Z-Höhe bleibt, unabhängig von der Anzahl der Blätter. Dies vereinfacht die Software-Logik erheblich.
*   **Nocken-Kinematik Kompensation:** Die Drehbewegung des Servos für den Pinselhub ist nicht linear zur vertikalen Z-Bewegung. Die CAM-Software (Layer 1) muss dies kompensieren und den gewünschten Z-Hub in den korrekten Servo-Winkel umrechnen, bevor der G-Code erzeugt wird.
*   **Hydrostatischer Pinsel:** Ein Wassertankpinsel mit einem Belüftungsloch im Tankdeckel sorgt für einen passiven, gleichmäßigen Wasserfluss ohne aktive Pumpen.
