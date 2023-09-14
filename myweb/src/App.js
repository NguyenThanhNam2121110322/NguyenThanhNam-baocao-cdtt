import "../src/assets/sass/app.scss";

import Product_detail from "./pages/Product-detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}> 
        {/* router có thẻ đóng và mở là thằng cha thằng con sẻ kế thừa thằng cha :V */}
          <Route index element={<Home />} />
          <Route path="product-detail" element={<Product_detail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
