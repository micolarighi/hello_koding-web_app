import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, HeroSection } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto lg:px-10 px-3 mb-8">
      <HeroSection/>
      <Categories/>
      <div className="grid lg:grid-cols-12 gap-12 mb-10">
        <div className="lg:col-span-8 col-span-12">
          <div className='grid grid-cols-12'>
              {posts.map((post, index) => (
                index < 6 &&
                <PostCard key={index} post={post.node} />
                ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    <FeaturedPosts />
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

