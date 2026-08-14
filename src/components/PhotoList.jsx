
import {useEffect } from 'react';

import Photo from './Photo';
import NotFoundError404 from './NotFoundError404';


// renders all the photoes from Pixabay API.
const PhotoList = (props) => {
  
  useEffect(() => {
    props.SearchedWord(props.title);
  }, [props.title]);
  

  let images =  null;
  if(props.data.length != 0) {
    images = props.data.map(hit => <Photo url ={hit.largeImageURL} key = {hit.id} /> );
  } 


  if(props.data.length <= 0 ) {
    return (
       <div className ="photo-container">
        <h3> Image unavailable. Please search again. </h3>
      </div>
      
    );
  } else {
     return (
      <div className ="photo-container">
        <h2>Images of : {props.title}</h2>
        <ul>
          {images}
        </ul>
      </div>
      );

  }

 
  
  
}

export default PhotoList;