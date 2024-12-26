import React, { useState } from 'react';
import SignIn from './pages/SignIn';
import Repository from './pages/Repository';

function App() {
  // For demo purposes, you can toggle between SignIn and Repository
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated ? <Repository /> : <SignIn onSignIn={handleSignIn} />}
    </div>
  );
}

export default App;