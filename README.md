Lazy Installer
=====
A simple NPM package for the typical *lazy* developer.
This package is to basically install NPM packages detected in the `unhandledRejection` section of a process

Example:
=====

```yaml
Error: Cannot find module 'hastebin-gen'
Require stack:

* E:\New Project - 2020\Template v12\Commands\Developer\eval.js
* E:\New Project - 2020\Template v12\Lib\Loaders\Commands.js
* E:\New Project - 2020\Template v12\Events\Ready.js
* E:\New Project - 2020\Template v12\Lib\Handlers\EventHandler.js
* E:\New Project - 2020\Template v12\index.js

    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:831:15)
    at Function.Module._load (internal/modules/cjs/loader.js:687:27)
    at Module.require (internal/modules/cjs/loader.js:903:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (E:\New Project - 2020\Template v12\Commands\Developer\eval.js:2:18)
    at Module._compile (internal/modules/cjs/loader.js:1015:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)
    at Module.load (internal/modules/cjs/loader.js:879:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:903:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'E:\\New Project - 2020\\Template v12\\Commands\\Developer\\eval.js',
    'E:\\New Project - 2020\\Template v12\\Lib\\Loaders\\Commands.js',
    'E:\\New Project - 2020\\Template v12\\Events\\Ready.js',
    'E:\\New Project - 2020\\Template v12\\Lib\\Handlers\\EventHandler.js',
    'E:\\New Project - 2020\\Template v12\\index.js'
  ]
}
```

How To Use
=====

``` js
let lazyinstaller = require("lazyinstaller");
process.on('unhandledRejection', error => {
    lazyinstaller.npm(error)
});
```

Contributors
=====
Looking for contributors to improve this package further