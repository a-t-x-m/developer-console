var e=class{name;styleSheet;constructor(o={}){this.name=(o==null?void 0:o.name)||"developer-console",this.styleSheet=`
      background-color: ${o.backgroundColor||"darkgrey"};
      border-radius: 2px;
      color: ${o.color||"white"};
      line-height: 1.5;
      padding: 1px 4px;
      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
    `;}__console__(o,...n){atom!=null&&atom.inDevMode()&&(n.unshift(`%c${this.name}%c`,this.styleSheet,""),window.console[o](...n));}debug(...o){this.__console__("debug",...o);}error(...o){this.__console__("error",...o);}info(...o){this.__console__("info",...o);}log(...o){this.__console__("log",...o);}trace(...o){this.__console__("trace",...o);}warn(...o){this.__console__("warn",...o);}};

export { e as default };
