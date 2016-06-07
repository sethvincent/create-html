var fs = require('fs')
var markdown = require('markdown-stream')
var fromString = require('from2-string')
var hyperstream = require('hyperstream')
var createHTML = require('./index')

var html = createHTML({
  title: 'example'
})

var readmeStream = fs.createReadStream('README.md').pipe(markdown('full'))

var hs = hyperstream({
  'body': readmeStream
})

var htmlStream = fromString(html)
htmlStream.pipe(hs).pipe(process.stdout)
