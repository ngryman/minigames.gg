const spells = require('lol-spells/spells')

hexo.extend.tag.register('spell', args => {
  return args.map(name => renderSpell(name)).join(' ')
})

hexo.extend.tag.register('small_spell', args => {
  return args.map(name => renderSpell(name, 'small')).join(' ')
})

function renderSpell(name, size) {
  const spell = spells.find(spell => spell.name === name)
  if (!spell) return ''

  let { url, x, y } = spell.sprite
  if (size) {
    url = url.replace(/(spell\d\.png)$/, `${size}_$1`)
    x *= 0.75
    y *= 0.75
  }

  const style = `background: url(${url}) -${x}px -${y}px`
  const sizeCls = size ? ` -${size}` : ''
  const link = `http://leagueoflegends.wikia.com/wiki/${name.replace(' ', '_')}`

  return `
    <a class="spell-image" title="${name}" href="${link}" rel="external" target="_blank">
      <span class="image" style="${style}"></span>
      <strong>${name}</strong>
    </a>

  `
}
