import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '../../components/button/button';
import DropDown from '../../components/dropdown/Dropdown';
import TextField from '../../components/textfield/TextField';
import { phoneValidationPattern } from '../../constants';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './styles.scss'

const SchemaItem: FC = () => {
  const [validationStatus, setValidationStatus] = useState('');
  const [fields, setFields] = useState({})
  const [fieldsError, setFieldsError] = useState({})
  const { fetchSchemaItem } = useActions();
  const { schemaItem, isLoading } = useTypedSelector(state => state.schema);
  const { id } = useParams<{ id: string }>()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleValidation()
  }

  const handleValidation = () => {
    let formIsValid = true
    schemaItem.fields.forEach(({ label, validation, type }) => {
      const innerStateField = fields[label as keyof typeof fields]
      if (!innerStateField && validation.required) {
        setFieldsError(state => ({ ...state, [label]: 'Поле должно быть заполнено' }))
        formIsValid = false
      }
      else if (type === 'Числовое поле' && validation.required && validation.min && validation.max) {
        if (isNaN(innerStateField)|| parseInt(innerStateField)  < parseInt(validation.min) || parseInt(innerStateField) > parseInt(validation.max)) {
          setFieldsError(state => ({ ...state, [label]: `Значение должно быть не меньше ${validation.min} и не больше ${validation.max}` }))
          formIsValid = false
        }
      }
      else if (type === 'Текстовое поле' && validation.required && validation.min && validation.max && validation.pattern) {
        if ((innerStateField as string).length < parseInt(validation.min) || (innerStateField as string).length > parseInt(validation.max)) {
          setFieldsError(state => ({ ...state, [label]: `Символов должно быть не меньше ${validation.min} и не больше ${validation.max}` }))
          formIsValid = false
        }
        else if (!(new RegExp(validation.pattern).test(innerStateField as string))) {
          setFieldsError(state => ({ ...state, [label]: `Значение не соответсвует шаблону` }))
          formIsValid = false
        }
      }
      else if (type === 'Номер телефона' && validation.required) {
        if (!(phoneValidationPattern.test(innerStateField as string))) {
          setFieldsError(state => ({ ...state, [label]: `Телефон должен быть в формате +7 (999) 999 99 99 или в формате 8 (999) 999 99 99` }))
          formIsValid = false
        }
      }
    })
    setValidationStatus(state => formIsValid ? 'passed' : 'failed')
    return formIsValid;
  }
  const handleChangeField = (fieldName: string, fieldValue: string) => {
    setFields(state => ({ ...state, [fieldName]: fieldValue }))
    setValidationStatus(state => '')
    setFieldsError(state => {
      const errors = { ...fieldsError }
      delete errors[fieldName as keyof typeof errors]
      return ({ ...errors })
    }
    )
  }

  useEffect(() => {
    fetchSchemaItem(id)
  }, []
  )
  return isLoading ? <div>loading</div> :  (
    <div className='form-item'>
      {schemaItem.uid && <div className='fields-container'>
        <h2>{schemaItem.name}</h2>
        <form id='form-item' onSubmit={handleSubmit}>
          {schemaItem.fields.map((field, index) =>
            <div key={field.key}>
              {field.options ?
                <div className='form-item-dropdown'>
                  <DropDown
                    options={field.options.map((option) => option.value)}
                    value={fields[field.label as keyof typeof fields] ? fields[field.label as keyof typeof fields] : ''}
                    onChange={(e) => handleChangeField(field.label, e)}
                    label={field.validation.required ? field.label: ''}
                    error={fieldsError[field.label as keyof typeof fieldsError]}
                  />
                </div>
                : <div className='form-item-shema-item'>
                  <TextField
                    error={fieldsError[field.label as keyof typeof fieldsError]}
                    label={field.validation.required ? field.label: ''}
                    value={fields[field.label as keyof typeof fields] ? fields[field.label as keyof typeof fields] : ''}
                    onChange={(e) => handleChangeField(field.label, e.target.value)}
                    placeholder={`Введите ${field.label}`}
                  />
                </div>}
            </div>)}
        </form>
        <div className='validation-button'>
          <Button variant='fill' type='submit' form='form-item' name='Валидация' />
        </div>
        {validationStatus !== '' && <div className={`validation-result ${validationStatus === 'failed' ? 'validation-error' : 'validation-success'}`}>
          <span>x</span>
          <span>{validationStatus === 'passed' ? 'Валидация пройденв' : 'Валидация не пройдена'}</span>
        </div>}
      </div>}
    </div>
  );
};

export default SchemaItem;