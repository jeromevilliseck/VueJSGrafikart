new Vue({
    el: '#app',
    data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr',
        success: true,
        persons: ['je', 'mez', 'kel']
    },
    methods: {
        close: function () {
            this.message = "Fermé"
            this.success = false
        }
    }
});
