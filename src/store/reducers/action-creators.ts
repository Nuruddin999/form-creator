import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreators} from "./event/action-creators";
import {FormSchemaActionCreators} from "./formschema/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators,
    ...FormSchemaActionCreators
}
