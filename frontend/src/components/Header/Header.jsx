import React,{ useRef, useEffect } from 'react'
import './header.css'
import { Container } from "reactstrap";

import { NavLink, Link } from 'react-router-dom';

const NAV__LINKS = [
  {
    display:'Home',
    url:'/home'
  },
  {
    display:'About',
    url:'/about'
  },
  { 
    display:'Contact-us',
    url:'/contact'
  },
  {
    display:'Login',
    url:'/login'
  },
  {
    display:'Signup',
    url:'/signup'
  },
  

];

const Header = () => {

  const headerRef = useRef(null)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80 ){
        headerRef.current.classList.add('header__shrink')
      }
      else{
        headerRef.current.classList.remove('header__shrink')
      }
    });
      return () => {
        window.removeEventListener('scroll',null)
      };

  }, []);

  return <header className='header' ref={headerRef}>
<Container>
  <div className='navigation'>
    <div className='logo'>
      <h2 className='d-flex gap-2 align-items-center'>
        <span>
        <i class="ri-mental-health-fill"></i>
        </span> 
         Chill Down
      </h2>
    </div>

    <div className='nav__menu'>
      <ul className='nav__list'> 
      {NAV__LINKS.map((item,index)=>(
          <li className='nav__item' key={index}>
          <NavLink 
            to = {item.url} 
            className= { navClass=> navClass.isActive ? 'active' :'' 
            }
          >
            {item.display}
          </NavLink>
          </li>
        ))}
      </ul>
    </div>

<div className='nav__right d-flex align-items-center gap-5'>
  <button className='btn d-flex gap-2 align-items-center'>
          <span><i class="ri-booklet-line"></i>
      </span> 
    <Link to="/blog"> Blogs </Link> 
     </button>
     
    <span className='mobile__menu'><i className="ri-menu-line"></i></span>
</div>


  </div>
</Container>
  </header>
}

export default Header