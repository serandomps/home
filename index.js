var dust = require('dust')();
var serand = require('serand');

dust.loadSource(dust.compile(require('./template'), 'home'));

module.exports = function (ctx, container, options, done) {
    var sandbox = container.sandbox;
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
