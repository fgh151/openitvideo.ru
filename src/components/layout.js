import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export default ({ children }) => (
    <>
        <Header />
        <div className='container-fluid'>
            <div className='row'>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <Sidebar />
                </nav>
                <main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
                    {children}
                </main>
            </div>
        </div>
    </>
);