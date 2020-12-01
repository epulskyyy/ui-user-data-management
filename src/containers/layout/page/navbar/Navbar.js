import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const showHandler = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.className = 'sidebar open';
    const nabvarBtn = document.getElementById('sidebar-show');
    nabvarBtn.className = 'btn btn-cos bounce hide';
    const container = document.getElementById('container-page');
    container.className = 'container-page ';
    const backdrop = document.getElementById('backdrop');
    backdrop.className = 'backdrop open';
  };
  const showCollapseHandler = () => {
    const collapse = document.querySelector('.page-navbar__collapse__body');
    collapse.classList.add('open');
  };
  const closeCollapseHandler = () => {
    const collapse = document.querySelector('.page-navbar__collapse__body');
    collapse.classList.remove('open');
  };
  return (
    <div className="page-navbar">
      <div className="page-navbar__left ">
        <button
          id="sidebar-show"
          className="btn btn-cos bounce hide "
          onClick={showHandler}
        >
          <FontAwesomeIcon icon="indent" />
        </button>
      </div>
      <div className="page-navbar__right">
        <div className="page-navbar__right__item"></div>
        <div className="page-navbar__right__user">
          <div className="page_nav_right user-title">
            <h5>Admin</h5>
            <h5>admin</h5>
          </div>
          <div className="page_nav_right user-images">
            <img
              className="user-image"
              alt=""
              src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i"
            />
          </div>
        </div>
        <div className="page-navbar__logout">
          <button className="btn ">
            <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        </div>
      </div>
      <div className="page-navbar__collapse">
        <button onClick={showCollapseHandler} className="btn bounce">
          <FontAwesomeIcon icon="ellipsis-v" />
        </button>
        <div className="page-navbar__collapse__body">
          <div className="collapse_close">
            <button
              onClick={closeCollapseHandler}
              className="btn collapse_close__btn"
            >
              X
            </button>
          </div>
          <ul className="collpase_items">
            <li className="collapse_item">
              <Link to="/#">
                <div className="collapse_item__user">
                  <img
                    className="user-image"
                    alt=""
                    src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i"
                  />
                </div>
                <span>
                  <h5>Name Lengkap</h5>
                  <h5>position</h5>
                </span>
              </Link>
            </li>

            <li className="collapse_item ">
              <button className="collapse_item__sign-out">
                Keluar
                <FontAwesomeIcon icon="sign-out-alt" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
