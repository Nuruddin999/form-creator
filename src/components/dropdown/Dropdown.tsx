import  { FC, useState } from "react";

import './styles.scss'
import Vector from '../../Vector.svg'
import Label from "../label/Label";


type SelectProps = {
  required?: boolean,
  value: string,
  onChange: (value:string) => void,
  options: Array<string>,
  label: string,
  propertyNumber?: number,
  error?: string,
}

const DropDown: FC<SelectProps> = ({
  required,
  onChange,
  options,
  value,
  label,
  propertyNumber,
  error
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
      <Label label={label} error={error}/>
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