import {useParams, useLocation } from 'react-router-dom';
import {useEffect } from 'react';

import Photo from './Photo';

// renders all the photoes from Pixabay API.
const PhotoList = (props) => {

  const { name } = useParams();
   useEffect(() => {
    props.searchedWords(name); 
  }, [name]);
  
  let images =  null;
  if(props.data.length != 0) {
    images = props.data.map(hit => <Photo url ={hit.largeImageURL} key = {hit.id} /> );
  } 

  return (
    <div className ="photo-container">
      <h2>{props.title}'s photos</h2>
      <ul>
        {images}
      </ul>
    </div>
    );
}

export default PhotoList;