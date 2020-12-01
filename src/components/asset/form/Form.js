import React from 'react';
import Page from '../../../containers/layout/page';
import './form.scss';
import ButtonLink from '../button/ButtonLink';
export default function Form() {
  return (
    <Page>
      <div className="card shadow">
        <div className="card-body">
          <h5>Form</h5>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="text"
                />
              </div>
              <ButtonLink
                to="/"
                type="link"
                className="link_item"
                effect="left"
                color="blue"
              >
                <span>Dashboard</span>
              </ButtonLink>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
    </Page>
  );
}
