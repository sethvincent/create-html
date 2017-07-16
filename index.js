module.exports = function (opts) {
  var title = opts.title ? `<title>${opts.title}</title>` : ''
  var headScript = (opts.script && opts.scriptAsync) ? `<script src="${opts.script}" async></script>` : ''
  var headStyle = opts.style ? `<style type="text/css">${opts.style}</style>` : ''
  var bodyScript = (opts.script && !opts.scriptAsync) ? `<script src="${opts.script}"></script>` : ''
  var favicon = opts.favicon ? `<link rel="icon" href="${opts.favicon}">` : ''
  var css = opts.css
    ? opts.cssAsync
      ? `<link rel="stylesheet" href="${opts.css}" media="none" onload="if(media!=='all')media='all'">`
      : `<link rel="stylesheet" href="${opts.css}">`
    : ''
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
${headStyle}
${headScript}
</head>
<body>
${body}
${bodyScript}
</body>
</html>
`
}
