let vm = new Vue({
    el: '#app',
    data: {
        firstname: 'Jean',
        lastname: 'DeLaTour',
        fullname: '',

        success: false,
        message: ''
    },

    watch: {
        fullname: function (value) {
            console.log('watch', value)
        }
    },

    computed: {
        cls: function () {
            console.log('cls called');
            return this.success === true ? 'success' : 'error'
        },
        fullname2: {
            get: function () {
                return this.firstname + ' ' + this.lastname
            },
            set: function (value) {
                let parts = value.split(' ');
                this.firstname = parts[0];
                this.lastname = parts[1]
            }
        }
    }
});
