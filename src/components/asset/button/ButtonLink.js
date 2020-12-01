import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';
export default function ButtonLink({
  type,
  color,
  effect,
  block,
  className,
  typeBtn,
  key,
  to,
  onClick,
  children,
  title,
}) {
  const newColor =
    color === 'green'
      ? 'sa-btn-green'
      : color === 'blue'
      ? 'sa-btn-blue'
      : color === 'red'
      ? 'sa-btn-red'
      : color === 'yellow'
      ? 'sa-btn-yellow'
      : 'sa-btn-dark';
  const newEffect =
    effect === 'right'
      ? 'sa-btn-right'
      : effect === 'left'
      ? 'sa-btn-left'
      : effect === 'top-right'
      ? 'sa-btn-top-right'
      : effect === 'top-left'
      ? 'sa-btn-top-left'
      : effect === 'bottom-right'
      ? 'sa-btn-bottom-right'
      : effect === 'top-right'
      ? 'sa-btn-top-right'
      : effect === 'bottom'
      ? 'sa-btn-bottom'
      : effect === 'top'
      ? 'sa-btn-top'
      : 'sa-btn-cl';
  const newBlock = block ? 'btn-block' : '';

  if (type.toLowerCase() === 'link') {
    return (
      <Link
        key={key}
        to={to}
        className={`btn sa-btn ${newEffect} ${newColor} ${newBlock} ${className}`}
      >
        {children}
      </Link>
    );
  } else if (type.toLowerCase() === 'button') {
    return (
      <button
        onClick={onClick}
        key={key}
        type={typeBtn}
        title={title}
        className={`btn sa-btn ${newEffect} ${newColor} ${newBlock} ${className}`}
      >
        {children}
      </button>
    );
  }
}
