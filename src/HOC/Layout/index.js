import React, { useState } from 'react';
import Auxiliary from '../Auxiliary';
import Toolbar from '../../components/navigation/Toolbar';
import SideDrawer from '../../components/navigation/SideDrawer';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  // open and close sideDrawer and backDrop
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  // get all classes
  const { content } = classes;

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToogleHandler = () => {
    setShowSideDrawer((curr) => !curr);
  };

  return (
    <Auxiliary>
      {/* <div>Toolbar, SlideDrawer, Backdrop</div> */}
      <Toolbar drawerToggleClicked={sideDrawerToogleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={content}>{children}</main>
    </Auxiliary>
  );
};

export default Layout;
