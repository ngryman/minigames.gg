const striptags = require('striptags')

hexo.extend.helper.register('striptags', text => striptags(text))
