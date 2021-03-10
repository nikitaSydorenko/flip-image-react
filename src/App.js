import React, {useState} from 'react'
import './App.css';
import ListImage from "./ListImage";

function App() {
    const [images, setImages] = useState([
        {id: 1, isActive: false},
        {id: 2, isActive: false},
        {id: 3, isActive: false},
        {id: 4, isActive: false}
        ])
  return (
    <div className="container">
        <ListImage images={images} setImages={setImages}/>
    </div>
  );
}

export default App;
