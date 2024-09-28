interface Options {
    backgroundColor?: string;
    color?: boolean;
    name?: string;
}
declare class DeveloperConsole {
    name: string;
    styleSheet: string;
    constructor(options?: Options);
    private __console__;
    debug(...data: any[]): void;
    error(...data: any[]): void;
    info(...data: any[]): void;
    log(...data: any[]): void;
    trace(...data: any[]): void;
    warn(...data: any[]): void;
}

export { DeveloperConsole as default };
