'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const atom_read_manifest_1 = require("atom-read-manifest");
const meta = atom_read_manifest_1.readManifestSync();
const unsupportedTypes = [
    'table'
];
function _console(type, ...args) {
    var _a;
    if ((_a = atom) === null || _a === void 0 ? void 0 : _a.inDevMode()) {
        if (!unsupportedTypes.includes(type)) {
            args.unshift(`[${meta['name']}]`);
        }
        return global.console[type](...args);
    }
}
function assert(...args) {
    return _console('assert', ...args);
}
exports.assert = assert;
function clear(...args) {
    return _console('clear', ...args);
}
exports.clear = clear;
function context(...args) {
    return _console('context', ...args);
}
exports.context = context;
function count(...args) {
    return _console('count', ...args);
}
exports.count = count;
function countReset(...args) {
    return _console('countReset', ...args);
}
exports.countReset = countReset;
function debug(...args) {
    return _console('debug', ...args);
}
exports.debug = debug;
function dir(...args) {
    return _console('dir', ...args);
}
exports.dir = dir;
function dirxml(...args) {
    return _console('dirxml', ...args);
}
exports.dirxml = dirxml;
function error(...args) {
    return _console('error', ...args);
}
exports.error = error;
function group(...args) {
    return _console('group', ...args);
}
exports.group = group;
function groupCollapsed(...args) {
    return _console('groupCollapsed', ...args);
}
exports.groupCollapsed = groupCollapsed;
function groupEnd(...args) {
    return _console('groupEnd', ...args);
}
exports.groupEnd = groupEnd;
function info(...args) {
    return _console('info', ...args);
}
exports.info = info;
function log(...args) {
    return _console('log', ...args);
}
exports.log = log;
function profile(...args) {
    return _console('profile', ...args);
}
exports.profile = profile;
function profileEnd(...args) {
    return _console('profileEnd', ...args);
}
exports.profileEnd = profileEnd;
function table(...args) {
    return _console('table', ...args);
}
exports.table = table;
function time(...args) {
    return _console('time', ...args);
}
exports.time = time;
function timeEnd(...args) {
    return _console('timeEnd', ...args);
}
exports.timeEnd = timeEnd;
function timeLog(...args) {
    return _console('timeLog', ...args);
}
exports.timeLog = timeLog;
function timeStamp(...args) {
    return _console('timeStamp', ...args);
}
exports.timeStamp = timeStamp;
function trace(...args) {
    return _console('trace', ...args);
}
exports.trace = trace;
function warn(...args) {
    return _console('warn', ...args);
}
exports.warn = warn;
//# sourceMappingURL=index.js.map