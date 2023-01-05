import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button/button';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../router';
import './styles.scss'

const SchemasList: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchSchemas, removeSchemaItem } = useActions();
  const { schemas } = useTypedSelector(state => state.schema);
  const router = useHistory()
  useEffect(() => {
    fetchSchemas()
  }, [])
  const removeItem = (id: number) => {
    removeSchemaItem(id)
  }
  const editItem = (id: number) => {
    router.push(`${RouteNames.SCHEMAUPDT}/${id}`)
  }
  return (
    <div>
      <h2>Мои схемы</h2>
      <div className='schema-list-wrapper'>
        {schemas.length > 0 && schemas.map(({ id, schema }) =>
          <div key={id} className='schema-list-item'>
            <span>{schema.name}</span>
            <div className='schemalist-buttons'>
              <span onClick={() => router.push(`${RouteNames.SCHEMAITEM}/${id}`)}>Просмотреть</span>
              <span onClick={(e) => editItem(id)}>Изменить</span>
              <span onClick={(e) => removeItem(id)}>Удалить</span>
            </div>
          </div>)}
      </div>
      <div className='schema-list-create-schema-button'>
        <Button
          name='Создать схему'
          variant='fill'
          onClick={()=>router.push(`${RouteNames.ADDMODAL}`)}
        />
      </div>
    </div>
  );
};

export default SchemasList;
