var fs = require('fs')
var path = require('path')
var test = require('tape')
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

test('async script', function (t) {
  var html = createHTML({
    title: 'example',
    script: 'example.js',
    scriptAsync: true
  })

  fs.readFile(path.join(__dirname, '/fixtures/async.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})

test('meta', function (t) {
  var html = createHTML({
    title: 'example',
    'meta': [{
      'name': 'viewport',
      'content': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    }, {
      'name': 'description',
      'content': 'Testing description meta tag'
    }]
  })

  fs.readFile(path.join(__dirname, '/fixtures/meta.html'), 'utf8', function (err, file) {
    t.notOk(err)
    t.equal(html, file)
    t.end()
  })
})
