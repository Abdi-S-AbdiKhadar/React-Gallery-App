
import { Routes, Route,Navigate} from 'react-router-dom';
import {useState } from 'react';

/* Imported componenets */
import config from './config';
import Search from './components/SearchForm';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

import NotFoundError404 from './components/notFoundError404'


// Main Application that fetches Pixabay API and renders and routes.
const App = ()=> {
    const [photos, setPhotos] = useState([]); 
    const [title, setTitle] = useState(null);

    const fetchPhotos = (query)=> {
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
    }
    return (
        <div className="container" >
            <Search searchedWords = {fetchPhotos}/>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/Moon" replace />} />
                <Route path="/Moon" element={<PhotoList data={photos} title={"Moon"} SearchedWord = {fetchPhotos}/>}  />
                <Route path="/Ocean" element={<PhotoList data={photos} title={"Ocean"} SearchedWord = {fetchPhotos}/>}  />
                <Route path="/Flowers" element={<PhotoList data={photos} title={"flowers"} SearchedWord = {fetchPhotos}/>}  />
                <Route path="/search/:name" element={<PhotoList data={photos} title = {title} SearchedWord = {fetchPhotos}/>} />
                <Route path="/*" element={<NotFoundError404 />} />
            </Routes>
           
        </div>
    ); 
}

export default App;