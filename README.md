# intro_to_JS

My work through Launch School's "Intro to Programming with JavaScript"

## Readline-Sync ##

On command line run

```
$ ls package.json
package.json
```

If you see this output, you already have a `package.json`. If you get an error, run the `npm init -y` command:

```
$ ls package.json
ls: cannot access 'package.json': No such file or directory

$ npm init -y
Wrote to .../package.json:

{
  "name": "Downloads",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

After obtaining the `package.json`, you can install `readline-sync` as follows:

```
$ npm install readline-sync --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN Downloads@1.0.0 No description
npm WARN Downloads@1.0.0 No repository field.

+ readline-sync@1.4.10
added 1 package from 1 contributor and audited 1 package in 0.423s
found 0 vulnerabilities
```
