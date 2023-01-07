

import { ISchema } from "../store/reducers/formschema/types";
import { formApi } from "./index";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

const schemasCollectionRef = collection(db, "schemas");

export const createFormApi = async (schema: ISchema) => {

  const response = await addDoc(schemasCollectionRef,schema)

  return response
}
export const getFormsApi = async () : Promise<any> => {
  const data = await getDocs(schemasCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
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