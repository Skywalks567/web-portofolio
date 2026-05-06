import { useContactForm } from '@/hooks/use-contact-form';
import { AnimatePresence, motion } from 'framer-motion';
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
    <div className="p-8 md:p-12 relative z-10 font-mono">
      <div className="w-full border-b border-[#0f0]/30 pb-4 mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#0f0] font-bold">root@portofolio:~$</span>
          <span className="text-white">sendmail</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
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
            <div className="size-20 rounded-sm bg-[#0f0]/5 flex items-center justify-center border border-[#0f0]/20 animate-pulse">
              <IoCheckmarkCircle className="size-10 text-[#0f0]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                [MESSAGE_SENT]
              </h3>
              <p className="text-[#0f0]/40 text-sm uppercase tracking-widest">
                Transmission successful
              </p>
            </div>
            <button
              onClick={resetStatus}
              className="text-[#0f0] text-xs font-bold hover:text-white transition-colors border-b border-[#0f0]/30 hover:border-white pb-1 tracking-[0.2em]"
            >
              NEW_MESSAGE?
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
                  Sender_Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#0f0] transition-all duration-300 text-base placeholder:text-gray-700"
                  placeholder="Anonymous"
                />
              </div>
              <div className="relative group">
                <label className="absolute -top-6 left-0 text-[10px] font-bold text-[#0f0]/60 uppercase tracking-[0.2em] transition-colors group-focus-within:text-[#0f0]">
                  Sender_Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#0f0] transition-all duration-300 text-base placeholder:text-gray-700"
                  placeholder="user@network.local"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="absolute -top-6 left-0 text-[10px] font-bold text-[#0f0]/60 uppercase tracking-[0.2em] transition-colors group-focus-within:text-[#0f0]">
                Message_Payload
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#0f0]/5 border border-green-900/50 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#0f0]/50 transition-all duration-300 text-base resize-none placeholder:text-gray-700"
                placeholder="Type your message here..."
              />
            </div>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-400 text-xs bg-red-950/20 p-4 rounded-sm border border-red-900/50"
              >
                <IoAlertCircle className="size-4 shrink-0" />
                <p className="uppercase tracking-widest">
                  ERROR: {errorMessage}
                </p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-5 border-2 border-[#0f0] text-[#0f0] font-black rounded-sm flex items-center justify-center gap-4 hover:bg-[#0f0] hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-wait group relative overflow-hidden shadow-[0_0_15px_rgba(0,255,0,0.1)]"
            >
              {status === 'sending' ? (
                <div className="flex items-center gap-3">
                  <span className="tracking-[0.3em] uppercase">
                    [ENCRYPTING...]
                  </span>
                </div>
              ) : (
                <>
                  <span className="tracking-[0.3em] uppercase">
                    SEND_MESSAGE
                  </span>
                  <IoSend className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
