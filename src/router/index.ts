import React from "react";
import Login from "../pages/Login";
import AddForm from '../pages/addform/AddForm';
import SchemasList from "../pages/schemaslist/ScemasList";
import SchemaItem from "../pages/schemaitem/ScemasList";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  ADDMODAL = '/addm',
  SCHEMAS = '/',
  SCHEMAITEM='/schemas',
  SCHEMAUPDT='/schemaupd'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
]

export const privateRoutes: IRoute[] = [
  { path: RouteNames.ADDMODAL, component: AddForm },
  { path: RouteNames.SCHEMAS, exact: true, component: SchemasList },
  { path: `${RouteNames.SCHEMAITEM}/:id`, component: SchemaItem },
  { path: `${RouteNames.SCHEMAUPDT}/:id`, component: AddForm },
]
