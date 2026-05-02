'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaLock } from 'react-icons/fa';
import { IoAlertCircle, IoCheckmarkCircle, IoSend } from 'react-icons/io5';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

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

  return (
    <div className="min-h-screen bg-transparent font-sans text-white flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden selection:bg-[#0f0] selection:text-black">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-[#0f0]/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-[#0f0]/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#0f0_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.03]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10"
      >
        <div className="space-y-12 text-center lg:text-left">
          <div className="space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              Let&apos;s Build <br />
              <span className="text-white">Something</span> <br />
              <span className="text-[#0f0] cyber-glow-text">Great</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed border-l-0 lg:border-l-4 border-[#0f0]/40 lg:pl-8 transition-colors"
            >
              Have a project in mind? Reach out and let&apos;s discuss. I&apos;m
              currently available for freelance work and collaborations.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
          >
            <Link
              href="https://github.com/Skywalks567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 border border-green-500/30 rounded-full text-[#0f0]/80 bg-green-500/5 hover:bg-green-500/10 hover:text-[#0f0] hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-300 font-bold group backdrop-blur-md"
            >
              <FaGithub className="size-5 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/raymond-situmorang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 border border-green-500/30 rounded-full text-[#0f0]/80 bg-green-500/5 hover:bg-green-500/10 hover:text-[#0f0] hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-300 font-bold group backdrop-blur-md"
            >
              <FaLinkedin className="size-5 group-hover:scale-110 transition-transform" />
              <span className="tracking-wide">LinkedIn</span>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0f0]/20 to-transparent rounded-[2.5rem] blur opacity-30"></div>

          <div className="relative bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 border border-[#0f0]/10 rounded-[2.5rem] pointer-events-none"></div>

            <div className="p-8 md:p-12 relative z-10">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Contact Me
                </h2>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                  <FaLock className="text-[#0f0] size-3" />
                  <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">
                    Secure
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 flex flex-col items-center text-center space-y-8"
                  >
                    <div className="size-24 rounded-full bg-[#0f0]/5 flex items-center justify-center border border-[#0f0]/20 animate-pulse">
                      <IoCheckmarkCircle className="size-12 text-[#0f0]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white">
                        Message Sent
                      </h3>
                      <p className="text-white/40">
                        I will review your message shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[#0f0] text-sm font-bold hover:text-white transition-colors border-b border-[#0f0]/30 hover:border-white pb-1"
                    >
                      Send another message?
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <label className="absolute -top-6 left-0 text-[10px] font-bold text-[#0f0]/60 uppercase tracking-[0.2em] transition-colors group-focus-within:text-[#0f0]">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#0f0] transition-all duration-300 font-light text-lg placeholder:text-gray-600"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="relative group">
                        <label className="absolute -top-6 left-0 text-[10px] font-bold text-[#0f0]/60 uppercase tracking-[0.2em] transition-colors group-focus-within:text-[#0f0]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#0f0] transition-all duration-300 font-light text-lg placeholder:text-gray-600"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="absolute -top-6 left-0 text-[10px] font-bold text-[#0f0]/60 uppercase tracking-[0.2em] transition-colors group-focus-within:text-[#0f0]">
                        The Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-green-900/50 rounded-md px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 font-light text-lg resize-none placeholder:text-gray-600"
                        placeholder="Leave feedback about the site, career opportunities, or just say hi!"
                      />
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                      >
                        <IoAlertCircle className="size-5 shrink-0" />
                        <p>{errorMessage}</p>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-6 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-4 hover:bg-[#0f0] hover:text-black transition-all duration-500 disabled:opacity-50 disabled:cursor-wait group relative overflow-hidden"
                    >
                      {status === 'sending' ? (
                        <div className="flex items-center gap-3">
                          <span className="tracking-[0.2em]">SENDING...</span>
                          <div className="size-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      ) : (
                        <>
                          <span className="tracking-[0.2em]">SEND MESSAGE</span>
                          <IoSend className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-[10px] text-white/10 uppercase tracking-[0.5em] hidden md:block"
      >
        Waiting for your transmission...
      </motion.div>
    </div>
  );
}
