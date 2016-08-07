hexo.extend.tag.register('grid', (args, content) => {
  const columns = args[0]
  const cls = columns ? ` -col${columns}` : ''

  return `<div class="grid-layout${cls}">${content}</div>`
}, { ends: true })
