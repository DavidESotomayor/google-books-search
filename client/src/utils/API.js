import axios from 'axios'

export default {
    // retrieves searched book from the Google Books API
    googleBooks: function(search) {
        // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        return axios.get("/api/google", { params: { q: "title:" + search } });
    },
    // saves book to database
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData)
    },
    // get saved book with a unique id
    getBook: function(id) {
        return axios.get('/api/books/' + id)
    },
    // get saved books from database
    getBooks: function() {
        return axios.get('/api/books')
    },
    // deletes a saved book with a unique id
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id)
    }
}