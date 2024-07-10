"use client";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function getToken() {
      const token = await getCsrfToken();
      if (token) setCsrfToken(token);
    }
    getToken();
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/admin");
    }
  }, [status, router]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("error")) {
      setError("Invalid email or password. Please try again.");
    }
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col items-center space-y-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        method="post"
        action="/api/auth/callback/credentials"
        className="flex flex-col items-center justify-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full md:w-3/4 space-y-4 mb-4">
          <input name="csrfToken" type="hidden" value={csrfToken ?? ""} />
          <p>Email</p>
          <label>
            <input name="email" type="email" required className="px-1" />
          </label>
          <p>Password</p>
          <label>
            <input name="password" type="password" required className="px-1" />
          </label>
        </div>
        <button type="submit" className="btn">
          Se connecter
        </button>
      </form>
    </div>
  );
}
