var dust = require('dust')();
var serand = require('serand');

dust.loadSource(dust.compile(require('./template'), 'home'));

module.exports = function (ctx, sandbox, options, done) {
    dust.render('home', {
        title: options.title
    }, function (err, out) {
        if (err) {
            return done(err);
        }
        sandbox.append(out);
        done(null, function () {
            $('.home', sandbox).remove();
        });
    });
};
