import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Placeholder = () => {
  const { page } = useParams();
  
  const pageTitle = page ? page.charAt(0).toUpperCase() + page.slice(1) : 'Page';
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner 
        title={pageTitle}
        subtitle="Coming Soon"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto mb-6 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {pageTitle} Page
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This page is currently under development. We're working hard to bring you something amazing!
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What's Coming Soon?
            </h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Innovative features and functionality
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                User-friendly interface design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-orange-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Comprehensive content and resources
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-orange-primary text-white rounded-lg hover:bg-orange-secondary transition-colors duration-200 font-medium">
              Notify Me When Ready
            </button>
            <button className="px-6 py-3 border border-orange-primary text-orange-primary rounded-lg hover:bg-orange-50 transition-colors duration-200 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;