export class DebugConsole {
    private panel: HTMLElement;
    private logContainer: HTMLElement;
    private visible = false;
    private originalConsole = {
        log: console.log.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
        info: console.info.bind(console),
    };

    constructor() {
        this.panel = this.createPanel();
        this.logContainer = this.panel.querySelector('.debug-log')!;
        this.interceptConsoleMethods();
        document.body.appendChild(this.panel);
    }

    toggle() {
        this.visible = !this.visible;
        this.panel.style.display = this.visible ? 'flex' : 'none';
    }

    destroy() {
        console.log = this.originalConsole.log;
        console.warn = this.originalConsole.warn;
        console.error = this.originalConsole.error;
        console.info = this.originalConsole.info;
        this.panel.remove();
    }

    private createPanel(): HTMLElement {
        const panel = document.createElement('div');
        Object.assign(panel.style, {
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '780px',
            maxWidth: '95vw',
            height: '280px',
            background: '#1a1a1a',
            border: '1px solid #555',
            borderRadius: '6px',
            display: 'none',
            flexDirection: 'column',
            zIndex: '9999',
            fontFamily: 'monospace',
            fontSize: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.7)',
        });

        // Title bar
        const titleBar = document.createElement('div');
        Object.assign(titleBar.style, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 10px',
            background: '#2a2a2a',
            borderBottom: '1px solid #444',
            borderRadius: '6px 6px 0 0',
            cursor: 'move',
            userSelect: 'none',
        });

        const title = document.createElement('span');
        title.textContent = 'Debug Console';
        title.style.cssText = 'color: #ccc; font-size: 12px; font-weight: bold;';

        const btnRow = document.createElement('div');
        btnRow.style.display = 'flex';
        btnRow.style.gap = '6px';

        const btnClear = document.createElement('button');
        btnClear.textContent = 'Clear';
        btnClear.style.cssText = 'background:#333; color:#aaa; border:1px solid #555; padding:1px 8px; font-size:11px; cursor:pointer; border-radius:3px;';

        const btnClose = document.createElement('button');
        btnClose.textContent = '✕';
        btnClose.style.cssText = 'background:#333; color:#aaa; border:1px solid #555; padding:1px 6px; font-size:11px; cursor:pointer; border-radius:3px;';

        btnRow.appendChild(btnClear);
        btnRow.appendChild(btnClose);
        titleBar.appendChild(title);
        titleBar.appendChild(btnRow);

        // Log area
        const logContainer = document.createElement('div');
        logContainer.className = 'debug-log';
        Object.assign(logContainer.style, {
            flex: '1',
            overflowY: 'auto',
            padding: '6px 10px',
            color: '#ddd',
            lineHeight: '1.5',
        });

        panel.appendChild(titleBar);
        panel.appendChild(logContainer);

        btnClear.onclick = () => { logContainer.innerHTML = ''; };
        btnClose.onclick = () => { this.visible = false; panel.style.display = 'none'; };

        this.makeDraggable(panel, titleBar);

        return panel;
    }

    private appendEntry(level: 'log' | 'warn' | 'error' | 'info', args: unknown[]) {
        const line = document.createElement('div');
        const colors: Record<string, string> = {
            log: '#ddd',
            info: '#7cf',
            warn: '#fc7',
            error: '#f77',
        };
        line.style.cssText = `color:${colors[level]}; border-bottom:1px solid #2a2a2a; padding:1px 0; white-space:pre-wrap; word-break:break-all;`;

        const prefix = level !== 'log' ? `[${level.toUpperCase()}] ` : '';
        line.textContent = prefix + args.map(a => {
            if (typeof a === 'object') {
                try { return JSON.stringify(a, null, 2); } catch { return String(a); }
            }
            return String(a);
        }).join(' ');

        this.logContainer.appendChild(line);
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }

    private interceptConsoleMethods() {
        const methods = ['log', 'warn', 'error', 'info'] as const;
        methods.forEach(method => {
            const original = this.originalConsole[method];
            console[method] = (...args: unknown[]) => {
                original(...args);
                this.appendEntry(method, args);
            };
        });
    }

    private makeDraggable(panel: HTMLElement, handle: HTMLElement) {
        let dragging = false;
        let startX = 0, startY = 0, startLeft = 0, startTop = 0;

        const onMouseMove = (e: MouseEvent) => {
            if (!dragging) return;
            panel.style.left = (startLeft + e.clientX - startX) + 'px';
            panel.style.top = (startTop + e.clientY - startY) + 'px';
        };

        const onMouseUp = () => { dragging = false; };

        handle.addEventListener('mousedown', (e) => {
            dragging = true;
            const rect = panel.getBoundingClientRect();
            startX = e.clientX;
            startY = e.clientY;
            startLeft = rect.left;
            startTop = rect.top;
            panel.style.transform = 'none';
            panel.style.left = startLeft + 'px';
            panel.style.top = startTop + 'px';
            panel.style.bottom = 'auto';
            e.preventDefault();
        });

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
}
