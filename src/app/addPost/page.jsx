"use client"
import { addPost,deletePost } from '@/lib/actions'
import styles from './addPost.module.css'
const AddPost = () => {
  const createPost = async () => {
    const response = await fetch("http://localhost:3000/api/addPost",{
      method:"POST",
    next:{revalidate:3600}})
    if(!response.ok){
      throw new Error("Something went wrong")
    }
   return response.json()
  }
  return (
    <div className={styles.container}>
    <form action={addPost} className={styles.form}>
      <input type="text" placeholder="title" name="title"/>
      <textarea placeholder="desc" name="desc" cols="30" rows="10"></textarea>
      <input type="text" placeholder="slug" name="slug"/>
      <input type="text" placeholder="userId" name="userId"/>
      <input type="file" placeholder="userId" name="img"/>
      <button>Create</button>
    </form>

    {/* <form action={deletePost} className={styles.form}>
      <input type="text" placeholder="postId" name="id" />
      <button>Delete</button>
    </form> */}
  </div>
  )
}

export default AddPost