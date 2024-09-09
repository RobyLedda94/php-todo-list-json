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
                // assegno i dati ricevuti all'array todos
                this.todos = response.data;
                // debug
                console.log(this.todos);
            })
        }

    },
    mounted() {
        // richiamo il metodo getTodoList
        this.getTodoList();
    },
}).mount('#app');