import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const GET = async (request) => {
    console.log(request)
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts)
    } catch (error) {
       console.log(error) 
       throw new Error("Failed to fetch posts")
    }
}
export const addNewPost = async (request,response) => {
    const { title, desc, slug, userId } = request.body
    
    try {
        connectToDb();
        const newPost = new Post({
            title,desc,slug,userId
        })
        await newPost.save()
        revalidatePath('/blog')
        return response.status(200)
    } catch (error) {
       console.log(error) 
       throw new Error("Failed to fetch posts")
    }
}