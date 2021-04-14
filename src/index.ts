interface Options {
  backgroundColor?: string;
  color?: boolean;
  name?: string;
}

export default class DeveloperConsole {
  name: string;
  styleSheet: string;

  constructor(options: Options = {}) {
    this.name = options.name;

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
    if (!atom?.inDevMode()) return;

    args.unshift(`%c${this.name}%c`, this.styleSheet, '')

    if (Array.isArray(args)) {
      (window as any).console[type](...args);
    } else {
      args.join(' ');
      (window as any).console[type](args);
    }
  }

  assert(condition?: boolean, ...data: any[]): void {
    this.__console__('assert', condition, ...data);
  }

  count(label?: string): void {
    this.__console__('count', label);
  }

  countReset(label?: string): void {
    this.__console__('countReset', label);
  }

  debug(...data: any[]): void {
    this.__console__('debug', ...data);
  }

  dir(data: unknown): void {
    this.__console__('dir', data);
  }

  dirxml(data: unknown): void {
    this.__console__('dirxml', data);
  }

  error(...data: any[]): void {
    this.__console__('error', ...data);
  }

  group(label?: string): void {
    this.__console__('group', label);
  }

  groupCollapsed(label?: string): void {
    this.__console__('groupCollapsed', label);
  }

  groupEnd(): void {
    this.__console__('groupEnd');
  }

  info(...data: any[]): void {
    this.__console__('info', ...data);
  }

  log(...data: any[]): void {
    this.__console__('log', ...data);
  }

  table(tabularData?: unknown): void {
    this.__console__('table', tabularData);
  }

  time(label?: string): void {
    this.__console__('time', label);
  }

  timeEnd(label?: string): void {
    this.__console__('timeEnd', label);
  }

  timeLog(label?: string): void {
    this.__console__('timeLog', label);
  }

  trace(...data: any[]): void {
    this.__console__('trace', ...data);
  }

  warn(...data: any[]): void {
    this.__console__('warn', ...data);
  }
}
