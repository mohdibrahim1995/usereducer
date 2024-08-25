import React, { useReducer } from 'react';

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true, error: '' };
    case 'LOGIN_FAILURE':
      return { ...state, error: 'Invalid username or password', isLoggedIn: false };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = (e) => {
    e.preventDefault();

    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';

    if (state.username === hardcodedUsername && state.password === hardcodedPassword) {
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {state.isLoggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome, {state.username}!</h1>
          <p>You have successfully logged in.</p>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log out
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {state.error && <p className="text-red-500 mb-4">{state.error}</p>}
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
              value={state.username}
              onChange={(e) =>
                dispatch({ type: 'SET_USERNAME', payload: e.target.value })
              }
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
              value={state.password}
              onChange={(e) =>
                dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
              }
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

export default UseReducer;
