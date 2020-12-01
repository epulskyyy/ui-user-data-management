import React, { useState } from 'react';
import ButtonLink from '../asset/button/ButtonLink';
import { useDispatch } from 'react-redux';
import {
  postProfesi,
  getAllProfesi,
} from '../../store/modules/profesi/actions';
import { swallBasic } from '../../utils/sweetAlertFn';

export default function AddProfession() {
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
      dispatch(postProfesi(data)).then((res) => {
        if (res) {
          swallBasic('success', 'data berhasil disimpan !');
          dispatch(getAllProfesi());

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
        Tambah Data Profesi
      </h6>
      <form onSubmit={save}>
        <div className="form-group">
          <label htmlFor="nama" className="small">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={data.nama}
            onChange={onChangeHandler}
            placeholder="masukan nama profesi"
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
            onClick={save}
            children="Simpan"
          />
        </div>
      </form>
    </>
  );
}
