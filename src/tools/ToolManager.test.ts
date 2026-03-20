import { describe, it, expect, vi } from 'vitest';
import { ToolManager } from './ToolManager';
import { EventBus } from '../core/EventBus';
import { Tool } from './Tool';

describe('ToolManager', () => {
    it('should register and select tools', () => {
        const eventBus = new EventBus();
        const manager = new ToolManager(eventBus);
        
        const mockTool: Tool = {
            id: 'test-tool',
            activate: vi.fn(),
            deactivate: vi.fn(),
            onPointerDown: vi.fn(),
            onPointerMove: vi.fn(),
            onPointerUp: vi.fn()
        };

        manager.registerTool(mockTool);
        manager.selectTool('test-tool');
        
        expect(mockTool.activate).toHaveBeenCalled();
    });

    it('should deactivate previous tool when switching', () => {
        const eventBus = new EventBus();
        const manager = new ToolManager(eventBus);
        
        const tool1: Tool = { id: 't1', activate: vi.fn(), deactivate: vi.fn(), onPointerDown: vi.fn(), onPointerMove: vi.fn(), onPointerUp: vi.fn() };
        const tool2: Tool = { id: 't2', activate: vi.fn(), deactivate: vi.fn(), onPointerDown: vi.fn(), onPointerMove: vi.fn(), onPointerUp: vi.fn() };

        manager.registerTool(tool1);
        manager.registerTool(tool2);
        
        manager.selectTool('t1');
        manager.selectTool('t2');
        
        expect(tool1.deactivate).toHaveBeenCalled();
        expect(tool2.activate).toHaveBeenCalled();
    });
});
