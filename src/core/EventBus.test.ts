import { describe, it, expect, vi } from 'vitest';
import { EventBus } from './EventBus';

describe('EventBus', () => {
    it('should subscribe and emit events', () => {
        const bus = new EventBus();
        const callback = vi.fn();
        
        bus.on('test-event', callback);
        bus.emit('test-event', { data: 123 });
        
        expect(callback).toHaveBeenCalledWith({ data: 123 });
    });

    it('should handle multiple listeners', () => {
        const bus = new EventBus();
        const cb1 = vi.fn();
        const cb2 = vi.fn();
        
        bus.on('event', cb1);
        bus.on('event', cb2);
        bus.emit('event');
        
        expect(cb1).toHaveBeenCalled();
        expect(cb2).toHaveBeenCalled();
    });

    it('should unsubscribe correctly', () => {
        const bus = new EventBus();
        const callback = vi.fn();
        
        bus.on('event', callback);
        bus.off('event', callback);
        bus.emit('event');
        
        expect(callback).not.toHaveBeenCalled();
    });
});
