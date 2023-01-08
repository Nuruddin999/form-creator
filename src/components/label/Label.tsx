import React, { FC } from "react";
import './styles.scss'

type TextFieldProps = {
  error?: string,
  label?: string,
}

const Label: FC<TextFieldProps> = ({
  error,
  label
}) => {
  return <div className='labelcomp'>
      <label className={error && 'error'}>{error ? error : label}</label>
  </div>}

export default Label;