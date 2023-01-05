import { SchemaAction, SchemaActionEnum, SchemaState } from "./types";


const initialState: SchemaState = {
  schemas: [],
  schemaItem: {
    id: 0,
    schema: {
      name: '',
      fields: []
    }
  }
}

export default function SchemaReducer(state = initialState, action: SchemaAction): SchemaState {
  switch (action.type) {
    case SchemaActionEnum.SET_SCHEMA:
      return { ...state, schemas: action.payload }
    case SchemaActionEnum.SET_SCHEMA_ITEM:
      return { ...state, schemaItem: action.payload }
    default:
      return state;
  }
}
