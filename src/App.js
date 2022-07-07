
import Axios from 'axios';
import React, { useEffect , useState } from 'react';
import './App.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';



function App() {
  
  const url =
'https://api.unsplash.com/photos/random?client_id=L1PojUI4zrxBCvWqE4fqAPXcEmGf5aQFom9-fi4tgkU&count=40';
const [images , setImages] = useState([]);
const getImages = () => {
  Axios.get(url).then((res)=>{
    setImages(res.data);
  
  });
};

useEffect(() => {
  getImages();
}, []);
if (!images) {
  return <h1>Loading...</h1>
}
  return (
    
    <div className="App">
    
    <Container>
    <Grid>
    <ImageList gap={12} sx={{mb:8,gridTemplateColumns:'repeat(auto-fill,minmax(280px,lfr))!important'}} cols={3}>
      { images.map((image , index) => {
        return (
        
          <ImageListItem sx={{height:'100% !important'}} key={index} >
             <img
             key ={ image.id } 
             loading="lazy"
             src ={ image.urls.regular }
             alt ={ image.alt_description }       
             />            
             </ImageListItem>            
      );  
      })}
      </ImageList>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
