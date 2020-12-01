import React from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <>
      <h5 className="text-center login-card__right__title">LOGIN</h5>
      <div className="form-group">
        <span className="form">
          <input
            className="skinny"
            Form
            id="username"
            type="text"
            placeholder="Masukan Username"
          />
          <label htmlFor="username">Username</label>
        </span>
      </div>
      <div className="form-group">
        <span className="form">
          <input
            className="skinny"
            id="password"
            type="password"
            placeholder="Masukan Password"
          />
          <label htmlFor="password">password</label>
        </span>
      </div>
      <div className="form-group d-flex justify-content-center">
        <Link
          to="/admin/user"
          type="submit"
          className="btn-cus btn-cus-1 btn-block "
        >
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Login
        </Link>
      </div>
    </>
  );
}
