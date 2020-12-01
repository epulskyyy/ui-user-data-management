import React, { useState, useEffect } from 'react';
import ButtonLink from '../asset/button/ButtonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteSwall, swallBasic } from '../../utils/sweetAlertFn';
import { useSelector, useDispatch } from 'react-redux';
import { convertDate } from '../../utils/function';
import {
  getAllUser,
  updateUser,
  deleteUser,
} from '../../store/modules/user/actions';
import { useLocation } from 'react-router-dom';
import queryString from 'querystring';
import { history } from '../../history';

export default function Table() {
  const [isEdit, setIsEdit] = useState('edit');
  const user = useSelector((state) => state.user);
  const profesi = useSelector((state) => state.profesi);
  const pendidikan = useSelector((state) => state.pendidikan);
  const dispatch = useDispatch();
  const location = useLocation();
  const [search, setSearch] = useState('');
  useEffect(() => {
    const values = queryString.parse(location.search.slice(1));
    if (
      values.pageNo == null ||
      values.pageSize == null ||
      values.search == null
    ) {
      dispatch(
        getAllUser(
          values.pageNo || 1,
          values.pageSize || 5,
          values.search || ''
        )
      );
      history.push({
        pathname: '/admin/user',
        search: '?pageNo=1&pageSize=5&search=',
      });
      setSearch('');
    } else {
      dispatch(
        getAllUser(
          values.pageNo <= 0 ? 1 : values.pageNo,
          values.pageSize <= 0 ? 5 : values.pageSize,
          values.search === '' ? '' : values.search
        )
      );
      setSearch(values.search === '' ? '' : values.search);
      history.push({
        pathname: '/admin/user',
        search: `?pageNo=${values.pageNo <= 0 ? 1 : values.pageNo}&pageSize=${
          values.pageSize <= 0 ? 5 : values.pageSize
        }&search=${values.search}`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const historyPush = (page, perPage, search) => {
    history.push({
      pathname: '/admin/user',
      search: `?pageNo=${page}&pageSize=${perPage}&search=${search}`,
    });
  };
  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getAllUser(user.data.page, user.data.per_page, search));
    historyPush(user.data.page, user.data.per_page, search);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const nextHandler = () => {
    dispatch(
      getAllUser(user.data.page + 1, user.data.per_page, user.data.search)
    );
    historyPush(user.data.page + 1, user.data.per_page, user.data.search);
  };
  const prevHandler = () => {
    dispatch(
      getAllUser(user.data.page - 1, user.data.per_page, user.data.search)
    );
    historyPush(user.data.page - 1, user.data.per_page, user.data.search);
  };

  const firstHandler = () => {
    dispatch(getAllUser(1, user.data.per_page, user.data.search));
    historyPush(1, user.data.per_page, user.data.search);
  };
  const lastHandler = () => {
    dispatch(
      getAllUser(user.data.total_page, user.data.per_page, user.data.search)
    );
    historyPush(user.data.total_page, user.data.per_page, user.data.search);
  };

  const cencelEdit = () => {
    setIsEdit('edit');
  };
  const deleteUserHandler = (id) => {
    deleteSwall(deletes, userAll);
    function deletes() {
      return dispatch(deleteUser(id));
    }
    function userAll() {
      dispatch(
        getAllUser(user.data.page, user.data.per_page, user.data.search)
      );
    }
  };
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
  const editShow = (id, item) => {
    console.log(id);
    setIsEdit('show' + id);
    setData({ ...item });
  };
  const saveEdit = (e, id) => {
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
      dispatch(updateUser(id, newDataReq)).then((res) => {
        if (res) {
          swallBasic('success', 'data berhasil disimpan !');
          dispatch(
            getAllUser(user.data.page, user.data.per_page, user.data.search)
          );
          setData({
            nama: '',
            tanggal_lahir: '',
            no_ktp: '',
            ProfesiID: '',
            PendidikanID: '',
          });
          cencelEdit();
        } else {
          swallBasic('error', 'opss, ada yg error!');
        }
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-10">
          <div className="form-group">
            <form onSubmit={onSubmitSearch}>
              <input
                value={search}
                onChange={searchHandler}
                type="text"
                placeholder="cari"
                className="form-control"
              />
            </form>
          </div>
        </div>{' '}
        <div className="col-2">
          <div className="form-group">
            <select className="form-control">
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="bg-cs-blue">
            <tr>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>No KTP</th>
              <th>Profesi</th>
              <th>PendIDikan Akhir</th>
              <th colSpan="7">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {user.isFetching || user.data == null
              ? null
              : user.data.data.map((item, key) => (
                  <tr key={key}>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <input
                          name="nama"
                          value={data.nama}
                          onChange={onChangeHandler}
                          className="form-control"
                        />
                      ) : (
                        item.nama
                      )}
                    </td>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <input
                          type="date"
                          name="tanggal_lahir"
                          value={data.tanggal_lahir}
                          onChange={onChangeHandler}
                          className="form-control"
                        />
                      ) : (
                        convertDate(item.tanggal_lahir).full
                      )}
                    </td>

                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <input
                          name="no_ktp"
                          value={data.no_ktp}
                          onChange={onChangeHandler}
                          className="form-control"
                        />
                      ) : (
                        item.no_ktp
                      )}
                    </td>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <select
                          name="ProfesiID"
                          value={data.ProfesiID}
                          onChange={onChangeHandler}
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
                      ) : (
                        item.Profesi.nama
                      )}
                    </td>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <select
                          name="PendidikanID"
                          value={data.PendidikanID}
                          onChange={onChangeHandler}
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
                      ) : (
                        item.Pendidikan.nama
                      )}
                    </td>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="yellow"
                          title="Simpan"
                          onClick={(e) => saveEdit(e, item.ID)}
                          children={<FontAwesomeIcon icon="save" />}
                        />
                      ) : (
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="yellow"
                          title="Ubah"
                          onClick={() => editShow(item.ID, item)}
                          children={<FontAwesomeIcon icon="pencil-alt" />}
                        />
                      )}
                    </td>
                    <td>
                      {isEdit === 'show' + item.ID ? (
                        <ButtonLink
                          onClick={cencelEdit}
                          type="button"
                          typeBtn="submit"
                          color="red"
                          title="Batal"
                          children={<FontAwesomeIcon icon="window-close" />}
                        />
                      ) : (
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="red"
                          onClick={() => deleteUserHandler(item.ID)}
                          title="Hapus"
                          children={<FontAwesomeIcon icon="trash" />}
                        />
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="btn-group">
        {user.isFetching ? null : (
          <>
            <button
              className="btn "
              disabled={
                user.data == null || (user.data != null && user.data.page <= 1)
              }
              onClick={firstHandler}
            >
              <FontAwesomeIcon icon="angle-double-left" />
            </button>
            <button
              className="btn "
              disabled={
                user.data == null || (user.data != null && user.data.page <= 1)
              }
              onClick={prevHandler}
            >
              <FontAwesomeIcon icon="angle-left" />
            </button>
            <button
              disabled={
                user.data == null ||
                (user.data != null && user.data.page === user.data.total_page)
              }
              className="btn "
              onClick={nextHandler}
            >
              <FontAwesomeIcon icon="angle-right" />
            </button>
            <button
              disabled={
                user.data == null ||
                (user.data != null && user.data.page === user.data.total_page)
              }
              className="btn "
              onClick={lastHandler}
            >
              <FontAwesomeIcon icon="angle-double-right" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
