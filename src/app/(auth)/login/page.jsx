import React from 'react'
import LoginForm from "@/components/loginForm/loginForm";
//import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login