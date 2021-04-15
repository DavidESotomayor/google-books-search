import React, { useEffect, useState, useRef } from 'react'
import ResultList from '../components/ResultList/ResultList'
import { SubmitBtn } from '../components/Search/Search'
import Nav from '../components/Nav/Nav'
import API from '../utils/API'

const Home = (props) => {
    const inFightRequest = useRef(0);
	const lastApiCall = useRef(0);
    const [search, setSearch] = useState('')
    const [books, setBook] = useState([])
    const [searchBooks, setSearchBooks] = useState(0)

    useEffect(() => {
        let mounted = true;
        const fetchData = () => {
            if (!!search) {
                const requestId = ++inFightRequest.current;
                API.googleBooks(search)
                    .then(response => {
                        if (requestId < lastApiCall.current) {
                            return;
                        }
                        lastApiCall.current = requestId;
                        if (mounted) {
                            setSearch("")
                            setBook(response.data)
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
        fetchData()
        return () => {
            mounted = false
        }
    }, [searchBooks])

    const handleInputChange = (event) => {
        event.preventDefault()
        const { value } = event.target
        setSearch(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setSearchBooks(+new Date())
    }
    const saveGoogleBook = (book) => {
        console.log(book)
        API.saveBook({
            id: book.id,
            googleId: book.id,
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        })
            .then(response => console.log('Book Saved', response))
            .catch(err => console.log('SaveBook Error', err))
    }
    
    return (
        <div>
            <Nav />
            <div className="col-md-12">
            <div className="jumbotron">
            <h1 className="display-4 text-center homeTextLg">Google Books Search</h1>
            <br></br>
            <h2 className="text-center homeTextSm">A Search and Save React App</h2>
            </div>
            <form>
                <h5>Search for books</h5>
                <div className="form-group">
                <input className="form-control" value={search} onChange={handleInputChange} name="search" placeholder="e.g. Star Wars" />
                </div>
                <SubmitBtn onClick={handleFormSubmit}/>
            </form>

            {books.length ? (
                <ResultList bookState={books} saveGoogleBook={saveGoogleBook}/>
            ) : (
                <div>
                    <hr/>
                    <p style={{fontStyle: "italic"}}>No results to display</p>
                </div>
            )}
        </div>
        </div>
    )
}

export default Home