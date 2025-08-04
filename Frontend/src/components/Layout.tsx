import React from 'react'
import NavBar_Light from './reusable/NavBar_Light';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
          <div>
                  <nav className='flex mx-auto w-full justify-center '>
                          <NavBar_Light />
                  </nav>

                  <main >
                          <Outlet />
                  </main>
          </div>
  );
}

export default Layout