import React, { useEffect } from 'react';
import Page from '../../containers/layout/page';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { getAllProfesi } from '../../store/modules/profesi/actions';
import AddProfession from './AddProfession';

const Profession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProfesi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <div className="row">
        <div className="col-12 mb-3">
          <h5>Data Profesi</h5>
          <div className="card shadow ">
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <AddProfession />
                </div>
                <div className="col-8">
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

export default Profession;
