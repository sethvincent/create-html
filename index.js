module.exports = function (opts) {
  var title = opts.title ? `<title>${opts.title}</title>` : ''
  var isAsync = !!opts.scriptAsync
  var script = opts.script ? `<script src="${opts.script}"${isAsync ? ' async' : ''}></script>` : ''
  var favicon = opts.favicon ? `<link rel="icon" href="${opts.favicon}">` : ''
  var css = opts.css ? `<link rel="stylesheet" href="${opts.css}">` : ''
  var lang = opts.lang || 'en'
  var dir = opts.dir || 'ltr'
  var head = opts.head || ''
  var body = opts.body || ''

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
${title}
<meta charset="utf-8">
${favicon}
${css}
${head}
${script}
</head>
<body>
${body}
</body>
</html>
`
}
