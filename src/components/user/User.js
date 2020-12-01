import React, { useEffect } from 'react';
import Page from '../../containers/layout/page';
import AddUser from './AddUser';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { getAllProfesi } from '../../store/modules/profesi/actions';
import { getAllPendidikan } from '../../store/modules/pendidikan/actions';

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProfesi());
    dispatch(getAllPendidikan());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <div className="row">
        <div className="col-12 mb-3">
          <h5>Data User</h5>
          <div className="card shadow ">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <AddUser />
                </div>
                <div className="col-12 mt-5">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default User;
