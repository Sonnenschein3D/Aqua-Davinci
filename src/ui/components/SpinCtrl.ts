export class SpinCtrl {
    private container: HTMLElement;
    private valueInput: HTMLInputElement;
    private onChange: (value: number) => void;
    private step: number;
    private min: number;
    private max: number;
    private timer: any = null;
    private delayTimer: any = null;
    private startTime: number = 0;

    private precision: number;

    constructor(
        parentElement: HTMLElement, 
        label: string, 
        initialValue: number, 
        step: number = 1, 
        onChange: (val: number) => void,
        min: number = -Infinity,
        max: number = Infinity,
        precision: number = 2
    ) {
        this.step = step;
        this.onChange = onChange;
        this.min = min;
        this.max = max;
        this.precision = precision;

        this.container = document.createElement('div');
        this.container.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";

        const labelSpan = document.createElement('span');
        labelSpan.innerText = label;
        labelSpan.style.marginRight = "5px";
        labelSpan.style.width = "40px"; 
        this.container.appendChild(labelSpan);

        const controlGroup = document.createElement('div');
        controlGroup.style.cssText = "display: flex; align-items: center; flex: 1;";

        const btnMinus = this.createButton('-');
        this.setupAutoRepeat(btnMinus, -1);
        
        this.valueInput = document.createElement('input');
        this.valueInput.type = "text"; 
        
        const factor = Math.pow(10, this.precision);
        this.valueInput.value = (Math.round(initialValue * factor) / factor).toString();
        
        this.valueInput.style.cssText = "width: 100%; text-align: center; background: #111; color: white; border: 1px solid #444; margin: 0 0px; height: 18px; font-size: 10px; outline: none; selection-background-color: #007acc;";
        
        const commit = () => {
            let valStr = this.valueInput.value.replace(',', '.');
            const val = parseFloat(valStr);
            if (!isNaN(val)) {
                this.updateValue(val);
            } else {
                // Revert to last valid if NaN
                // We can't easily know last valid internal state here without tracking, 
                // but updateValue does nothing if same. 
                // For now, just let it be, the external refresh will fix it.
            }
        };

        this.valueInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                commit();
                this.valueInput.blur(); 
            }
        };

        this.valueInput.onblur = () => {
            commit();
        };

        this.valueInput.onfocus = () => {
            this.valueInput.select();
        };
        // Removed onchange to avoid conflict with onblur/enter logic

        const btnPlus = this.createButton('+');
        this.setupAutoRepeat(btnPlus, 1);

        controlGroup.appendChild(btnMinus);
        controlGroup.appendChild(this.valueInput);
        controlGroup.appendChild(btnPlus);

        this.container.appendChild(controlGroup);
        parentElement.appendChild(this.container);
    }

    private createButton(text: string): HTMLButtonElement {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.style.cssText = "width: 18px; height: 18px; background: #333; color: white; border: 1px solid #555; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 10px;";
        return btn;
    }

    private setupAutoRepeat(btn: HTMLButtonElement, direction: number) {
        const stop = () => {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
                this.delayTimer = null;
            }
            btn.style.background = "#333";
            window.removeEventListener('mouseup', stop, { capture: true });
        };

        const action = (step: number) => {
            this.updateValue(parseFloat(this.valueInput.value) + (step * direction));
        };

        const repeat = () => {
            // Check if this component is still part of the document
            if (!document.body.contains(this.container)) {
                stop();
                return;
            }

            const elapsed = Date.now() - this.startTime;
            let currentStep = this.step;
            if (elapsed > 2000) {
                currentStep = this.step * 100;
            } else if (elapsed > 1000) {
                currentStep = this.step * 10;
            }
            
            action(currentStep);
        };

        btn.onmousedown = (e) => {
            if (e.button !== 0) return;
            btn.style.background = "#555";
            action(this.step); // First click immediately with normal step
            
            this.startTime = Date.now();
            
            this.delayTimer = setTimeout(() => {
                this.timer = setInterval(repeat, 100);
            }, 500);
            
            window.addEventListener('mouseup', stop, { capture: true });
            e.preventDefault();
        };

        btn.onmouseleave = stop;
    }

    public updateValue(newValue: number) {
        if (isNaN(newValue)) return;
        
        newValue = Math.min(Math.max(newValue, this.min), this.max);
        const factor = Math.pow(10, this.precision);
        newValue = Math.round(newValue * factor) / factor;
        
        // Always fire change to notify parent
        // But only update DOM input if the parsed value differs (formatting/clamping)
        // OR if this update comes from buttons (where input value is stale).
        // Actually, for manual input, input value is '10', newValue is 10.
        // We want to trigger onChange.
        
        const currentInputValue = parseFloat(this.valueInput.value);
        
        // Update DOM if different (e.g. clamped or from button)
        if (currentInputValue !== newValue) {
            this.valueInput.value = newValue.toString();
        }
        
        // ALWAYS trigger callback, even if value seems same, 
        // because parent might not know about it yet (manual entry case).
        // But to avoid loops, parent usually rebuilds us.
        // Let's rely on the fact that if we are here, we want to commit.
        this.onChange(newValue);
    }
    
    public setValue(value: number) {
        this.valueInput.value = value.toString();
    }
}