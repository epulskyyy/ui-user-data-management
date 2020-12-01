import React from 'react';
import Page from '../../../containers/layout/page';
import './button.scss';
import { Link } from 'react-router-dom';
export default function Button() {
  return (
    <Page>
      <div className="card shadow">
        <div className="card-body">
          <h5>Button</h5>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <small>btn sa-btn sa-btn-right sa-btn-green</small>
                  <br></br>
                  <span
                    data-toggle="tooltip"
                    data-placement="right"
                    data-title="ini tombol"
                  >
                    <button className="btn sa-btn sa-btn-right sa-btn-green">
                      Button
                    </button>
                  </span>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-left sa-btn-blue</small>
                  <br></br>
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    data-title="ini juga tombol"
                  >
                    <button className="btn sa-btn sa-btn-left sa-btn-blue">
                      Button
                    </button>
                  </span>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-bottom sa-btn-red</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-bottom sa-btn-red">
                    Button
                  </button>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-top sa-btn-yellow</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-top sa-btn-yellow">
                    Button
                  </button>
                </div>{' '}
                <div className="col-6">
                  <small>
                    btn sa-btn sa-btn-right-left sa-btn-yellow btn-block
                  </small>
                  <br></br>
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    data-title="ini juga tombol"
                  >
                    <button className="btn sa-btn sa-btn-right-left sa-btn-yellow btn-block">
                      Button
                    </button>
                  </span>
                </div>{' '}
                <div className="col-6">
                  <small>
                    btn sa-btn sa-btn-top-bottom sa-btn-red btn-block
                  </small>
                  <br></br>
                  <span
                    data-toggle="tooltip"
                    data-placement="bottom"
                    data-title="ini juga tombol"
                  >
                    <button className="btn sa-btn sa-btn-top-bottom sa-btn-red btn-block">
                      Button
                    </button>
                  </span>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-top-left sa-btn-red btn-block</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-top-left sa-btn-red btn-block">
                    Button
                  </button>
                </div>
                <div className="col-6">
                  <small>
                    btn sa-btn sa-btn-top-right sa-btn-red btn-block
                  </small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-top-right sa-btn-red btn-block">
                    Button
                  </button>
                </div>{' '}
                <div className="col-6">
                  <small>
                    btn sa-btn sa-btn-bottom-left sa-btn-red btn-block
                  </small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-bottom-left sa-btn-red btn-block">
                    Button
                  </button>
                </div>{' '}
                <div className="col-6">
                  <small>
                    btn sa-btn sa-btn-bottom-right sa-btn-red btn-block
                  </small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-bottom-right sa-btn-red btn-block">
                    Button
                  </button>
                </div>{' '}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <small>btn sa-btn sa-btn-cl sa-btn-green btn-block</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-cl sa-btn-green btn-block">
                    Button
                  </button>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-cl sa-btn-blue btn-block</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-cl sa-btn-blue btn-block">
                    Button
                  </button>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-cl sa-btn-red btn-block</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-cl sa-btn-red btn-block">
                    Button
                  </button>
                </div>
                <div className="col-6">
                  <small>btn sa-btn sa-btn-cl sa-btn-yellow btn-block</small>
                  <br></br>
                  <button className="btn sa-btn sa-btn-cl sa-btn-yellow btn-block">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h5>NavLink</h5>
          <div>
            <ul className="nav">
              <li className="nav_link">
                <Link className="link link__right link-green">
                  link__right link-green
                </Link>
              </li>
              <li className="nav_link">
                <Link className="link link__left link-blue">
                  link__left link-blue
                </Link>
              </li>
              <li className="nav_link">
                <Link className="link link__right-left link-red">
                  link__right-left link-red
                </Link>
              </li>
              <li className="nav_link">
                <Link className="link link__middle link-yellow">
                  link__middle link-yellow
                </Link>
              </li>
            </ul>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
