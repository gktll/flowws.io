'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const { username } = await response.json(); // Ensure this matches the structure of your response
            if (username) {
              router.push(`/dashboard/${username}`); // Correctly use the username for redirection
            } else {
              console.error('Username is undefined.');
            }
          } else {
            console.error('Login failed.');
          }
        };

        
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-6 text-2xl font-semibold">Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Login
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            <button
                className="mt-4 text-blue-500 underline hover:text-blue-800"
                onClick={() => router.push('/signup')}
            >
                Signup
            </button>
        </div>
    );
}
