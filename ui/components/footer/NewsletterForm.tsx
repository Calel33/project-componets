import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { NewsletterFormProps, FormState } from './types';

export const NewsletterForm = ({ onSubscribe, className = '' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState<string>>({
    status: 'idle',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setFormState({ status: 'error', error: 'Email is required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({ status: 'error', error: 'Please enter a valid email' });
      return;
    }

    setFormState({ status: 'loading' });

    try {
      await onSubscribe(email);
      setFormState({ status: 'success' });
      setEmail('');
      setTimeout(() => setFormState({ status: 'idle' }), 3000);
    } catch (error) {
      setFormState({
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to subscribe',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (formState.status === 'error') {
      setFormState({ status: 'idle' });
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Mail className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="email"
            name="subscribeEmail"
            required
            value={email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={formState.status === 'loading'}
            className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition text-xs text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-9 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={formState.status === 'loading'}
          className="inline-flex gap-2 ring-1 ring-white/80 hover:bg-amber-300 hover:ring-amber-200 transition text-xs font-medium text-neutral-900 bg-white rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.status === 'loading' ? 'Joining...' : 'Join'}
        </button>
      </form>
      
      {formState.status === 'success' && (
        <p className="mt-2 text-xs text-emerald-300">Successfully subscribed!</p>
      )}
      {formState.status === 'error' && formState.error && (
        <p className="mt-2 text-xs text-red-300">{formState.error}</p>
      )}
    </div>
  );
};
