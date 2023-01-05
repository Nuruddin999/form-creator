import React, { FC } from 'react';
import { Layout, Menu, Row } from "antd";
import { useHistory } from 'react-router-dom';
import { RouteNames } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import "./navbarstyle.scss";
import { useActions } from "../hooks/useActions";

const Navbar: FC = () => {
  const router = useHistory()
  const { isAuth, user } = useTypedSelector(state => state.auth);
  const { logout } = useActions()


  return (
    <div>
      <div>
        {isAuth
          ?
          <div className='navbar-wrapper'>
            <div className='navbar-menu'>
              <div
                onClick={() => {
                  router.push(RouteNames.SCHEMAS)}}
                key={1}
              >
                Мои схемы
              </div>
              <div
                onClick={() => router.push(RouteNames.ADDMODAL)}
                key={1}
              >
                Создать схему
              </div>
            </div>
            <div
              onClick={logout}
              key={1}
              className='logout-btn'
            >
              Выйти
            </div>
          </div>
          :
          <div>
            <div
              onClick={() => router.push(RouteNames.LOGIN)}
              key={1}
            >
              Логин
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;