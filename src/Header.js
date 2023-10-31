/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
        <Link to="/">
          <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className="address">
          <LocationOnOutlinedIcon/>
        </div>
        <div className='header_option'>
          <span className='option_line1'>Deliver To Kshitiz </span>
          <span className='option_line2'>India 110046</span>
        </div>

        <div className='header_search'>
            <input className='header_searchinput' type="text" placeholder='Search Amazon.in'/>
            <SearchIcon className='header_searchicon' />
        </div>
        
        <div className="header_nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
              <span className='option_line1'> Hello { !user ? 'Guest':user.email}</span>
              <span className='option_line2'> { user ? 'Sign out': 'Sign in'}</span>
            </div>
          </Link>

          <div className="header_option">
            <span className='option_line1'> Returns</span>
            <span className='option_line2'> & Orders</span>
          </div>

          <div className="header_option">
            <span className='option_line1'> Your</span>
            <span className='option_line2'> Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionbasket">
              <ShoppingCartIcon/>
              <span className='option_line2 basket_count'>{basket?.length}</span>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header