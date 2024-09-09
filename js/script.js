const { createApp } = Vue;

createApp({
    data() {
        return {
            // inizializzo un array vuoto per la todo-list
            todos: []
        }
    },
    methods: {
        // recupero la lista todo dal server
        getTodoList() {
            axios.get('server.php').then(response => {

            })
        }

    },
    mounted() {

    },
}).mount('#app');