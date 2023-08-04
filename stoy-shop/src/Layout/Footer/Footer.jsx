import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start bg-dark text-center text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.instagram.com/stoyan.nikolov92/?hl=bg' target="_blank" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/stoyan-nikolov-660a0491/' target="_blank" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/stoine92/stoyanShopWise' target="_blank" className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Stoyan's Goodies
              </h6>
              <p>
                Discover our wide range of gadgets. Enjoy hassle-free shopping and exceptional customer service. Shop now and experience the joy of finding your perfect tool !
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to="/terms" className='text-reset' target="_blank">
                  Terms &amp; Conditions
                </Link>
              </p>
              <p>
                <Link to="/privacy" className='text-reset' target="_blank">
                  Privacy Polocy
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />Sofia, Bulgaria
                </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />stoyan.iv.nikolov@gmail.com
                </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />+ 44 7494 100013
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' />+ 44 7494 100013
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      &#64; 2023 Copyright: 
        <span className='text-reset fw-bold' >
          Stoyan Nikolov
        </span>
      </div>
    </MDBFooter>
  );
}