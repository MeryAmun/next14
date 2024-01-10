"use client"
import React from 'react'
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { loginUser } from '@/lib/actions'
const login = null
const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, undefined);
  return (
    <form className={styles.form} action={loginUser}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button formA>Login</button>
      {/* {state?.error} */}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm