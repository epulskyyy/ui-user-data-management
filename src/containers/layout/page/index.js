import React from 'react';

import { withRouter } from 'react-router-dom';
import './page.scss';
import ScrollUp from './scrollUp/ScrollUp';

const Sidemenu = React.lazy(() => import('./sidebar/SideMenu'));
const Navbar = React.lazy(() => import('./navbar/Navbar'));
const Page = (props) => {
  return (
    <div className="d-flex">
      <Sidemenu {...props} />
      <div id="container-page" className="container-page">
        <Navbar />
        {props.children}
        <ScrollUp />
      </div>
    </div>
  );
};

export default withRouter(Page);
