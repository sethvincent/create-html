# create-html

Create the content of an html file with one function call.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]
[![conduct][conduct]][conduct-url]

[npm-image]: https://img.shields.io/npm/v/create-html.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/create-html
[travis-image]: https://img.shields.io/travis/sethvincent/create-html.svg?style=flat-square
[travis-url]: https://travis-ci.org/sethvincent/create-html
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard
[conduct]: https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-green.svg?style=flat-square
[conduct-url]: CONDUCT.md

## Install

```
npm install --save create-html
```

## Usage

### `createHTML(options)`

#### `options`
- `title`
- `script`
- `scriptAsync`
- `css`
- `cssAsync`
- `lang`
- `dir`
- `head`
- `body`
- `favicon`

## Examples

Simple example that create an html file with the title `example`:

```js
var html = createHTML({
  title: 'example'
})
```

Example using all options:

```js
var html = createHTML({
  title: 'example',
  script: 'example.js',
  scriptAsync: true,
  css: 'example.css',
  lang: 'en',
  dir: 'rtl',
  head: '<meta name="description" content="example">',
  body: '<p>example</p>',
  favicon: 'favicon.png'
})
```

Create a file with the html contents using the fs module:

```js
var fs = require('fs')
var createHTML = require('create-html')

var html = createHTML({
  title: 'example'
})

fs.writeFile('index.html', html, function (err) {
  if (err) console.log(err)
})
```

Create a stream by pairing this module with [`from2-string`](http://npmjs.com/from2-string):

```js
var fromString = require('from2-string')
var createHTML = require('create-html')

var html = createHTML({
  title: 'example'
})

var stream = fromString(html)
stream.pipe(process.stdout)
```

Pipe content into the html that this module generates by using from2-string and [`hyperstream`](http://npmjs.com/hyperstream)

```js
var fs = require('fs')
var fromString = require('from2-string')
var hyperstream = require('hyperstream')
var createHTML = require('./index')

var html = createHTML({
  title: 'example'
})

var hs = hyperstream({
  'body': fs.createReadStream('some.html')
})

var stream = fromString(html)
stream.pipe(hs).pipe(process.stdout)
```


### Multiple CSS and Javascript Files

Multiple script and stylesheets can be added by sending an array instead of a string:

```js
var html = createHTML({
  css: ['sheet1.css', 'sheet2.css'],
  script: ['script1.js', 'script2.js']
})
```

## CLI

This module comes with a simple command-line tool for creating html files.

Install it globally with `npm i -g create-html`

### Usage:

```
Usage:
  create-html [options]

Options:
  --title, -t        Page title
  --script, -s       JavaScript filename, optional
  --script-async, -a Add async attribute to script tag
  --css, -c          CSS filename, optional
  --favicon, -f      Site favicon
  --lang, -l         Language of content
  --dir, -d          Direction of content
  --head, -H         Content to insert into <head> tag
  --body, -b         Content to insert into <body> tag
  --output, -o       File name. optional. default: stdout
  --help, -h         Show this help message
```

### Example:

```
create-html --title "an example html file"
```

### See also
- [simple-html-index](https://github.com/mattdesl/simple-html-index)

## License
[MIT](LICENSE.md)
