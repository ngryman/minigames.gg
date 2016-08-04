const items = require('lol-items/items')

hexo.extend.tag.register('item', args => {
  return args.map(name => renderItem(name)).join(' ')
})

function renderItem(name) {
  const item = items.find(item => item.name === name)
  const style = `background: url(${item.sprite.url}) -${item.sprite.x}px -${item.sprite.y}px`

  return `<span class="item-image" title="${name}" style="${style}"></span>`
}
