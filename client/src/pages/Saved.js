import React, { useEffect, useState, useRef } from 'react'
import API from '../utils/API';
import SavedList from "../components/SavedList/SavedList";
import Nav from '../components/Nav/Nav'

const Saved = (props) => {
    const inFightRequest = useRef(0);
	const lastApiCall = useRef(0);
    const [savedBooks, setSavedBooks] = useState([])
    const [getBooks, setGetBooks] = useState(0);

    useEffect(() => {
        setGetBooks(+new Date())
    }, [])

    useEffect(() => {
        let mounted = true;
        const requestId = ++inFightRequest.current;
        API.getBooks()
            .then(response => {
                if (requestId < lastApiCall.current) {
                    return;
                }
                lastApiCall.current = requestId;
                if (mounted) {
                    setSavedBooks(response.data)
                }
            })
            .catch(err => console.log(err))
        return () => {
            mounted = false
        }
    }, [getBooks])
    
    const deleteGoogleBook = currentBook => {
        API.deleteBook(currentBook.id)
            .then(res => {
                console.log("You deleted this book:", res);
                setGetBooks(+new Date())
            })
            .catch(err => {
                console.log("This is the error", err);
            })
    }    
    
    return (
        <div>
            <Nav />
            <div className="col-md-12">
                <div>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center homeTextLg">Google Books Search</h1>
                        <br></br>
                        <h2 className="text-center homeTextSm">A Search and Save React App</h2>
                    </div>
                </div>
                {savedBooks.length ? (
                    <SavedList bookState={savedBooks} deleteGoogleBook={deleteGoogleBook}/>
                ) : (
                    <h5>No results to display</h5>
                )}
            </div>
        </div>
    )
}

export default Saved