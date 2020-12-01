import React, { useState } from 'react';
import ButtonLink from '../asset/button/ButtonLink';
import { useSelector, useDispatch } from 'react-redux';
import { swallBasic } from '../../utils/sweetAlertFn';
import { getAllUser, postUser } from '../../store/modules/user/actions';

export default function AddUser() {
  const profesi = useSelector((state) => state.profesi);
  const pendidikan = useSelector((state) => state.pendidikan);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    nama: '',
    tanggal_lahir: '',
    no_ktp: '',
    ProfesiID: '',
    PendidikanID: '',
  });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const save = (e) => {
    e.preventDefault();

    if (
      data.nama === '' ||
      data.tanggal_lahir === '' ||
      data.no_ktp === '' ||
      data.no_ktp === '0' ||
      data.ProfesiID === '' ||
      data.ProfesiID === '0' ||
      data.PendidikanID === '' ||
      data.PendidikanID === '0'
    ) {
      swallBasic('warning', 'data tidak boleh kosong !');
    } else {
      const newDataReq = {
        nama: data.nama,
        tanggal_lahir: data.tanggal_lahir,
        no_ktp: Number(data.no_ktp),
        ProfesiID: Number(data.ProfesiID),
        PendidikanID: Number(data.PendidikanID),
      };
      console.log(newDataReq);
      dispatch(postUser(newDataReq)).then((res) => {
        if (res) {
          swallBasic('success', 'data berhasil disimpan !');
          dispatch(getAllUser());
          setData({
            nama: '',
            tanggal_lahir: '',
            no_ktp: '',
            ProfesiID: '',
            PendidikanID: '',
          });
        } else {
          swallBasic('error', 'opss, ada yg error!');
        }
      });
    }
  };
  return (
    <>
      <h6 className="badge bg-cs-blue badge-lg d-flex p-2 justify-content-center">
        Tambah Data User
      </h6>
      <form onSubmit={save}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label className="small">Nama</label>
              <input
                type="text"
                name="nama"
                value={data.nama}
                placeholder="masukan nama"
                className="form-control"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label className="small">Tanggal Lahir</label>
              <input
                type="date"
                name="tanggal_lahir"
                value={data.tanggal_lahir}
                className="form-control"
                onChange={onChangeHandler}
              />
            </div>
          </div>{' '}
          <div className="col-12">
            <div className="form-group">
              <label className="small">No KTP</label>
              <input
                type="number"
                name="no_ktp"
                value={data.no_ktp}
                placeholder="masukan no ktp"
                className="form-control"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label className="small">Profesi</label>
              <select
                value={data.ProfesiID}
                onChange={onChangeHandler}
                name="ProfesiID"
                className="form-control"
              >
                <option value="">-Pilih Profesi-</option>
                {profesi.isFetching || profesi.data == null
                  ? null
                  : profesi.data.map((item, key) => (
                      <option
                        defaultValue={data.ProfesiID}
                        value={item.ID}
                        key={key}
                      >
                        {item.nama}
                      </option>
                    ))}
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label className="small">Pendidikan akhir</label>
              <select
                value={data.PendidikanID}
                onChange={onChangeHandler}
                name="PendidikanID"
                className="form-control"
              >
                <option value="">-Pilih Pendidikann-</option>
                {pendidikan.isFetching || pendidikan.data == null
                  ? null
                  : pendidikan.data.map((item, key) => (
                      <option key={key} value={item.ID}>
                        {item.nama}
                      </option>
                    ))}
              </select>
            </div>
          </div>
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
