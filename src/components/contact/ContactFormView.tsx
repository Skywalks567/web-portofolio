import { useContactForm } from '@/hooks/use-contact-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { IoAlertCircle, IoCheckmarkCircle, IoSend } from 'react-icons/io5';

export function ContactFormView() {
  const {
    formData,
    status,
    errorMessage,
    handleSubmit,
    handleChange,
    resetStatus,
  } = useContactForm();

  return (
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
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-20 flex flex-col items-center text-center space-y-8"
          >
            <div className="size-24 rounded-full bg-[#0f0]/5 flex items-center justify-center border border-[#0f0]/20 animate-pulse">
              <IoCheckmarkCircle className="size-12 text-[#0f0]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">Message Sent</h3>
              <p className="text-white/40">
                I will review your message shortly.
              </p>
            </div>
            <button
              onClick={resetStatus}
              className="text-[#0f0] text-sm font-bold hover:text-white transition-colors border-b border-[#0f0]/30 hover:border-white pb-1"
            >
              Send another message?
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
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
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
