import React, { FC } from 'react';
import './loaderstyle.scss'

const Loader: FC = () => {
  return (
    <div className='lds-wrapper'>
      <div className="lds-dual-ring"></div>
      </div>
  );
};

export default Loader;
