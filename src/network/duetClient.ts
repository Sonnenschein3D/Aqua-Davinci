/**
 * @class DuetClient
 * Stellt eine Verbindung zur Duet Web Control API der RepRapFirmware her.
 * Ermöglicht das Senden von G-Code, das Abfragen des Maschinenstatus und das Hochladen von Dateien.
 */
export class DuetClient {
    private readonly baseUrl: string;

    /**
     * @param {string} ipAddress - Die IP-Adresse des Roboters (des BTT Octopus Boards).
     */
    constructor(ipAddress: string) {
        this.baseUrl = `http://${ipAddress}`;
    }

    /**
     * Sendet einen G-Code-Befehl an die Firmware.
     * @param {string} gcode - Der zu sendende G-Code-Befehl.
     * @returns {Promise<boolean>} True bei Erfolg, false bei einem Fehler.
     */
    public async sendGcode(gcode: string): Promise<boolean> {
        try {
            const response = await fetch(`${this.baseUrl}/rr_gcode?gcode=${encodeURIComponent(gcode)}`);
            return response.ok;
        } catch (error) {
            console.error("Failed to send G-Code:", error);
            return false;
        }
    }

    /**
     * Frägt den Status der Maschine ab.
     * @returns {Promise<any>} Das JSON-Objekt mit dem Maschinenstatus.
     */
    public async getMachineStatus(): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/rr_status?type=3`);
            return await response.json();
        } catch (error) {
            console.error("Failed to get machine status:", error);
            return null;
        }
    }
}
