import Header from '../components/Header';
import Banner from '../components/Banner';
import PostList from '../components/PostList';

const Ideas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner 
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />
      <PostList />
    </div>
  );
};

export default Ideas;