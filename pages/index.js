import Head from 'next/head'
import { Catecories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'
const posts = [
  {
    title: 'MERN stack Prsacticum',
    excerpt: ' MongoDb, ExpressJS, ReactJS, NodeJs',
  },
  { title: 'Digital Marketing', excerpt: ' ADS, Instagram, Telegram' },
]

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Create Next App </title>
        <meta name='description' content='Generated by created next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8 '>
            <PostWidget />
            <Catecories />
          </div>
        </div>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}