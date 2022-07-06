const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],
        newElement: '',
    },
    methods: {
        deleteElement: function(index) {
            this.todos.splice(index, 1);
        },
        addNewElement: function() {
            if (this.newElement != '') {
                this.todos.push({
                    text: this.newElement,
                    done: false
                });
                this.newElement = '';
            } else {
                alert('Don’t leave empty');
            }
        },
    }



});