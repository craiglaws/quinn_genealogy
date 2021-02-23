import React from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../images/logo-no-white.png';
import fam1 from '../images/fam1rect.jpeg';
import fam2 from '../images/fam2sq.jpeg';
import fam3 from '../images/fam3sq.jpeg';
import fam4 from '../images/fam4sq.jpg';
import fam5 from '../images/fam5sq.jpeg';



function HomeContainer(){
    return(
        <div className="container" >
            <section className='row justify-content-center align-items-center py-4'>
                <h1 className='script-text'>Quinn</h1>
                <img src={companyLogo} alt='Quinn Tree Logo' width='100px'/>
                <h1 className='script-text'>Genealogy</h1>
            </section>

            <div className='row '>
                <div className='col-4 text-center pt-3'>
                    <h2 className='script-text-2'>What We Do</h2>
                    <p>The two main services offered are a fulltree and half tree research. These can be tailored to find out exactly what you want.</p>
                    < Link className='btn btn-primary-lt shadow mb-4'  to='/services'>Explore Services</Link>
                </div>

                <div className='col-8 pic-collage text-center'>
                    <img className='col-6 p-0' src={fam1} alt='family'/>
                    <img className='col-4 p-0' src={fam2} alt='family'/>
                    <img className='col-3 p-0' src={fam3} alt='family'/>
                    <img className='col-3 p-0' src={fam4} alt='family'/>
                    <img className='col-3 p-0' src={fam5} alt='family'/>

                </div>
            </div>
                   




        </div>
           

    )
}

export default HomeContainer;
