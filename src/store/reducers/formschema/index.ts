import { SchemaAction, SchemaActionEnum, SchemaState } from "./types";


const initialState: SchemaState = {
  schemas: [],
  schemaItem: {
    id: '',
    name: '',
    fields: []
  },
  error: '',
  isLoading: false,
}

export default function SchemaReducer(state = initialState, action: SchemaAction): SchemaState {
  switch (action.type) {
    case SchemaActionEnum.SET_SCHEMA:
      return { ...state, schemas: action.payload }
    case SchemaActionEnum.SET_SCHEMA_ITEM:
      return { ...state, schemaItem: action.payload }
    case SchemaActionEnum.SET_ERROR:
      return { ...state, error: action.payload }
    case SchemaActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state;
  }
}
