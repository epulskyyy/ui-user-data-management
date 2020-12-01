import React from 'react';
import Page from '../../containers/layout/page';

const Dashboard = () => {
  return (
    <Page>
      <div className="row">
        <div className="col-6 mb-3">
          <div className="card shadow bg-cs-green">
            <div className="card-body">Data User</div>
          </div>
        </div>
        <div className="col-6 mb-3 ">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="card shadow bg-cs-blue">
                <div className="card-body">Data Profesi</div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="card shadow bg-cs-red">
                <div className="card-body">Data Pendidikan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="card shadow ">
            <div className="card-body">11</div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
