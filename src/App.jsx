import { Routes, Route,Navigate} from 'react-router-dom';
import {useState,useEffect } from 'react';

/* Imported componenets */
import config from './config';
import Search from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import NotFoundError404 from './components/NotFoundError404';


// Main Application that fetches Pixabay API and renders and routes.
const App = ()=> {
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState();
    const [query, setQuery] = useState(null);

    const searchedWords = (words)=> {
        setQuery(words);
    }

    useEffect(()=> {
        let fetching = true;

        fetch(`https://pixabay.com/api/?key=${config}&q=${query}&image_type=photo`)
        .then(response => response.json())
        .then(data => {
            if(fetching) {
                setPhotos(data.hits);
                setTitle(query);
            } 
        })
        .catch(error => {
            console.error("There was a problem with the fetch:", error);
        });

        return () => { fetching = false }
    },[query]);
    
    return (
        <div className="container" >
            <Search searchedWords = {searchedWords}/>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/Moon" replace />} />
                <Route path="/:name" element={<PhotoList data={photos} title={title} searchedWords = {searchedWords}/>} />
                <Route path="/" element={<PhotoList data={photos} title={title}/>} />
                <Route path="*" element={<NotFoundError404 title={title} searchedWords = {searchedWords}/>} />
            </Routes>
        </div>
    ); 
}

export default App;