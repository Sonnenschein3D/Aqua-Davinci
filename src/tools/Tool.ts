import { InteractionEvent } from '../interaction/InteractionManager';

export interface Tool {
    id: string;
    activate(): void;
    deactivate(): void;
    onPointerDown(event: InteractionEvent): void;
    onPointerMove(event: InteractionEvent): void;
    onPointerUp(event: InteractionEvent): void;
}
