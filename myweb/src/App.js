



import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutStie from "./layoutsite";

import LayoutAdmin from "./layoutadmin";
import RouterSite from "./router";
import "../src/assets/sass/app.scss"
import Login from "./layoutadmin/login/login";
import Register from "./layoutadmin/login/register";
import AuthProvider from "./provider/AuthProvider";
import { ProtectedRoute } from "./component/backend/ProtectedRoute";


function App() {




  return (

    <>


      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LayoutStie />}>
                {RouterSite.RouterPublic.map(function (route, index) {
                  const Page = route.component;
                  return <Route key={index} path={route.path} element={<Page />} />
                })}
              </Route>
              {/*  */}
              <Route path="/admin" element={<ProtectedRoute><LayoutAdmin /></ProtectedRoute>}>
                {RouterSite.RouterPrivate.map(function (route, index) {
                  const Page = route.component;
                  return <Route key={index} path={route.path} element={<Page />} />
                })}
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>


    </>

  );

}

export default App;
