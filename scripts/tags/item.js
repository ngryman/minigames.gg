const items = require('lol-items/items')

hexo.extend.tag.register('item', args => {
  return args.map(name => renderItem(name)).join(' ')
})

function renderItem(name) {
  const item = items.find(item => item.name === name)
  const style = `background: url(${item.sprite.url}) -${item.sprite.x}px -${item.sprite.y}px`
  const link = `http://leagueoflegends.wikia.com/wiki/${name.replace(' ', '_')}`

  return `
    <a class="item-image" title="${name}" href="${link}" rel="external" target="_blank">
      <span class="image" style="${style}"></span>
      <strong>${name}</strong>
    </a>
  `
}
