import React, { FC, useEffect, useRef, useState } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authStatus, setAuthStatus] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const { login, signup } = useActions()

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
  }, [authStatus,username])

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
    >
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={"password"}
        />
        <button type="button"  onClick={() => setAuthStatus('login')}>
          Войти
        </button>
        <button type='button' onClick={() => setAuthStatus('signup')}>
          Регистрация
        </button>
    </form>
  );
};

export default LoginForm;
