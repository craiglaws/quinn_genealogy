import React, { useState } from 'react';
import ServicesMenu from './ServicesMenu';
import ServicesTreeView from './ServicesTreeView';

function ServicesContainer(props){

    const [userTreeView, setUserTreeView] = useState('menu');

    function handleViewChange(view){
        setUserTreeView(view)
    }

    if(userTreeView === 'menu'){
        return(
            <ServicesMenu handleViewChange={handleViewChange}/>
        )}

    if(userTreeView === 'full_tree' || userTreeView === 'half_tree'){
        return(
            <ServicesTreeView userTreeView={userTreeView} />
        )
    }


}

export default ServicesContainer;