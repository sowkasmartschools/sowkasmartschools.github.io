import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Footer_SSS.css';

function Footer_SSS() {
    return (
      <div>
<div class="container-fluid pb-0 mb-0 justify-content-center text-light">
<footer>
    <div class="row my-5 justify-content-center py-5">
        <div class="col-11">
            <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <h3 class="text-muted mb-md-0 mb-5 bold-text">Sowka Smart Schools</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                    <ul class="list-unstyled">
                        <li><Link to="/" style={{color: '#627482'}}>Home</Link></li>
                        <li><Link to="/about" style={{color: '#627482'}}>About Us</Link></li>
                        <li><Link to="/contact" style={{color: '#627482'}}>Contact Us</Link></li>
                    </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                    <p class="mb-1">Sowka Smart Schools,<br/>7-106, opp BPCL petrol Bunk, Kamayyathopu</p>
                    <p>Vijayawada</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                    <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> Sowka Smart Schools 2021, All Rights Reserved.</small>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                    <small> 
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span> 
                        <b>Email Us:</b>&nbsp;<a style={{color: '#627482'}} href="mailto:sowkasmartschools@gmail.com">sowkasmartschools@gmail.com</a>
                        <br /><b>Call Us:</b>&nbsp;9390203040,&nbsp;9390333335
                    </small>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
      </div>
    );
  }
  
  export default Footer_SSS;
