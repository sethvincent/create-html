#! /usr/bin/env node

var fs = require('fs')
var exit = require('exit')
var parseArgs = require('minimist')
var createHTML = require('./index')

var argv = parseArgs(process.argv.slice(2), {
  alias: {
    t: 'title',
    l: 'lang',
    b: 'body',
    h: 'head',
    f: 'favicon',
    c: 'css',
    s: 'script',
    o: 'output',
    h: 'help'
  },
  default: {
    output: 'index.html'
  }
})

var usage = `
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
`

if (argv.help) {
  console.log(usage)
  exit()
}

fs.writeFile(argv.output, createHTML(argv), function (err) {
  if (err) {
    console.log(`
      Error:
        ${err}
      
      Usage:
        ${usage}
    `)
  }
})
