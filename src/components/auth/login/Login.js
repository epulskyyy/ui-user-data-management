import React from 'react';
import './login.scss';
const Form = React.lazy(() => import('./Form'));
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card__left">
          <div className="login-card__left__container">
            <div className="login-card__left__title">
              <h5>USER DATA MANAGEMENT</h5>
            </div>
          </div>
        </div>
        <div className="login-card__right">
          <div className="login-card__right__form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
