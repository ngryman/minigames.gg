const TERMS = {
  'aa': 'http://leagueoflegends.wikia.com/wiki/Auto_attack',
  'cc': 'http://leagueoflegends.wikia.com/wiki/Crowd_control',
  'cdr': 'http://leagueoflegends.wikia.com/wiki/Cooldown_reduction',
  'mana': 'http://leagueoflegends.wikia.com/wiki/Mana',
  'ms': 'http://leagueoflegends.wikia.com/wiki/MS',
  'recall': 'http://leagueoflegends.wikia.com/wiki/Recall'
}

hexo.extend.filter.register('before_post_render', data => {
  data.content = data.content.replace(/`(\w+)`/gi, (match, p1) => {
    if (p1 in TERMS) {
      return `<a class="term-link" href="${TERMS[p1]}">${p1}</a>`
    }
    return match
  })
})
