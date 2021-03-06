/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var DeveloperConsole = /** @class */ (function () {
    function DeveloperConsole(options) {
        if (options === void 0) { options = {}; }
        this.name = options.name;
        this.styleSheet = "\n      background-color: " + (options.backgroundColor || 'darkgrey') + ";\n      border-radius: 2px;\n      color: " + (options.color || 'white') + ";\n      line-height: 1.5;\n      padding: 1px 4px;\n      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);\n    ";
    }
    DeveloperConsole.prototype.__console__ = function (type) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(atom === null || atom === void 0 ? void 0 : atom.inDevMode()))
            return;
        args.unshift("%c" + this.name + "%c", this.styleSheet, '');
        (_a = window.console)[type].apply(_a, args);
    };
    DeveloperConsole.prototype.debug = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['debug'], data));
    };
    DeveloperConsole.prototype.error = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['error'], data));
    };
    DeveloperConsole.prototype.info = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['info'], data));
    };
    DeveloperConsole.prototype.log = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['log'], data));
    };
    DeveloperConsole.prototype.trace = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['trace'], data));
    };
    DeveloperConsole.prototype.warn = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.__console__.apply(this, __spreadArray(['warn'], data));
    };
    return DeveloperConsole;
}());

export default DeveloperConsole;
