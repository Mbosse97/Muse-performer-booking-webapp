import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link, useLocation} from 'react-router-dom'

import { AuthContext } from 'utils/auth';

function NavBar() {
    
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const pathname = location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    setActiveItem(path);
  }, [location]);

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
      <Menu secondary size='massive' color='teal'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as = {Link}
          exact
          to = '/'
        />
        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          onClick={handleItemClick}
          as = {Link}
          to = '/events'
        />
        <Menu.Item
          name='profiles'
          active={activeItem === 'profiles'}
          onClick={handleItemClick}
          as = {Link} 
          to = '/profiles'
        />
        <Menu.Menu position='right' size='massive' color='teal'>
        <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as = {Link}
            to = '/login'
          />
        <Menu.Item
            name = 'register'
            active = {activeItem ==='register'}
            onClick= {handleItemClick}
            as = {Link}
            to = '/register'
        />
        </Menu.Menu>
      </Menu>
    );

  }

export default NavBar
