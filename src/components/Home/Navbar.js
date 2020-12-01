import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../history';

export default function Navbar() {
  useEffect(() => {}, []);
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nv');
    if (nav == null) {
      return;
    }
    const scroll = window.scrollY;
    if (scroll >= 5) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });
  const pathName = history.location.pathname.split('/')[1];
  return (
    <div className="nv" id="nv">
      <div className="nv-body">
        <div className="nv-body-s">
          <a href="/#home">USER DATA</a>
        </div>
        <div className="nv-body-m">
          {pathName !== '' ? null : (
            <ul>
              <li>
                <Link to="/login" className="">
                  LOGIN
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
