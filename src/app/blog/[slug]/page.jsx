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

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.desc
  }
}
const SinglePost = async ({ params }) => {
  const { slug } = params;
  //GET POST WITH AN API
  //const post = await getData(slug);
  //GET POST WITHOUT AN API
  const post = await getPost(slug)
  
  return (

    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post?.img} fill alt='test' />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.details}>

          {
            post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post?.userId} />
              </Suspense>
            )
          }
          <div className={styles.detailsText}>
            <span className={styles.detailsTitle}>Published</span>
            {
              post?.createdAt && <span className={styles.detailsValue}>{post?.createdAt.toString().slice(4, 16)}</span>
            }
          </div>
        </div>
        <div className={styles.content}>
          {post?.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePost