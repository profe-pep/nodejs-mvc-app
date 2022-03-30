'use strict'

function page404(req, res){
    req.log.debug('Error 404')
    // Render view template
    res.render('errors/404.html', {
        'title': 'Error 404',
    })
}

module.exports = {
    page404
}