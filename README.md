# create-html

Create an html file with one function call.

## Install

```
npm install --save create-html
```

## Usage

### `createHTML(options)`

#### `options`
- `title`
- `script`
- `css`
- `lang`
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
  css: 'example.css',
  lang: 'en',
  head: '<meta name="description" content="example"',
  body: '<p>example</p>',
  favicon: 'favicon.png'
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

## CLI

This module comes with a simple command-line tool for creating html files.

Install it globally with `npm i -g create-html`

### Usage:

```
Usage:
  create-html [options]

Options:
  * --title, -t        Page title
  * --script, -s       JavaScript filename, optional
  * --css, -c          CSS filename, optional
  * --favicon, -f      Site favicon
  * --lang, -l         Language of content
  * --head, -h         Content to insert into <head> tag
  * --body, -b         Content to insert into <body> tag
  * --output, -o       File name. optional. default: index.html
  * --help, -h         Show this help message
```

### Example:

```
create-html -title "an example html file"
```

### See also
- [simple-html-index](https://github.com/mattdesl/simple-html-index)

## License
[MIT](LICENSE.md)
