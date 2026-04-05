# TAnCut Projekt-Einrichtung

Das Projekt wurde erfolgreich von `Konstruktion` nach `TAnCut` kopiert und in einen reinen 2D-Editor umgewandelt.

## Änderungen

1.  **Entfernte 3D-Funktionen:**
    *   **Geometrie:** Herz, Kapsel, Quader, Kegelstumpf.
    *   **Modifikatoren:** Wasserdicht (make_manifold), Vereinfachen (simplify), Dicken-Profil (thickness_profile).

2.  **Verbleibende Funktionen (2D-Basis):**
    *   **Formen:** Linie (Line), Quadrat (Square), Kreis (Circle), Hintergrundbild (Background Image).
    *   **Werkzeuge:** Selektion (Select), Flächenauswahl (Face Select).
    *   **Modifikatoren:** Extrudieren (Extrude), Glätten (Smooth), Flächen entfernen (Face Delete), In Mesh umwandeln (Mesh Convert).

3.  **Bereinigte Dateien:**
    *   `src/managers/ModifierManager.ts`
    *   `src/ui/PropertiesPanel.ts`
    *   `src/geometries/ShapeFactory.ts`
    *   `src/ui/Toolbar.ts`
    *   `src/main.ts`

4.  **Status:**
    *   Build (`npm run build`) erfolgreich.
