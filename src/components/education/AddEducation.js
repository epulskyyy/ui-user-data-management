import React, { useState } from 'react';
import ButtonLink from '../asset/button/ButtonLink';
import { swallBasic } from '../../utils/sweetAlertFn';
import {
  postPendidikan,
  getAllPendidikan,
} from '../../store/modules/pendidikan/actions';
import { useDispatch } from 'react-redux';

export default function AddEducation() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ nama: '' });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const save = (e) => {
    e.preventDefault();
    if (data.nama === '') {
      swallBasic('warning', 'data tidak boleh kosong !');
    } else {
      dispatch(postPendidikan(data)).then((res) => {
        if (res) {
          swallBasic('success', 'data berhasil disimpan !');
          dispatch(getAllPendidikan());

          setData({ nama: '' });
        } else {
          swallBasic('error', 'opss, ada yg error!');
        }
      });
    }
  };
  return (
    <>
      <h6 className="badge bg-cs-blue badge-lg d-flex p-2 justify-content-center">
        Tambah Data Pendidikan
      </h6>
      <form>
        <div className="form-group">
          <label className="small">Nama </label>
          <input
            type="text"
            name="nama"
            value={data.nama}
            onChange={onChangeHandler}
            placeholder="masukan nama Pendidikan"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <ButtonLink
            type="button"
            typeBtn="submit"
            color="blue"
            effect="bottom"
            block={true}
            children="Simpan"
            onClick={save}
          />
        </div>
      </form>
    </>
  );
}
