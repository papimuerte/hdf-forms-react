const Layout: React.FC = ({ children }) => {
  return (
    <div className='container h-screen px-4 mx-auto sm:px-6 lg:px-8'>
      {children}
    </div>
  );
};

export default Layout;
