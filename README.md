# sibling-loader [![Build Status](https://travis-ci.org/erikdesjardins/sibling-loader.svg?branch=master)](https://travis-ci.org/erikdesjardins/sibling-loader)

Webpack loader to import a file and its siblings.

For a directory structure like:

```
└── abc
    ├── foo.js
    ├── bar.js
    ├── baz.js
    ├── somethingElse.txt
    └── styles.css
```

`sibling-loader!./abc/foo` generates code like:

```js
import * as _0 from "./abc/foo.js";
import * as _1 from "./abc/bar.js";
import * as _2 from "./abc/baz.js";
export default { "foo.js": _0, "bar.js": _1, "baz.js": _2 };
```

## Installation

`npm install --save-dev sibling-loader`

## Usage

```js
// trailing slash is important
import modules from 'sibling-loader!./path/to/file';
```
