module.exports = function (opts) {
  var title = opts.title ? `<title>${opts.title}</title>` : ''
  var script = opts.script ? `<script src="${opts.script}"></script>` : ''
  var favicon = opts.favicon ? `<link rel="icon" href="${opts.favicon}">` : ''
  var css = opts.css ? `<link rel="stylesheet" href="${opts.css}">` : ''
  var lang = opts.lang || 'en'
  var head = opts.head || ''
  var body = opts.body || ''

  return `<!doctype html>
<html lang="${lang}">
<head>
${title}
<meta charset="utf-8">
${favicon}
${css}
${head}
</head>
<body>
${body}
${script}
</body>
</html>
`
}
