/**
 * @class Kinematics
 * Behandelt die Bewegungs-Kinematik des Roboters, insbesondere die nicht-lineare
 * Bewegung des Pinselhubs durch die Nocken-Kinematik.
 */
export class Kinematics {

    /**
     * Konvertiert einen gewünschten linearen Z-Hub (in mm) in den entsprechenden
     * Winkel für den Servo-Motor, basierend auf der Sinus-Kompensation der Nocken-Kinematik.
     * @param {number} zHub_mm - Der gewünschte vertikale Hub in Millimetern.
     * @returns {number} Der zugehörige Servo-Winkel in Grad.
     */
    public static zHubToServoAngle(zHub_mm: number): number {
        // TODO: Implement the inverse sine function based on the geometry
        // of the servo arm and the cam.
        // This is a placeholder calculation.
        const maxHub = 20; // mm
        const maxAngle = 90; // degrees
        const angle = (zHub_mm / maxHub) * maxAngle;
        return Math.max(0, Math.min(maxAngle, angle));
    }
}
