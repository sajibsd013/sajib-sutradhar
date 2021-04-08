import React from 'react';
import './Notfound.css';
import { Link} from "react-router-dom";

const Notfound = () => {
    return (
        <div id='Notfound' className='d-flex align-items-center justify-content-center container'>
            <div className="ops text-center " >
                <h1 className="display-1 text-danger">404</h1>
                <h4>OPS! - page not found!</h4>
                <p className='text-muted'>Sorry , the page you're looking for doesn't exist </p>

                <Link className='btn btn-outline-primary text-uppercase font-weight-bold' to="/">return home</Link>
            </div>
        </div>
    );
};

export default Notfound;