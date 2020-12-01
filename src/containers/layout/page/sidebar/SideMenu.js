import React from 'react';
import './sideMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { SIDE_BAR } from '../../../../constants';
import { history } from '../../../../history';

const hideHandler = () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.className = 'sidebar hide';
  const nabvarBtn = document.getElementById('sidebar-show');
  nabvarBtn.className = 'btn btn-cos bounce';
  const container = document.getElementById('container-page');
  container.className = 'container-page hide';
  const backdrop = document.getElementById('backdrop');
  backdrop.className = 'backdrop hide';
};
const SideMenu = (props) => {
  return (
    <>
      <div id="backdrop" onClick={hideHandler} className="backdrop hide"></div>
      <div id="sidebar" className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header__title">
            <FontAwesomeIcon icon="bell" />
            <h3>Admin</h3>
          </div>
          <div className="sidebar-header__close">
            <button
              id="sidebar-hide"
              className="sidebar-close"
              onClick={hideHandler}
            >
              <FontAwesomeIcon icon="outdent" />
            </button>
          </div>
        </div>
        <div className="sidebar-body">
          <ul>
            {SIDE_BAR.map((item, index) =>
              item.separator ? (
                <li key={index} className="list-item">
                  <label className="list-separator">{item.name}</label>
                </li>
              ) : (
                <li key={index} className="list-item ">
                  <Link
                    className={`link-item btn sa-btn sa-btn-top ${
                      item.to === history.location.pathname ? 'active' : ''
                    }`}
                    to={item.to}
                  >
                    <span className="link-item__icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
