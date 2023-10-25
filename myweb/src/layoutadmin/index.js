import { Navigate,Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Header";
import Footer from "./Footer";
import {useAuth} from "../provider/AuthProvider";


function LayoutAdmin() {
    const { user } = useAuth();
    if(user) {
        <Navigate to="/login" replace={true}/>
    }
    return (
        <>

            <Header />
            <section className="maincontent">
                <div className="container-fluid py-3">
                    <Outlet />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LayoutAdmin;