
import  { FC, useEffect,  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/button/button';
import PropertyForm from '../../components/property/PropertyForm';
import { useActions } from '../../hooks/useActions';
import { usePrevious } from '../../hooks/usePrevious';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {  IProperty } from '../../models/IUser';
import { RouteNames } from '../../router';
import './styles.scss'
import TextField from '../../components/textfield/TextField';
import Loader from '../../components/loader/loader';
interface AddModalProps {

}

const AddModal: FC<AddModalProps> = (props) => {
  const { schemaItem, isLoading } = useTypedSelector(state => state.schema);

  let { id } = useParams<{ id?: string }>()
  const [properties, setProperty] = useState<Array<IProperty>>(id ? schemaItem.fields : [])

  const [property, setField] = useState({
    label: '',
    key: '',
    type: 'Текстовое поле',
    options: [{ key: '', value: '' }],
    validation: {
      required: true,
      min: '',
      max: '',
      pattern: ''
    }
  })
  const [openedTabs, setOpenedTabs] = useState({})
  const [propertyName, setPropertyName] = useState<string>('')
  const prevLength = usePrevious(properties.length > 0 ? properties.length : 0)
  const { fetchSchemaItem, createSchema, updateSchemaItem } = useActions();
  const router = useHistory()
  const onUpdateProperty = (fieldName: string, fieldValue: any, propertyIndex?: number) => {
    if (propertyIndex === undefined) {
      setField(state => ({ ...state, [fieldName]: fieldValue }))
    }
    else {
      const newList = properties.map((property, index) => index === propertyIndex ? ({ ...property, [fieldName]: fieldValue }) : property)
      setProperty(state => newList)
    }
  }

  const delProperty = (index: number) => {
    setProperty(state => state.filter((el, elIndex) => index !== elIndex))
  }

  const saveSchema = () => {
    if (properties.length > 0 && propertyName) {
      createSchema(propertyName, properties)
      router.push(RouteNames.SCHEMAS)
    }
  }
  const update = () => {
    if (id) {
      updateSchemaItem(id, {
        name: propertyName,
        fields: properties
      })
    }
    router.push(RouteNames.SCHEMAS)
  }
  const handleOpenTab = (index: number) => {
    if (openedTabs[index as keyof typeof openedTabs] === index) {
      const updatedTabs = { ...openedTabs }
      delete updatedTabs[index as keyof typeof updatedTabs]
      setOpenedTabs(state => ({ ...updatedTabs }))
    }
    else {
      setOpenedTabs(state => ({ ...state, [index]: index }))
    }
  }
  useEffect(() => {
    if (prevLength!! < properties.length) {
      setField(state => ({
        key: '',
        label: '',
        type: 'Текстовое поле',
        options: [{ key: '', value: '' }],
        validation: {
          required: true,
          min: '',
          max: '',
          pattern: ''
        }
      }))
    }
  }, [properties])
  useEffect(() => {
    setField(state => ({
      ...state,
      options: [{ key: '', value: '' }],
      validation: {
        required: true,
        min: '',
        max: '',
        pattern: ''
      }
    }))
  }, [property.type])

  useEffect(() => {
    if (id) {
      fetchSchemaItem(id);
    }
    else {
      setProperty([])
      setField(state => ({
        ...state,
        label: '',
        type: 'Текстовое поле',
        options: [{ key: '', value: '' }],
        validation: {
          required: true,
          min: '',
          max: '',
          pattern: ''
        }
      }))
    }
  }, [id])

  useEffect(() => {
    if (id) {
      setProperty(schemaItem.fields)
      setPropertyName(schemaItem.name)
    }
  }, [schemaItem])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const propertyObj: IProperty = {
      key: property.key,
      type: property.type,
      label: property.label,
      validation: {
        required: property.validation.required,
        ...(property.type === 'Текстовое поле' || property.type === 'Пароль' ? {
          min: property.validation.min,
          max: property.validation.max,
          pattern: property.validation.pattern
        } : {}),
        ...(property.type === 'Числовое поле' ? {
          min: property.validation.min,
          max: property.validation.max
        } : {}),
      },
      ...(property.type === 'Выпадающий список' ? {
        options: property.options
      } : {})
    }
    setProperty([...properties, { ...propertyObj }])
  }

  return isLoading ? <Loader /> :( <div
    >
      <form onSubmit={handleSubmit} id='property-form'>
        <div>
          <div className='property'>
            <h2>Новая схема</h2>
            <div className='schema-name'>
              <TextField
                label='Название схемы'
                type='text'
                placeholder='Укажите название схемы'
                value={propertyName}
                required
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </div>
            <div className='divider'></div>
            <h2>Свойства схемы</h2>
            <div className='schema-description'>
              <span>Схема должна содержать хотя бы одно свойство</span>
            </div>
            <div className='propery-saved-properties'>
              {
                properties.length > 0 && properties.map((property, propIndex) => <div key={propIndex + 1}>
                  <PropertyForm
                    propertyNumber={propIndex}
                    property={property}
                    toggleId={`toggle${propIndex}`}
                    onUpdateProperty={onUpdateProperty}
                    openTabIndex={openedTabs[propIndex as keyof typeof openedTabs]}
                    handleOpenTab={handleOpenTab}
                    deleteProperty={delProperty}
                  />
                </div>)
              }
            </div>
            <div className='create-property-block'>
              <PropertyForm
                property={property}
                propertyOrderNumber={properties.length + 1}
                toggleId='property-toggle'
                onUpdateProperty={onUpdateProperty}
              />
            </div>
          </div>
        </div>
        <div className='property-action-butttons'>
          <Button
            type='submit'
            form='property-form'
            variant='inline'
            name='Добавить свойство'
          />
          <Button
            type='button'
            disabled={!(properties.length > 0 && propertyName)}
            onClick={() => { return id ? update() : saveSchema() }} name='Сохранить схему'
            variant='fill'
          />
        </div>
      </form>
      <div>
      </div>
    </div>
  );
};

export default AddModal
