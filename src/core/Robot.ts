import { DuetClient } from "../network/duetClient";

/**
 * @class Robot
 * Orchestriert den gesamten Roboter. Diese Klasse ist der zentrale Einstiegspunkt,
 * um Aktionen wie Kalibrierung, das Malen eines Bildes oder Werkzeugwechsel zu steuern.
 * Sie delegiert die Aufgaben an die spezialisierten Module (CAM, Network, Vision).
 */
export class Robot {
    private duetClient: DuetClient;

    /**
     * @param {string} ipAddress - Die IP-Adresse des Roboters.
     */
    constructor(ipAddress: string) {
        console.log(`Robot instance created for IP: ${ipAddress}`);
        this.duetClient = new DuetClient(ipAddress);
    }

    /**
     * Startet den Prozess zur Z-Nullpunkt-Kalibrierung.
     * Kommuniziert mit dem Vision-Service (Raspberry Pi).
     */
    public async calibrateZAxis(): Promise<void> {
        console.log("Starting Z-Axis calibration...");
        // This would involve sending a specific G-Code macro command
        await this.duetClient.sendGcode("M98 P\"0:/macros/calibrate_z.g\"");
    }

    /**
     * Startet den Malprozess für ein gegebenes, verarbeitetes Bild.
     * @param {string} gcode - Der G-Code, der ausgeführt werden soll.
     */
    public async paint(gcode: string): Promise<void> {
        console.log("Sending G-Code to the machine...");
        // In a real scenario, you might upload the file instead of sending line-by-line
        const result = await this.duetClient.sendGcode(gcode);
        if (result) {
            console.log("G-Code sent successfully.");
        } else {
            console.error("Failed to send G-Code.");
        }
        return Promise.resolve();
    }
}
