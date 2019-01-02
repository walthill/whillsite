var butter = require('buttercms')('0b97e7a76cc65bdfae0fbcfe9989497fd95c3846');

butter.post.list({page: 1, page_size: 10}).then(function(response) {
  console.log(response)
})