import { useState } from 'react';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const resetStatus = () => setStatus('idle');

  return {
    formData,
    status,
    errorMessage,
    handleSubmit,
    handleChange,
    resetStatus,
  };
}
