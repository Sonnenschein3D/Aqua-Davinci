# Konzept: CNC Aquarell-Roboter V6.0 (Aqua-Davinci)

Dieses Dokument beschreibt die übergeordnete Software-Architektur und die Kernkonzepte des Aqua-Davinci Projekts.

## 1. Ziel

Entwicklung eines CNC-gesteuerten Roboters, der Aquarellbilder auf A4-Papier malen kann. Die Steuerung erfolgt über eine Web-Oberfläche, die eine 3D-Simulation des Malprozesses ermöglicht und den notwendigen G-Code generiert.

## 2. Software-Architektur: Die Drei Schichten

Die Software ist in drei klar getrennte, unabhängige Schichten aufgeteilt, um Komplexität zu reduzieren und die Wartbarkeit zu erhöhen.

### Layer 1: Frontend & CAM (Vite/TypeScript/Three.js)

Dies ist die Kommandozentrale und die Schnittstelle zum Benutzer. Die Architektur ist in klar definierte, voneinander entkoppelte Module aufgeteilt, um die Übersichtlichkeit und Wartbarkeit zu maximieren. Die `main.ts` dient dabei nur noch als Startpunkt, der die einzelnen Module lädt und miteinander verbindet.

*   **Zentrales Konzept: Projekt-basiertes Speichern**
    *   Der `managers/ProjectManager.ts` ist die zentrale Instanz für das Speichern und Laden.
    *   Ein "Projekt" ist eine einzelne `.json`-Datei, die den **gesamten Zustand** der Anwendung enthält: das geladene Bild, eingestellte Filter, alle Maschinen- und Pinselparameter, sowie manuell hinzugefügte Zeichnungen.
    *   Beim Speichern sammelt der `ProjectManager` die Daten von allen anderen Modulen. Beim Laden verteilt er die Daten an die entsprechenden Module.

*   **Wichtige Module (in `src/app/`):**
    *   `app/core.ts`: Initialisiert die globalen Kernelemente, die von allen anderen Modulen benötigt werden (z.B. die `THREE.Scene` und den zentralen `EventBus`).
    *   `app/machine.ts`: Bündelt alles, was mit dem physischen Roboter und seinen Werkzeugen zu tun hat.
        *   Verwaltung des Arbeitsbereichs (z.B. A4-Papier).
        *   Verwaltung von Maschinen-Parametern (maximale Geschwindigkeit, Beschleunigung etc.).
        *   **Pinsel-Verwaltung:** Speichern und Laden von mehreren Pinsel-Profilen (z.B. "Rundpinsel Gr. 8"). Enthält die Logik für den Pinsel-Editor.
        *   Stellt den Pinsel und den Arbeitsbereich in der 3D-Vorschau dar.
    *   `app/image.ts`: Verantwortlich für die Verarbeitung der Bildvorlage.
        *   Laden des Originalbildes.
        *   **Bildfilter:** Anwenden von Filtern wie Kontrast, Helligkeit, Weichzeichner etc. auf das Bild.
        *   Zerlegung des gefilterten Bildes in Farbauszüge für den Malprozess.
    *   `app/ui.ts`: Bündelt alle Aspekte der direkten Benutzerinteraktion.
        *   Verwaltung der verschiedenen Ansichten (2D, 3D).
        *   Initialisierung der Zeichen-Werkzeuge (`LineTool`, `CircleTool` etc.).
        *   Verwaltung von UI-Panels und Fenstern (z.B. Einstellungs-Dialog).
    *   `app/cam.ts`: Enthält die reine CAM-Logik.
        *   Generierung von RepRapFirmware-kompatiblem G-Code aus den Pfaden.
        *   Kinematik-Kompensation (z.B. für Servo-Bewegungen).
    *   `network/`: API-Client für die Kommunikation mit der Roboter-Firmware (Duet Web Control).

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

## 4. Projekt-Speicherung: Das Herzstück der Anwendung

Ein zentrales Feature von Aqua-Davinci ist die Fähigkeit, eine komplette Arbeitssitzung als einzelnes "Projekt" zu speichern und zu laden. Dies wird durch den `ProjectManager` realisiert.

*   **Projekt-Datei:** Ein Projekt wird als eine einzelne `.json`-Datei gespeichert. Diese Datei ist eine Momentaufnahme aller relevanten Einstellungen und Daten zum Zeitpunkt des Speicherns.

*   **Was wird gespeichert?**
    *   **Bild & Filter:** Der Pfad zur Original-Bilddatei sowie die genauen Einstellungen aller angewendeten Bildfilter (z.B. `kontrast: 1.2`, `weichzeichner: 0.5px`).
    *   **Maschinen-Setup:** Alle globalen Maschinen-Parameter (z.B. maximale Fahrgeschwindigkeit).
    *   **Pinsel-Profil:** Das aktuell ausgewählte und konfigurierte Pinselprofil, inklusive aller Parameter aus dem Pinsel-Editor.
    *   **Manuelle Zeichnungen:** Alle vom Benutzer manuell hinzugefügten Vektor-Objekte (Linien, Kreise etc.) inklusive ihrer Position und Größe.
    *   **UI-Zustand:** Position und Zustand von Fenstern oder UI-Elementen, falls relevant.

*   **Ablauf (Speichern & Laden):**
    1.  **Speichern:** Der Benutzer klickt auf "Speichern". Der `ProjectManager` sendet ein Event über den `EventBus` (z.B. `collect-project-data`). Alle Module (`machine`, `image`, `ui`) lauschen auf dieses Event, sammeln ihre relevanten Daten und senden sie an den `ProjectManager` zurück. Dieser bündelt alles in einem JSON-Objekt und initiiert den Download der Datei.
    2.  **Laden:** Der Benutzer wählt eine Projekt-`.json`-Datei aus. Der `ProjectManager` liest die Datei und sendet gezielte Events an die Module (z.B. `load-machine-profile`, `apply-image-filters`). Jedes Modul ist dafür verantwortlich, seinen Zustand gemäß den Daten aus der Projekt-Datei wiederherzustellen.
