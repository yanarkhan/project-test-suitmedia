const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div
        className={`${sizeClasses[size]} border-4 border-orange-200 border-t-orange-primary rounded-full animate-spin`}
      />
    </div>
  );
};

export default LoadingSpinner;