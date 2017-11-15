function buildStylesheets (sheets, async) {
  var output = ''
  if (!sheets) return output

  if (typeof sheets === 'string') {
    sheets = [sheets]
  }

  sheets.forEach(function (sheet) {
    output += !async
      ? `<link rel="stylesheet" href="${sheet}">\n`
      : `<link rel="stylesheet" href="${sheet}" media="none" onload="if(media!=='all')media='all'">\n`
  })

  return output
}

function buildScripts (scripts, async) {
  var output = ''
  if (!scripts) return output

  if (typeof scripts === 'string') {
    scripts = [scripts]
  }

  scripts.forEach(function (script) {
    output += !async
      ? `<script src="${script}"></script>\n`
      : `<script src="${script}" async></script>\n`
  })

  return output
}

module.exports = function (opts) {
  var title = opts.title ? `<title>${opts.title}</title>` : ''
  var headScript = (opts.script && opts.scriptAsync) ? buildScripts(opts.script, opts.scriptAsync) : ''
  var bodyScript = (opts.script && !opts.scriptAsync) ? buildScripts(opts.script, opts.scriptAsync) : ''
  var favicon = opts.favicon ? `<link rel="icon" href="${opts.favicon}">` : ''
  var css = buildStylesheets(opts.css, opts.cssAsync)
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
${head}
${css}
${headScript}
</head>
<body>
${body}
${bodyScript}
</body>
</html>
`
}
