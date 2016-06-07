var fs = require('fs')
var path = require('path')
var test = require('tape')
var fromString = require('from2-string')
var hyperstream = require('hyperstream')
var createHTML = require('../index')

test('title', function (t) {
  var html = createHTML({
    title: 'example'
  })

  fs.readFile(path.join(__dirname, '/fixtures/title.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('css', function (t) {
  var html = createHTML({
    title: 'example',
    css: 'example.css'
  })

  fs.readFile(path.join(__dirname, '/fixtures/css.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('lang', function (t) {
  var html = createHTML({
    title: 'example',
    lang: 'fr'
  })

  fs.readFile(path.join(__dirname, '/fixtures/lang.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('favicon', function (t) {
  var html = createHTML({
    title: 'example',
    favicon: 'favicon.png'
  })

  fs.readFile(path.join(__dirname, '/fixtures/favicon.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('head', function (t) {
  var html = createHTML({
    title: 'example',
    head: '<meta name="description" content="example description">'
  })

  fs.readFile(path.join(__dirname, '/fixtures/head.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('body', function (t) {
  var html = createHTML({
    title: 'example',
    body: '<p>example</p>'
  })

  fs.readFile(path.join(__dirname, '/fixtures/body.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('script', function (t) {
  var html = createHTML({
    title: 'example',
    script: 'example.js'
  })

  fs.readFile(path.join(__dirname, '/fixtures/script.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})
