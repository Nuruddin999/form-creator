import { type } from "os";
import React, { FC } from "react";
import { DiagnosticCategory } from "typescript";
import './styles.scss'

type ButtonProps = {
  name?: string,
  disabled?: boolean,
  onClick?: (e: any) => void,
  type?: "button" | "submit" | "reset" | undefined,
  form?: string,
  variant?:"fill" | "inline" | undefined
}

const Button: FC<ButtonProps> = ({
  name,
  onClick,
  disabled,
  type,
  form,
  variant
}) => <div className='uibutton'>
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
      className={variant}
    >
      {name}
    </button>
  </div>

export default Button;