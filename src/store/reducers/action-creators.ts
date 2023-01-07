import {AuthActionCreators} from "./auth/action-creators";
import {FormSchemaActionCreators} from "./formschema/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...FormSchemaActionCreators
}
