# sibling-loader

Webpack loader to import a file and its siblings.

i.e. all files with the same extension are imported.

## Installation

`npm install --save-dev sibling-loader`

## Usage

For a directory structure like:

```
└── abc
    ├── foo.js
    ├── bar.js
    ├── baz.js
    ├── somethingElse.txt
    └── styles.css
```

...code similar to the following examples is generated.

`sibling-loader!./abc/foo` imports everything with a wildcard:

```js
import * as _0 from "./abc/foo.js";
import * as _1 from "./abc/bar.js";
import * as _2 from "./abc/baz.js";
export default { "foo.js": _0, "bar.js": _1, "baz.js": _2 };
```

`sibling-loader?import=default!./abc/foo` imports only the default export:

```js
import { default as _0 } from "./abc/foo.js";
import { default as _1 } from "./abc/bar.js";
import { default as _2 } from "./abc/baz.js";
export default { "foo.js": _0, "bar.js": _1, "baz.js": _2 };
```

`sibling-loader?import=someExportedName!./abc/foo` imports an arbitrary export:

```js
import { someExportedName as _0 } from "./abc/foo.js";
import { someExportedName as _1 } from "./abc/bar.js";
import { someExportedName as _2 } from "./abc/baz.js";
export default { "foo.js": _0, "bar.js": _1, "baz.js": _2 };
```
