import React, { FC, useState } from "react";
import TextField from "../textfield/TextField";
import './styles.scss'
import Vector from '../../Vector.svg'
import Label from "../label/Label";

type SelectProps = {
  required?: boolean,
  value: string,
  onChange: (value:string) => void,
  options: Array<string>,
  label: string,
  propertyNumber?: number
}

const DropDown: FC<SelectProps> = ({
  required,
  onChange,
  options,
  value,
  label,
  propertyNumber
}) => {
  const [isOpen, setOpen] = useState(false)
  const [clickedIndex, setIsClicked] = useState<number | null>(null)
  const handleClick = (index: number, value: string) => {
    setIsClicked(index)
    onChange(value)
    setOpen(state => !state)
  }
  return <div>
    <div>
      <Label label={label} />
    </div>
    <div className={`dropdown ${isOpen ? 'isopened' : ''}`}>
      <div   className={`dropdown-header ${isOpen ? 'isopened' : ''}`}><span>
        {value}
      </span>
        <img src={Vector} className='vector-svg' alt='vector icon' onClick={() => setOpen(state => !state)} />
      </div>
      {isOpen && <div className='dropdownlist'>
        {options.map((option, index) => <div
          className={`dropdown-list-item ${clickedIndex === index ? 'clicked' : ''}`}
          onClick={(e) => handleClick(index, option)}>
          <span>{option}</span>
        </div>)}
      </div>}
    </div>
  </div>
}

export default DropDown;