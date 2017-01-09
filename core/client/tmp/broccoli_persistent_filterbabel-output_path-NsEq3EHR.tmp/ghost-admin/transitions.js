define('ghost-admin/transitions', ['exports', 'liquid-tether'], function (exports, _liquidTether) {
    exports['default'] = function () {
        this.transition((0, _liquidTether.target)('fullscreen-modal'), this.toValue(function (_ref) {
            var isVisible = _ref.isVisible;
            return isVisible;
        }),
        // this.use('tether', [modal options], [background options])
        this.use('tether', ['fade', { duration: 150 }], ['fade', { duration: 150 }]), this.reverse('tether', ['fade', { duration: 80 }], ['fade', { duration: 150 }]));

        this.transition(this.hasClass('fade-transition'), this.use('crossFade', { duration: 100 }));
    };
});