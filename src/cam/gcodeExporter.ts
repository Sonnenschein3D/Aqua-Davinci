import { Kinematics } from "./kinematics";

/**
 * @class GcodeExporter
 * Generiert RepRapFirmware-kompatiblen G-Code aus einer Liste von Pfaden oder Bewegungsbefehlen.
 */
export class GcodeExporter {

    /**
     * Erzeugt einen vollständigen G-Code-String aus einer Reihe von Aktionen.
     * @returns {string} Der generierte G-Code.
     */
    public static generate(): string {
        let gcode = "";

        // Header
        gcode += "G90 ; Absolute positioning\n";
        gcode += "G21 ; Set units to millimeters\n";
        gcode += "M82 ; Set extruder to absolute mode\n";
        gcode += "\n";

        // Beispiel-Bewegung
        gcode += "; --- Start Painting ---\n";
        gcode += this.moveTo(10, 10); // Fahre zur Startposition
        gcode += this.setBrushHeight(5); // Pinsel anheben
        gcode += this.setBrushHeight(0); // Pinsel senken (malen)
        gcode += this.moveTo(100, 10); // Linie malen
        gcode += this.setBrushHeight(5); // Pinsel anheben
        gcode += "\n";

        // Footer
        gcode += "; --- End Painting ---\n";
        gcode += "G1 X0 Y0 F3000 ; Return to home\n";

        return gcode;
    }

    /**
     * Erzeugt einen G-Code-Befehl für eine schnelle Bewegung (G0) oder eine Arbeitsbewegung (G1).
     * @param {number} x - Die X-Koordinate.
     * @param {number} y - Die Y-Koordinate.
     * @param {number} [speed=3000] - Die Bewegungsgeschwindigkeit.
     * @returns {string} Der G-Code-Befehl.
     */
    public static moveTo(x: number, y: number, speed: number = 3000): string {
        return `G1 X${x.toFixed(3)} Y${y.toFixed(3)} F${speed}\n`;
    }

    /**
     * Erzeugt den G-Code, um die Pinselhöhe über den Servo zu steuern.
     * Hier wird die Kinematik-Kompensation angewendet.
     * @param {number} z_mm - Die gewünschte Höhe über dem Papier.
     * @returns {string} Der M280 G-Code-Befehl.
     */
    public static setBrushHeight(z_mm: number): string {
        const servoAngle = Kinematics.zHubToServoAngle(z_mm);
        // Annahme: Servo ist an P0 angeschlossen.
        return `M280 P0 S${servoAngle.toFixed(1)}\n`;
    }
}
