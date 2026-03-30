import { EventBus } from '../core/EventBus';
import { Robot } from '../core/Robot';
import { GcodeExporter } from '../cam/gcodeExporter';

export function setupCAM(
    eventBus: EventBus,
    robot: Robot
) {
    let generatedGcode: string | null = null;

    eventBus.on('cnc-generate-gcode', () => {
        // In the future, this would take the scene objects from objectManager
        console.log("Generating G-Code...");
        generatedGcode = GcodeExporter.generate();
        console.log("--- Generated G-Code ---");
        console.log(generatedGcode);
        alert("G-Code wurde in der Konsole ausgegeben.");
    });

    eventBus.on('cnc-start-painting', () => {
        if (generatedGcode) {
            console.log("Starting painting process...");
            robot.paint(generatedGcode);
            alert("Malprozess wurde gestartet (siehe Konsole für Details).");
        } else {
            alert("Bitte zuerst G-Code generieren!");
            console.warn("Paint process aborted: No G-Code generated yet.");
        }
    });

    console.log('CAM module initialized.');

    // No return value needed as this module only listens to events
}
