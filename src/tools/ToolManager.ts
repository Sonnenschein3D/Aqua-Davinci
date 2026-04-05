import { Tool } from './Tool';
import { EventBus } from '../core/EventBus';
import { InteractionEvent } from '../interaction/InteractionManager';

export class ToolManager {
    private tools: Map<string, Tool> = new Map();
    private activeTool: Tool | null = null;
    private eventBus: EventBus;

    constructor(eventBus: EventBus) {
        this.eventBus = eventBus;
        this.initListeners();
    }

    registerTool(tool: Tool) {
        this.tools.set(tool.id, tool);
    }

    selectTool(toolId: string | null) {
        if (this.activeTool) {
            this.activeTool.deactivate();
        }

        if (toolId && this.tools.has(toolId)) {
            this.activeTool = this.tools.get(toolId)!;
            this.activeTool.activate();
            console.log(`Tool activated: ${toolId}`);
        } else {
            this.activeTool = null;
        }
        
        // Notify UI or others if needed (optional, avoid circular dependency loop if UI emitted this)
        this.eventBus.emit('tool-active-changed', toolId);
    }

    public getActiveToolId(): string | null {
        return this.activeTool ? this.activeTool.id : null;
    }

    private initListeners() {
        this.eventBus.on('interaction-pointer-down', (e: InteractionEvent) => {
            if (this.activeTool) this.activeTool.onPointerDown(e);
        });

        this.eventBus.on('interaction-pointer-move', (e: InteractionEvent) => {
            if (this.activeTool) this.activeTool.onPointerMove(e);
        });

        this.eventBus.on('interaction-pointer-up', (e: InteractionEvent) => {
            if (this.activeTool) this.activeTool.onPointerUp(e);
        });
        
        // Listen for requests to change tool (e.g. from UI)
        this.eventBus.on('tool-selected', (toolId: string | null) => {
            this.selectTool(toolId);
        });
    }
}
