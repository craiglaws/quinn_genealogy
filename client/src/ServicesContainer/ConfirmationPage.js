import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmationPage(){
    return(
        <div className='tree-bg'>
            <div className='container justify-content-center align-items-center py-5'>

        
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-8 text-center opacity'>
                        <h2 className='script-text-2'>Thank You</h2>
                        <p className=''>
                            We will be in touch soon with a detailed plan of the research to be carried out
                        </p>
                        < Link className='btn btn-primary-drk shadow mb-4'  to='/'>Back to Homepage</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ConfirmationPage;
