import { useState } from 'react';
import { QuantumLoginForm } from '@/ui/components/auth/QuantumLoginForm';
import type { LoginFormData } from '@/ui/components/types/auth.types';

export default function QuantumLoginDemo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setError(undefined);
    await new Promise((r) => setTimeout(r, 600));
    // Fake failure example: reject a specific email
    if (data.email === 'fail@example.com') {
      setError('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <QuantumLoginForm
      onSubmit={handleSubmit}
      onForgotPassword={() => alert('Forgot Password')}
      onSignUp={() => alert('Sign Up')}
      loading={loading}
      error={error}
    />
  );
}
