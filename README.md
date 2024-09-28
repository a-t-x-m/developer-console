# @atxm/developer-console

[![License](https://img.shields.io/github/license/a-t-x-m/developer-console?color=blue&style=for-the-badge)](https://github.com/a-t-x-m/developer-console/blob/main/LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@atxm/developer-console?style=for-the-badge)](https://www.npmjs.org/package/@atxm/developer-console)
[![CI: Node](https://img.shields.io/github/actions/workflow/status/a-t-x-m/developer-console/node.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/idleberg/@atxm/developer-console/actions)

Wrapper to limit console output to Atom in Developer Mode

## Installation

`npm install @atxm/developer-console -S`

## Usage

**Examples**:

```js
// JavaScript
import DeveloperConsole from '@atxm/developer-console';

const console = new DeveloperConsole('my-module', {
    backgroundColor: 'slategrey',
    color: 'white',
});

console.log('All set up!');
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT).
