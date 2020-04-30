import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <Fragment>
      <a href='https://usemytechstuff2.netlify.app/'>Home</a>
      <Link to='/rentals'>Rental</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Sign Up</Link>
      <Link to="/myequipment" >My Equipment</Link>
    </Fragment>
  );
}

export default NavLinks;
