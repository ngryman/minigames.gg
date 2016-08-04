var select = require('select-dom')

var activeButton

select.all('.filter-bar .link-button').forEach(function(e) {
  e.addEventListener('click', function(e) {
    if (activeButton) {
      activeButton.classList.remove('-active')
    }

    if (this === activeButton) return

    this.classList.add('-active')
    activeButton = this
  })
})
