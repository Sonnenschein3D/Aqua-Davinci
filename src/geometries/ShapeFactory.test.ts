import { describe, it, expect, vi, beforeAll } from 'vitest';
import * as THREE from 'three';
import { ShapeFactory } from './ShapeFactory';
import { ShapeUtils } from './ShapeUtils';

describe('ShapeFactory', () => {
    beforeAll(() => {
        // Mock getCircleTexture to avoid canvas creation in Node environment
        vi.spyOn(ShapeUtils, 'getCircleTexture').mockReturnValue(new THREE.Texture());
    });

    it('should create a line', () => {
        const start = new THREE.Vector3(0, 0, 0);
        const end = new THREE.Vector3(10, 0, 0);
        const line = ShapeFactory.createShape('line', undefined, { start, end });
        
        expect(line).toBeDefined();
        expect(line?.userData.type).toBe('line');
        expect(line?.children.length).toBeGreaterThan(0);
        
        // Check for nodes
        const nodes = line?.children.filter(c => c.userData.isNode);
        expect(nodes?.length).toBe(2);
    });

    it('should create a square', () => {
        const square = ShapeFactory.createShape('square', new THREE.Vector3(0, 0, 0), { size: 100 });
        
        expect(square).toBeDefined();
        expect(square?.userData.type).toBe('square');
        expect(square?.userData.isClosed).toBe(true);
        expect(square?.userData.baseSize.width).toBe(100);
        
        const segments = square?.children.filter(c => c.userData.type === 'bezier_line');
        expect(segments?.length).toBe(4);
    });

    it('should create a circle', () => {
        const circle = ShapeFactory.createShape('circle', new THREE.Vector3(0, 0, 0), { radius: 50 });
        
        expect(circle).toBeDefined();
        expect(circle?.userData.type).toBe('circle');
        expect(circle?.userData.baseSize.radius).toBe(50);
        
        const segments = circle?.children.filter(c => c.userData.type === 'bezier_line');
        expect(segments?.length).toBe(4);
    });


});
