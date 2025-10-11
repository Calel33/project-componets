import { useState } from 'react';
import { NebulaLoginForm } from '@/ui/components/auth/NebulaLoginForm';
import type { LoginFormData } from '@/ui/components/types/auth.types';

export default function NebulaLoginDemo() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async (data: LoginFormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    alert(`Logged in as ${data.email}`);
  };
  return (
    <NebulaLoginForm
      loading={loading}
      onLogin={handleLogin}
      onGoogleLogin={() => alert('Google OAuth')}
      onGitHubLogin={() => alert('GitHub OAuth')}
      onForgotPassword={() => alert('Forgot Password')}
      onSignUp={() => alert('Sign Up')}
    />
  );
}
