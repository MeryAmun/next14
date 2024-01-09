import React from 'react'
import LoginForm from "@/components/loginForm/loginForm";
//import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { signIn } from '@/lib/auth';

const Login = () => {
  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <button onClick={handleGithubLogin} className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login