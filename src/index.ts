interface Options {
  backgroundColor?: string;
  color?: string;
}

export default class DeveloperConsole {
  name: string;
  styleSheet: string;

  constructor(name: string, options: Options = {}) {
    if (typeof name !== 'string') {
      throw new TypeError(`DeveloperConsole: name must be a string, got "${typeof name}"`);
    }

    this.name = name;

    this.styleSheet = `
      background-color: ${options.backgroundColor || 'darkgrey'};
      border-radius: 2px;
      color: ${options.color || 'white'};
      line-height: 1.5;
      padding: 1px 4px;
      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
    `;
  }

  private __console__(type: string, ...args: any | any[]): void {
    if (!atom?.inDevMode()) {
      return
    };

    args.unshift(`%c${this.name}%c`, this.styleSheet, '');
    globalThis.console[type](...args);
  }

  debug(...data: any[]): void {
    this.__console__('debug', ...data);
  }

  error(...data: any[]): void {
    this.__console__('error', ...data);
  }

  info(...data: any[]): void {
    this.__console__('info', ...data);
  }

  log(...data: any[]): void {
    this.__console__('log', ...data);
  }

  trace(...data: any[]): void {
    this.__console__('trace', ...data);
  }

  warn(...data: any[]): void {
    this.__console__('warn', ...data);
  }
}
