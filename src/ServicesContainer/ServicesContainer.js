import { Route } from 'react-router-dom';

import ServicesMenu from './ServicesMenu';
import ServicesTreeView from './ServicesTreeView';

function ServicesContainer(){


    return(
        <>
            <Route exact path="/services">
                <ServicesMenu/>
            </Route>
            <Route path="/services/halftree">
                <ServicesTreeView/>
            </Route>
            <Route path="/services/fulltree">
                <ServicesTreeView/>
                <ServicesTreeView/>
            </Route>
        </>
    )

}

export default ServicesContainer;