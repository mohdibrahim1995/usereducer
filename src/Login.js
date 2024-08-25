import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded user credentials
    const hardcodedUsername = 'ibrahim';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isLoggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome, {username}!</h1>
          <p>You have successfully logged in.</p>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              autoComplete='username'
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
