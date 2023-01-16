import  { FC } from 'react';
import './errorinfostyle.scss'

const ErrorInfo: FC<{title:string}> = ({title}) => {

  return (<div className='error-info'>
    <span>{title}</span>
  </div>
  );
};

export default ErrorInfo;
