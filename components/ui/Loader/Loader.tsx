import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <div className={css.loader}></div>
    </div>
  );
}

export default Loader;