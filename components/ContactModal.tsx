'use client';

import { FormEvent, useState } from 'react';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  message: '',
};

export default function ContactModal() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { success: boolean; message?: string; error?: string };

      if (!response.ok || !result.success) {
        setStatus('error');
        setFeedback(result.error ?? 'Unable to submit your message. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback(result.message ?? 'Thanks! Your message has been sent.');
      setForm(INITIAL_FORM_STATE);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
      setFeedback('Unable to submit your message. Please try again.');
    }
  };

  const isSubmitting = status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          required
          disabled={isSubmitting}
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          required
          disabled={isSubmitting}
          className="w-full rounded border p-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          required
          disabled={isSubmitting}
          className="w-full rounded border p-2"
          rows={5}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>

      {status === 'success' && <p className="text-sm text-green-600">{feedback}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{feedback}</p>}
    </form>
  );
}
