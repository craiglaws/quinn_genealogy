import { Route } from 'react-router-dom';

import ServicesMenu from './ServicesMenu';
import ServiceTreeView from './ServiceTreeView';

function ServicesContainer(){




    return(
        <>
            <Route exact path="/services">
                <ServicesMenu/>
            </Route>
            <Route path="/services/halftree">
                <ServiceTreeView halftree/>
            </Route>
            <Route path="/services/fulltree">
                <ServiceTreeView fulltree/>
            </Route>
        </>
    )

}

export default ServicesContainer;