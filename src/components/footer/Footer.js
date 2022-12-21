import React from 'react'
import {Link} from 'react-router-dom'
import { selectLanguage } from "../../redux/action/languages";
import { connect } from 'react-redux';
import { Component } from 'react';
 import DropDownlang from '../navbar/index'
 import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const  Footer = ({languages})  => {
  
    const {
       
       tvserial,
       home,
       movie,
       footer_description
      } = languages;
      
  return (
  <div>  
 <MDBFooter bgColor='black' className='text-center opacity-80 bg-black text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/zurab-dalakishvili-a7b996220/' target={'_blank'} className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/ZukaGitHub1' target={'_blank'} className='me-4 text-reset'>
            <MDBIcon  fab icon="github" />
          </a>
        </div>
      </section>
      <div className='p-3   w-full float-right'>
        <img className='rounded-xl ' width={100} height={70} src="https://user-images.githubusercontent.com/62456796/177899206-f3f77d8c-833f-4968-aa31-fb360a600eb9.png" alt='tmdb' />
      </div>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
              <h6 className='text-uppercase flex items-center gap-3 fw-bold mb-4'>
                <img className=" h-14 w-auto " src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c"/>
                Hero Movies
              </h6>
              <p>
               {footer_description}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 flex flex-col items-center'>
              <h6 className='text-uppercase fw-bold mb-4'>Languages</h6>
            
                <DropDownlang />
              
            </MDBCol>

            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-md-0 mb-4 flex flex-col text-center items-center ft-menu'>
              <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
              <p>
                <Link className='text-reset '>
                  {home}
                </Link>
              </p>
              <p>
                <Link  className='text-reset '>
                 {movie}
                </Link>
              </p>
              <p>
                <Link  className='text-reset  ' >
                  {tvserial}
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Georgia ,Tbilisi ,KA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                zu.drake2@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +995 234 567 88
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-4  ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <Link className='text-reset fw-bold p-1'>
           TMDB 
        </Link>
      </div>
     
    </MDBFooter>
    </div>
  )
      }

const mapStateToProps = (state) => ({
    languages: state.Languages,
  });

export default connect(mapStateToProps, {
    selectLanguage,
  })(Footer)
  
