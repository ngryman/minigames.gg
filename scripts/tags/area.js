const SHAPES = {
  'Baron Pit': '<circle cx="170.5" cy="150.5" r="16.5"></circle>',
  'Dragon Pit': '<circle cx="344.5" cy="360.5" r="16.5"></circle>',
  'SW Jungle': '<path d="M102,320 C80.5515696,313.871877 58,315 58,315 L58,142 C58,142 60.279259,129.689942 65,120 C69.720741,110.310058 77,103 77,103 C77,103 86.8922622,110.987412 93,118 C99.1077378,125.012588 97,123 104,134 C111,145 117,174 129,187 C141,200 196.004865,215.919062 209,225 C221.995135,234.080938 229,256 229,256 L142,339 C142,339 123.44843,326.128123 102,320 Z"></path>'
}

hexo.extend.tag.register('area', args => {
  const location = args[0]

  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="area-image" viewBox="0 0 512 512">
      <image xlink:href="img/map.png" x="0" y="0" width="512" height="512" />
      <g stroke="#ffc952" stroke-width="2" fill-opacity="0.7" fill="#ffc952">
        ${SHAPES[location]}
      </g>
    </svg>
  `
})
