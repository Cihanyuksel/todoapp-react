import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import logo from "./todo-logo.png";
export default function Login2() {
  const [input, setInput] = useState("");
  const { setUser } = useAuth();

  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

      if(input.length >= 4) {
        setUser(input.replace(/\s/g, ''));
      }

  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
          <h2
            className={`${
              theme ? "text-neutral-100" : "text-neutral-700"
            } mt-6 text-center text-3xl font-extrabold `}
          >
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-400">
            To continue, log in to Todo.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="text-address" className="sr-only">
                Username
              </label>
              <input
                id="text-address"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setInput(e.target.value)}
                maxLength={12}
              />
              {input.indexOf(" ") !== -1 ? <small className="text-red-500 text-xs">Space cannot be used!</small> : ''}
              {input.length < 4 ? <small className="text-red-500 text-xs">Must be at least 4 characters!</small> : ''}
            </div>
          
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-neutral-500"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#!"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white 
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500 ${input.indexOf(" ") !== -1 ? 'bg-neutral-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                disabled={input.indexOf(" ") !== -1}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <button
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
