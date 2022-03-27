import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  const greeting = "hola xxxx";

  return(
    <>
      <NavBar/>
      <ItemListContainer saludo = {greeting} />
      <Footer/>
    </>
  )  
}

export default App