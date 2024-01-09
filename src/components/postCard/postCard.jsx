import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const deletePost = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/blog/${slug}`,{
    method:"DELETE"
  });
  
  if(!response.ok){
     throw new Error("Something went wrong");
  
    }
   return response.json()
  }

const PostCard = ({params,post}) => {
  //const deleteMessage = deletePost(post.slug)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post?.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard