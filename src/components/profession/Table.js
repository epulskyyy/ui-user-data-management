import React, { useState } from 'react';
import ButtonLink from '../asset/button/ButtonLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteSwall, swallBasic } from '../../utils/sweetAlertFn';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteProfesi,
  getAllProfesi,
  updateProfesi,
} from '../../store/modules/profesi/actions';

export default function Table() {
  const [isEdit, setIsEdit] = useState('edit');
  const profesi = useSelector((state) => state.profesi);
  const [data, setData] = useState({ nama: '' });
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const editShow = (id, value) => {
    setData({ name: value });
    setIsEdit(id);
  };
  const cencelEdit = () => {
    setIsEdit('edit');
  };
  const saveEdit = (e) => {
    e.preventDefault();
    if (data.nama === '') {
      swallBasic('warning', 'data tidak boleh kosong !');
    }
    dispatch(updateProfesi(isEdit, data)).then((res) => {
      if (res) {
        swallBasic('success', 'data berhasil disimpan !');
        dispatch(getAllProfesi());
        setIsEdit('edit');
        setData({ nama: '' });
      } else {
        swallBasic('error', 'opss, ada yg error!');
      }
    });
  };
  const deleteProfesionHandler = (id) => {
    deleteSwall(deletes, getAll);
    function deletes() {
      return dispatch(deleteProfesi(id));
    }
    function getAll() {
      dispatch(getAllProfesi());
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="bg-cs-blue">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th colSpan="7">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {profesi.isFetching || profesi.data == null
              ? null
              : profesi.data.map((item, key) =>
                  isEdit === item.ID ? (
                    <tr>
                      <td>{key + 1}</td>
                      <td>
                        <input
                          placeholder=""
                          defaultValue={item.nama}
                          value={data.nama}
                          name="nama"
                          onChange={onChangeHandler}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="yellow"
                          title="Simpan"
                          onClick={saveEdit}
                          children={<FontAwesomeIcon icon="save" />}
                        />
                      </td>
                      <td>
                        <ButtonLink
                          onClick={cencelEdit}
                          type="button"
                          typeBtn="submit"
                          color="red"
                          title="Batal"
                          children={<FontAwesomeIcon icon="window-close" />}
                        />
                      </td>
                    </tr>
                  ) : (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{item.nama}</td>
                      <td>
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="yellow"
                          title="Ubah"
                          onClick={() => editShow(item.ID)}
                          children={<FontAwesomeIcon icon="pencil-alt" />}
                        />
                      </td>
                      <td>
                        <ButtonLink
                          type="button"
                          typeBtn="submit"
                          color="red"
                          onClick={() => deleteProfesionHandler(item.ID)}
                          title="Hapus"
                          children={<FontAwesomeIcon icon="trash" />}
                        />
                      </td>
                    </tr>
                  )
                )}
          </tbody>
        </table>
      </div>
    </>
  );
}
