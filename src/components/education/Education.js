import React, { useEffect } from 'react';
import Page from '../../containers/layout/page';
import Table from './Table';
import { useDispatch } from 'react-redux';
import AddEducation from './AddEducation';
import { getAllPendidikan } from '../../store/modules/pendidikan/actions';

const Education = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPendidikan());
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
                  <AddEducation />
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

export default Education;
