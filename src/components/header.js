import React from "react";
import { Link} from "gatsby";

const header = () => {
    return (
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to='/'>OpenItVideo</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/contribute/" className="p-2 text-dark">Добавить</Link>
            </nav>
        </div>
    )
}

export default header;