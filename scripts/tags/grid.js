hexo.extend.tag.register('grid', (args, content) => {
  const cls = 'fixed' !== args[0] ? ` -col${args[0]}` : ` -${args[0]}`

  return `<div class="grid-layout${cls}">${content}</div>`
}, { ends: true })
