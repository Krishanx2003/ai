import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

const Blog = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getPosts(); // Fetch the posts data using your service function
  return {
    props: { posts }, // Pass the fetched posts as props
  };
}

export default Blog;
