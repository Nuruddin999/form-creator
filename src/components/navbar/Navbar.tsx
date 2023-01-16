import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteNames } from "../../router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./navbarstyle.scss";
import { useActions } from "../../hooks/useActions";
import Flogo from '../../flogo.jpg'
const Navbar: FC = () => {
  const router = useHistory()
  const { isAuth } = useTypedSelector(state => state.auth);
  const { logout } = useActions()


  return (
    <div>
      <div>
        {isAuth
          &&
          <div className='navbar-wrapper'>
            <div className='navbar-menu'>
              <img src={Flogo} />
              <div
                onClick={() => {
                  router.push(RouteNames.SCHEMAS)
                }}
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
        }
      </div>
    </div>
  );
};

export default Navbar;
