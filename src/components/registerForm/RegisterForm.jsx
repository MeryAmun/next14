"use client"
import React,{useEffect} from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from "next/navigation";
import styles from './registerForm.module.css'
import Link from 'next/link'
import { registerUser } from '@/lib/actions';

const RegisterForm = () => {
   const [state, formAction] = useFormState(registerUser, undefined);
    const router = useRouter();
    useEffect(() => {
      state?.success && router.push('/login')
    }, [state?.success,router])
    
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="file" placeholder="username" name="img" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
      </form>
  )
}

export default RegisterForm