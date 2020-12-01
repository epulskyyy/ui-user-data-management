import React from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
function Page({ children }) {
  return <div className="ct-container">{children}</div>;
}
export default withRouter(Page);
