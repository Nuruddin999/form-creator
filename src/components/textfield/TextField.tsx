import React, { FC } from "react";
import Label from "../label/Label";
import './styles.scss'

type TextFieldProps = {
  required?:boolean,
  type?: string,
  onChange?: (e: any) => void,
  value?: string,
  error?: string,
  onError?: (e: any) => void,
  label?: string,
  placeholder?: string,
  isRemoveIcon?:boolean,
  delOptionsVaraint?:()=>void
}

const TextField: FC<TextFieldProps> = ({
  value,
  required,
  onChange,
  onError,
  placeholder,
  type,
  error,
  label,
  isRemoveIcon,
  delOptionsVaraint
}) => <div className='textfield'>
    {label && <div>
      <Label label={label} error={error}/>
    </div>}
    <div className={`input-container ${isRemoveIcon ? 'removeIcon':''}`}>
      <input
      className={error && 'error'}
      value={value}
      onChange={onChange}
      required={required}
      type={type}
      placeholder={placeholder}
      />
     { isRemoveIcon && placeholder !== 'значение опции' && <i className="remove-icon" onClick={delOptionsVaraint}>X</i>
    }
    </div>
  </div>

export default TextField;