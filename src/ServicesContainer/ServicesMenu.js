import React from 'react';


function ServicesMenu(props){

    const handleButton = (e) => {
        props.handleViewChange(e.target.value);
    }

    return(
        <>
            <div>
                <h2>Full Tree</h2>
                <button onClick={handleButton} value="full_tree">Start Now</button>
            </div>

            <div>
                <h2>Half Tree</h2>
                <button onClick={handleButton} value="full_tree">Start Now</button>
            </div>
        </>
    )
}

export default ServicesMenu;