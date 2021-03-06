const champions = require('lol-champions/champions')

hexo.extend.tag.register('champion', args => {
  return args.map(name => renderChampion(name)).join(' ')
})

hexo.extend.tag.register('small_champion', args => {
  return args.map(name => renderChampion(name, 'small')).join(' ')
})

function renderChampion(name, size) {
  const champion = champions.find(champion => champion.name === name)
  if (!champion) return ''

  let { url, x, y } = champion.sprite
  if (size) {
    url = url.replace(/(champion\d\.png)$/, `${size}_$1`)
    x *= 0.75
    y *= 0.75
  }

  const style = `background: url(${url}) -${x}px -${y}px`
  const sizeCls = size ? ` -${size}` : ''
  const link = `http://leagueoflegends.wikia.com/wiki/${name.replace(' ', '_')}`

  return `
  <a class="champion-image${sizeCls}" title="${name}" href="${link}" rel="external" target="_blank">
    <span class="image" title="${name}" style="${style}"></span>
    <strong>${name}</strong>
  </a>
  `
}
