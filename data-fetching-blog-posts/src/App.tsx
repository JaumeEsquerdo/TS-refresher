import { get } from './util/http'
import './App.css'
import { useEffect, useState } from 'react'
import BlogPosts, { type BlogPost } from './components/BlogPosts'
import fetchingImg from '../src/assets/vite.svg'
import { type ReactNode } from 'react'


type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[]

      const blogPosts: BlogPost[] = data.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        }
      });
      setFetchedPosts(blogPosts)
    }

    fetchPosts()
  }, [fetchedPosts])

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  return (
    <main>
      <h1>Data fetching!</h1>
      <img src={fetchingImg} alt="An aimage from vite " />
      {content}
    </main>
  )
}

export default App
