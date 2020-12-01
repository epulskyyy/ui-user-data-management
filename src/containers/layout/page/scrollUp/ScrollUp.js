import React, { useEffect } from 'react';
import './scrollUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ScrollUp() {
  useEffect(() => {
    const scrrollUp = document.querySelector('.scroll-up');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 100) {
        scrrollUp.classList.add('up');
      } else {
        scrrollUp.classList.remove('up');
      }
    });
  }, []);
  const scrollUpHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="scroll-up">
      <button onClick={scrollUpHandler} className="btn btn-success">
        <FontAwesomeIcon icon="chevron-up" />
      </button>
    </div>
  );
}
