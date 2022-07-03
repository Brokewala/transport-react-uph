import React from "react";
import Header from "../Components/Headers/Header";
import Footer from "../Components/Footers/Footer";

const Layout = ({children}) =>{

    return (
        <div className="Layout">
            <Header/>
            <div className="container my-5">
               {children}
            </div>
            <Footer/>
        </div>
    );

};

export default Layout;
