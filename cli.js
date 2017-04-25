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
    d: 'dir',
    H: 'head',
    f: 'favicon',
    c: 'css',
    s: 'script',
    o: 'output',
    h: 'help'
  },
  string: [
    'output'
  ]
})

var usage = `
Usage:
  create-html [options]

Options:
  --title, -t        Page title
  --script, -s       JavaScript filename, optional
  --css, -c          CSS filename, optional
  --favicon, -f      Site favicon
  --lang, -l         Language of content
  --dir, -d          Direction of content
  --head, -H         Content to insert into <head> tag
  --body, -b         Content to insert into <body> tag
  --output, -o       File name. optional. default: index.html
  --help, -h         Show this help message
`

if (argv.help) {
  console.log(usage)
  exit()
}

console.log('argv:', argv)
if (argv.output && argv.output.length) {
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
} else {
  process.stdout.write(createHTML(argv))
}
