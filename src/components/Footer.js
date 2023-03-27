import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='sec py-5 has-background-light px-6'>
      <div className='is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap'>
        <div>
          <div>
            <h3 className='has-text-weight-semibold'>Address:</h3>
            <p className='has-text-grey'>Main str. 15, ABC city 12345</p>
          </div>
          <div>
            <h3 className='has-text-weight-semibold'>Phone:</h3>
            <p className='has-text-grey'>0123456789</p>
          </div>
          <div>
            <h3 className='has-text-weight-semibold'>E-Mail:</h3>
            <p className='has-text-grey'>little_lemon@email.com</p>
          </div>
        </div>

        <div className='is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center'>
          <Link className='has-text-grey has-text-weight-semibold' to='/'>
            Home
          </Link>
          <Link className='has-text-grey has-text-weight-semibold' to='/about'>
            About
          </Link>
          <Link
            className='has-text-grey has-text-weight-semibold'
            to='/reserve'
          >
            Reserve
          </Link>
          <Link className='has-text-grey has-text-weight-semibold' to='contact'>
            Contact
          </Link>
        </div>

        <div>
          <iframe
            width='300'
            height='200'
            frameBorder='0'
            src='https://www.bing.com/maps/embed?h=400&w=500&cp=49.00004203215393~416.99981689453125&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8'
            scrolling='no'
            title='1'
          ></iframe>
        </div>
      </div>
      <div className='mt-5'>
        <strong>Little-Lemon </strong>
        <span className='has-text-grey'>
          &copy; All rights reserved 2023 by Mahmoud Moussa
        </span>
      </div>
    </footer>
  );
}

export default Footer;
