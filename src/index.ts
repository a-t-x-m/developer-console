function _console(type, ...args) {
  if (atom?.inDevMode()) {
    return (global).console[type](...args);
  }
}

function assert(...args: unknown[]): unknown {
  return _console('assert', ...args);
}
function clear(...args: unknown[]): unknown {
  return _console('clear', ...args);
}
function context(...args: unknown[]): unknown {
  return _console('context', ...args);
}
function count(...args: unknown[]): unknown {
  return _console('count', ...args);
}
function countReset(...args: unknown[]): unknown {
  return _console('countReset', ...args);
}
function debug(...args: unknown[]): unknown {
  return _console('debug', ...args);
}
function dir(...args: unknown[]): unknown {
  return _console('dir', ...args);
}
function dirxml(...args: unknown[]): unknown {
  return _console('dirxml', ...args);
}
function error(...args: unknown[]): unknown {
  return _console('error', ...args);
}
function group(...args: unknown[]): unknown {
  return _console('group', ...args);
}
function groupCollapsed(...args: unknown[]): unknown {
  return _console('groupCollapsed', ...args);
}
function groupEnd(...args: unknown[]): unknown {
  return _console('groupEnd', ...args);
}
function info(...args: unknown[]): unknown {
  return _console('info', ...args);
}
function log(...args: unknown[]): unknown {
  return _console('log', ...args);
}
function profile(...args: unknown[]): unknown {
  return _console('profile', ...args);
}
function profileEnd(...args: unknown[]): unknown {
  return _console('profileEnd', ...args);
}
function table(...args: unknown[]): unknown {
  return _console('table', ...args);
}
function time(...args: unknown[]): unknown {
  return _console('time', ...args);
}
function timeEnd(...args: unknown[]): unknown {
  return _console('timeEnd', ...args);
}
function timeLog(...args: unknown[]): unknown {
  return _console('timeLog', ...args);
}
function timeStamp(...args: unknown[]): unknown {
  return _console('timeStamp', ...args);
}
function trace(...args: unknown[]): unknown {
  return _console('trace', ...args);
}
function warn(...args: unknown[]): unknown {
  return _console('warn', ...args);
}

export {
  assert,
  clear,
  context,
  count,
  countReset,
  debug,
  dir,
  dirxml,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  profile,
  profileEnd,
  table,
  time,
  timeEnd,
  timeLog,
  timeStamp,
  trace,
  warn
};
