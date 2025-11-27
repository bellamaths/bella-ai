'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // 注册成功后跳去 login
      router.push('/login');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow max-w-sm w-full">
        <h1 className="text-xl font-bold mb-4 text-center">Create BellaMaths Account</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Sign up
        </button>

        <p className="text-center text-sm text-slate-600 mt-4">
          Already have an account? <a className="text-indigo-600" href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
