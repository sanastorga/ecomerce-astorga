import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
/* import ItemListContainer from "./containers/ItemListContainer"; */
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  const greeting = "hola xxxx";
 
  return(
    <>
      <NavBar/>
      {/* <ItemListContainer saludo = {greeting}/> */}
      <ItemDetailContainer/>
      <Footer/>
    </>
  )  
}

export default App