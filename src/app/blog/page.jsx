import React from 'react'
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from '@/lib/data';

//FETCHING DATA WITH AN API
//Since we are using Next 14, we don't need an API
//https://jsonplaceholder.typicode.com/posts
//by default, its {cache:"force-cache"}
//for a project that the database is constantly receiving data, use {cache:"no-store"}
//we can also use revalidate, to refresh data after a certain duration of time
const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog",{
   method:"GET",
  next:{revalidate:3600}
  })
  if(!response.ok){
    throw new Error("Something went wrong")
  }
 return response.json()
}

const Blog = async () => {
  //FETCHING POSTS WITH AN API
  const posts = await getData()

  //FETCHING POSTS WITHOUT AN API
//  const posts = await getPosts()
//  console.log(posts)
  
  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default Blog