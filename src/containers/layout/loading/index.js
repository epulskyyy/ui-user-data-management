import React from 'react';
import './_loading.scss';
export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-page">
        <img src={require('./fullfabric.loading.gif')} alt="" />
      </div>
    </div>
  );
}
