

import { ISchema } from "../store/reducers/formschema/types";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  where,
  query,
} from "firebase/firestore";

const schemasCollectionRef = collection(db, "schemas")
export const createFormApi = async (schema: ISchema, id:string) => {
  const response = await addDoc(schemasCollectionRef,{...schema, uid:id})

  return response
}
export const getFormsApi = async (id:string) : Promise<any> => {
  const q = query(collection(db, "schemas"), where("uid", "==", id));
  const data = await getDocs(q)
  const schemas =  data.docs.map((doc) => ({ ...doc.data(), id:doc.id }))
  console.log(schemas)
  return schemas

}
export const getFormItemApi = async (id: string) : Promise<any> => {
  const docRef = doc(db, "schemas", id);

  const data = await getDoc(docRef)
  return ({...data.data(), id})
}
export const removeFormItemApi = async (id: string) => {
  const userDoc = doc(db, "schemas", id);
  const response = await deleteDoc(userDoc);
  return response
}

export const updateFormItemApi = async (id: string, schema: ISchema) => {
  const docRef = doc(db, "schemas", id);
 const response =  await updateDoc(docRef, schema);
  return response
}