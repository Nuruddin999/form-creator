import { FC, useEffect, useRef, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import "./loginformstyle.scss";
import TextField from '../textfield/TextField';
import Button from '../button/button';
import ErrorInfo from '../error-info/ErrorInfo';
import Loader from '../loader/loader';
import Flogo from '../../flogo.jpg'

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authStatus, setAuthStatus] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const { login, signup, setError } = useActions()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (authStatus === 'login') {
      login(username, password)
    }
    if (authStatus === 'signup') {
      signup(username, password)
    }
    setAuthStatus('')
    setUsername('')
    setPassword('')
  }
  useEffect(() => {
    if (authStatus === 'login' || authStatus === 'signup') {
      if (formRef.current) {
        formRef.current.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        )
      }
    }
  }, [authStatus, username])

  useEffect(() => {
 if(error){
    setTimeout(()=>{
      setError('')
      error === 'неверный пароль' && setPassword('')
      error === 'Пользователь не найден' && setUsername('')
  },1000)
 }
  }, [error])

  return (<div className='loader-wrapper'>

    {isLoading ? <div><Loader /></div> :
      <div className='login-form-wrapper'>
        <div className='login-form-wrapper-logo'>
        <img src={Flogo} width={150}/>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className='login-form-wrapper--inp'>
            <TextField
              label='Email'
              value={username}
              type='email'
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='login-form-wrapper--inp'>
            <TextField
              label='Пароль'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
            />
          </div>
          <div className='login-form-wrapper--btn'>
            <Button
              type="button"
              onClick={() => setAuthStatus('login')}
              variant='fill'
              name='Войти' />
          </div>
          <div className='login-form-wrapper--btn'>
            <Button
              type='button'
              onClick={() => setAuthStatus('signup')}
              variant='fill'
              name='Зарегистрироваться' />
          </div>
        </form>
        {error && <ErrorInfo title={error}/>}
      </div>}
  </div>
  );
};

export default LoginForm;
