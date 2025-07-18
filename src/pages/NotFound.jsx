import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-orange-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/ideas"
              className="inline-block px-6 py-3 bg-orange-primary text-white rounded-lg hover:bg-orange-secondary transition-colors duration-200 font-medium"
            >
              Go to Ideas
            </Link>
            <div>
              <button
                onClick={() => window.history.back()}
                className="text-orange-primary hover:text-orange-secondary transition-colors duration-200 font-medium"
              >
                ← Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;