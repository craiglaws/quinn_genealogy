import React from 'react';
import { Link } from 'react-router-dom';
import tree from '../images/tree-background.png'


function ServicesMenu(){



    return(
        <div className='tree-bg'>
            <div className='container pt-4 text-center'>

                <div className='opacity'>
                    <h2 className='script-text-2' >What I Offer</h2>
                    <p>
                        My services are tailor-made for you by using different techniques I can delve into your ancient family history or stay closer to home trying to find a long lost relative.
                    </p>
                    <p>
                        After chosing a service you can provide me with as much family history as possible and I will get to work!
                    </p>
                </div>


                <div className='row mt-4'>
                    <div className='col-6'>
                        <div className='card service-card service-card-dk'>
                            <div className='card-body'>
                                <h3 className='card-title script-text-2'>Full Tree</h3>
                                <p className='card-text'>
                                   Both sides of your family will be researched
                                </p>

                                <Link className='btn btn-primary-lt' to="/services/fulltree">Start Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='card service-card service-card-dk'>
                                <div className='card-body'>
                                    <h3 className='card-title script-text-2'>Half Tree</h3>
                                    <p className='card-text'>
                                        Choose a family side to be researched
                                    </p>

                                    <Link className='btn btn-primary-lt' to="/services/halftree">Start Now</Link>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='row justify-content-center pt-2'>
                    <div className='col-6'>
                        <div className='card service-card service-card-lt'>
                                <div className='card-body'>
                                    <p className='card-text'>
                                        Not sure what service you want? Feel free to contact me to talk about the options
                                    </p>
                                    <Link className=' btn btn-primary-drk shadow' to="/contact">Contact Me</Link>
                                </div>
                            </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default ServicesMenu;