import Copyright from "./layouts/Copyright";

import Footer from "./layouts/Footer";
import Header from "./layouts/header";
import Main from "./layouts/Main";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    
    <>
      
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <Copyright/>
      </BrowserRouter>


    </>

  );
}
export default App;