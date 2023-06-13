import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [selectImage, setSelectImage] = useState([])
  const handleChange = (e) => {
    const files = e.target.files[0]
    if (!files) return
    const selectFile = URL.createObjectURL(e.target.files[0])
    setSelectImage([selectFile, ...selectImage])
    e.target.value = null;
  }
  return (
    <div className="container-fluid">
      <Header handleChange={handleChange} />
      <Card selectImage={selectImage} />
      <Footer />
    </div>


  );
}

export default App;
