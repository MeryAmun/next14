import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

//FETCHING DATA WITH AN API
//Since we are using Next 14, we don't need an API
//https://jsonplaceholder.typicode.com/posts
//by default, its {cache:"force-cache"}
//for a project that the database is constantly receiving data, use {cache:"no-store"}
//we can also use revalidate, to refresh data after a certain duration of time
// const getData = async (slug) => {
// const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

// if(!response.ok){
//    throw new Error("Something went wrong");
 
//   }
//  return response.json()
// }
const SinglePost = async ({params}) => {
  console.log(params)
  const { slug } = params;
  //GET POST WITH AN API
 //const post = await getData(slug);
 //GET POST WITHOUT AN API
 const post =await getPost(slug)
  return (

    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/about.png' fill alt='test' />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.details}>
          <Image className={styles.avatar} src='/about.png' width={50} height={50} alt='test' />
         {
          post && (
            <Suspense fallback={<div>Loading...</div>}>
         <PostUser userId={post?.userId}/>
         </Suspense>
          )
         }
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Published</span>
            <span className={styles.detailsValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
         {post?.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePost