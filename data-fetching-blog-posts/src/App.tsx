import { get } from './util/http'
import './App.css'
import { useEffect, useState } from 'react'
import BlogPosts, { type BlogPost } from './components/BlogPosts'
import fetchingImg from '../src/assets/vite.svg'
import { type ReactNode } from 'react'
import ErrorMessage from './components/ErrorMessage'


type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true)
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts')) as RawDataBlogPost[]
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        });
        setFetchedPosts(blogPosts)

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
        // setError('Failed to tech posts!')
      }
      setIsFetching(false)

    }

    fetchPosts()
  }, [])

  let content: ReactNode;

  if (isFetching) {
    content = <p id='loading-fallback'>Fetching posts...</p>
  } else if (error) {
    content = <ErrorMessage text={error} />
  } else if (fetchedPosts) {
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
