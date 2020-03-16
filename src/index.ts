'use strict';

import { readManifestSync } from 'atom-read-manifest';

const meta = readManifestSync();

const unsupportedTypes = [
  'table'
];

function _console(type, ...args) {
  if (atom?.inDevMode()) {
    if (!unsupportedTypes.includes(type)) {
      args.unshift(`[${meta['name']}]`);
    }

    return (<any>global).console[type](...args);
  }
}

function assert(...args) {
  return _console('assert', ...args);
}
function clear(...args) {
  return _console('clear', ...args);
}
function context(...args) {
  return _console('context', ...args);
}
function count(...args) {
  return _console('count', ...args);
}
function countReset(...args) {
  return _console('countReset', ...args);
}
function debug(...args) {
  return _console('debug', ...args);
}
function dir(...args) {
  return _console('dir', ...args);
}
function dirxml(...args) {
  return _console('dirxml', ...args);
}
function error(...args) {
  return _console('error', ...args);
}
function group(...args) {
  return _console('group', ...args);
}
function groupCollapsed(...args) {
  return _console('groupCollapsed', ...args);
}
function groupEnd(...args) {
  return _console('groupEnd', ...args);
}
function info(...args) {
  return _console('info', ...args);
}
function log(...args) {
  return _console('log', ...args);
}
function profile(...args) {
  return _console('profile', ...args);
}
function profileEnd(...args) {
  return _console('profileEnd', ...args);
}
function table(...args) {
  return _console('table', ...args);
}
function time(...args) {
  return _console('time', ...args);
}
function timeEnd(...args) {
  return _console('timeEnd', ...args);
}
function timeLog(...args) {
  return _console('timeLog', ...args);
}
function timeStamp(...args) {
  return _console('timeStamp', ...args);
}
function trace(...args) {
  return _console('trace', ...args);
}
function warn(...args) {
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
