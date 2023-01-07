import { FC } from "react"
import { IProperty } from "../../models/IUser"
import DropDown from "../dropdown/Dropdown"
import TextField from "../textfield/TextField"
import ToggleSWitch from "../ToggleSwitch"
import DeleteIcon from '../../DeleteIcon.svg'
import ArrowIcon from '../../Arrow.svg'
import ArrowDownIcon from '../../arrowdown.svg'
import './property.scss'
import Button from "../button/button"

type PropertyFormProps = {
  propertyNumber?: number,
  propertyOrderNumber?: number,
  toggleId: string,
  property: IProperty,
  onUpdateProperty: (field: string, value: any, propertyIndex?: number) => void,
  openTabIndex?: number | undefined,
  handleOpenTab?: (index: number) => void,
  deleteProperty?: (index: number) => void
}

const PropertyForm: FC<PropertyFormProps> = ({
  propertyNumber,
  propertyOrderNumber,
  property,
  toggleId,
  onUpdateProperty,
  openTabIndex,
  handleOpenTab,
  deleteProperty
}) => {

  const handleOptionsChange = (e: any, optionsIndex: number, key: string) => {
    let list = property.options?.map((optEl, index) => index === optionsIndex ? { ...optEl, [key]: e.target.value } : optEl)
    onUpdateProperty('options', list, propertyNumber)
  }
  const addOptionsVariant = () => {
    if (property.options) {
      onUpdateProperty('options', [...property.options, { key: '', value: '' }], propertyNumber)
    }
  }
  const delOptionsVariant = (index: number) => {
    if (property.options) {
      if (property.options.length > 1) {
        let optionsFiltered = property.options.filter((optns, optnsIndex) => index !== optnsIndex)
        onUpdateProperty('options', optionsFiltered, propertyNumber)
      }
    }
  }
  const handleOptionsValue =(value:string)=>{
    onUpdateProperty('type', value, propertyNumber)
  }

  const isEnabledDisplay = () => {
    if (propertyOrderNumber) {
      return true
    }
    return propertyNumber === openTabIndex
  }

  return <div className={`property-form ${isEnabledDisplay() ? 'isDisplayed' : ''}`}>
    <div>
      <div className={`created-property-item section-title ${propertyNumber !== undefined ? 'is-created' : ''}`}>
        <img
          src={propertyNumber === openTabIndex ? ArrowDownIcon : ArrowIcon}
          alt='arrow icon'
          className='arrow-icon'
        />
        <div onClick={() => handleOpenTab && propertyNumber !== undefined && handleOpenTab(propertyNumber)}>
          <span>{`Свойство ${propertyNumber !== undefined ? propertyNumber + 1 : propertyOrderNumber}: ${property.label}`}</span><br />
          {propertyNumber !== undefined && propertyNumber !== openTabIndex && <span className='created-property-keytype'>{property.type},{property.key}</span>}
        </div>
      </div>
      {isEnabledDisplay() && <div>
        <div className='property-key'>
          <TextField
            label='Ключ свойства'
            value={property.key}
            required
            placeholder='Укажите ключ свойства'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdateProperty('key', e.target.value, propertyNumber)}
          />
        </div>
        <div className='property-label'>
          <TextField
            label='Название свойства'
            value={property.label}
            required
            placeholder='Укажите название свойства'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdateProperty('label', e.target.value, propertyNumber)}
          />
        </div>

        <div className='dropdown-block'>
          <DropDown
            label='Поле для отображения'
            value={property.type}
            onChange={handleOptionsValue}
            options={['Числовое поле', 'Текстовое поле', 'Номер телефона', 'Пароль', 'Выпадающий список']}
            propertyNumber={propertyNumber}
          />
          {property.type === 'Выпадающий список' && <div>
            {property.options && property.options.map((el, index) => <div key={index} className='property-form-dropdown-inputs'>
              <div>
                <TextField
                  type='text'
                  placeholder='ключ опции'
                  value={el.key}
                  required
                  onChange={(e) => handleOptionsChange(e, index, 'key')}
                  isRemoveIcon
                  delOptionsVaraint={() => delOptionsVariant(index)}
                />
              </div>
              <div>
                <TextField
                  type='text'
                  placeholder='значение опции'
                  value={el.value}
                  required
                  onChange={(e) => handleOptionsChange(e, index, 'value')}
                  isRemoveIcon
                />
              </div>
            </div>)}
            <div className="add-options-button">
            <Button type='button' onClick={() => addOptionsVariant()} name='Добавить' variant="fill"/>
            </div>
          </div>}
        </div>
      </div>}
    </div>
    {isEnabledDisplay() && <div className='validation-section'>
      <span className='section-title'>Валидация</span>
      <div className='validation-required-toggle'>
        <ToggleSWitch
          id={toggleId}
          currentValue={property.validation.required}
          Text='hello'
          onChange={(e) => onUpdateProperty('validation', { ...property.validation, required: e.target.checked }, propertyNumber)}
        />
        <span>Обязательно для заполнения</span>
      </div>
      {(property.type === 'Числовое поле' || property.type === 'Пароль' || property.type === 'Текстовое поле') && <div className='validation-section-minmax'>
        <div className='validation-section-min-max-input'>
          <TextField
            type='text'
            label={property.type === 'Числовое поле' ? 'Мин. значение':'Мин. кол-во символов'}
            value={property.validation.min}
            onChange={(e) => onUpdateProperty('validation', { ...property.validation, min: e.target.value }, propertyNumber)}
            required
          />
        </div>
        <div className='validation-section-min-max-input'>
          <TextField
            type='text'
            label={property.type === 'Числовое поле' ? 'Макс. значение': 'Макс. кол-во символов'}
            value={property.validation.max}
            onChange={(e) => onUpdateProperty('validation', { ...property.validation, max: e.target.value }, propertyNumber)}
            required
          />
        </div>
      </div>}
      {(property.type === 'Пароль' || property.type === 'Текстовое поле') && <div className='pattern-block'>
        <TextField
          type='text'
          label='Шаблон ввода'
          value={property.validation.pattern}
          onChange={(e) => onUpdateProperty('validation', { ...property.validation, pattern: e.target.value }, propertyNumber)}
          required={property.type === 'Пароль' || property.type === 'Текстовое поле'}
        />
      </div>}
    </div>}
    <div className='delete-icon' onClick={() => deleteProperty && propertyNumber !== undefined && deleteProperty(propertyNumber)}>
      <img src={DeleteIcon} alt='delete-icon' />
    </div>
  </div>
}
export default PropertyForm