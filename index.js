var dust = require('dust')();
var serand = require('serand');

dust.loadSource(dust.compile(require('./template'), 'home'));

module.exports = function (sandbox, fn, options) {
    dust.render('home', {
        title: options.title
    }, function (err, out) {
        if (err) {
            return;
        }
        sandbox.append(out);
        fn(false, function () {
            $('.home', sandbox).remove();
        });
    });
};
