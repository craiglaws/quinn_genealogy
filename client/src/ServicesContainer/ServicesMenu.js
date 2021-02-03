import React from 'react';
import { Link } from 'react-router-dom';


function ServicesMenu(){



    return(
        <>
            <div>
                <h2>Full Tree</h2>
                <Link to="/services/fulltree">Start Now</Link>
            </div>

            <div>
                <h2>Half Tree</h2>
                <Link to="/services/halftree">Start Now</Link>
            </div>
        </>
    )
}

export default ServicesMenu;