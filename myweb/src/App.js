



import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutStie from "./layoutsite";

import LayoutAdmin from "./layoutadmin";
import RouterSite from "./router";
import "../src/assets/sass/app.scss"

function App() {
  return (

    <>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutStie />}>
            <Route index element={<Main />} />
            <Route path="product-detail" element={<Product_detail />} />
          </Route>
          <Routes path="/admin" element={<LayoutAdmin />}>
          <Route index element={<index />} />
          </Routes>
        </Routes>
      </BrowserRouter> */}
       <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutStie />}>
            {RouterSite.RouterPublic.map(function (route, index) {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>
          {/*  */}
          <Route path="/admin" element={<LayoutAdmin />}>
            {RouterSite.RouterPrivate.map(function (route, index) {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


    </>

  );
}

export default App;
