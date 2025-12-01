import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Terminal, Wifi } from 'lucide-react';
import { MESSAGES } from '../utils';

interface CommsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommsModal: React.FC<CommsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40"
          />
          
          {/* Sliding Side Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-[90vw] md:w-[400px] z-50 bg-[#0a0c10] border-l border-green-500/30 shadow-[-10px_0_40px_rgba(34,197,94,0.1)] flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-green-500/20 bg-green-900/5">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-green-500/50 hover:text-green-400 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-1">
                <Terminal className="text-green-500" size={20} />
                <h3 className="font-mono text-green-500 font-bold uppercase tracking-widest text-sm">
                  Comms Log
                </h3>
              </div>
              <p className="text-[10px] text-green-500/60 font-mono uppercase tracking-[0.2em]">
                Encrypted Transmissions Received
              </p>
              
              {/* Scanline decoration */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/30" />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-green-400 box-shadow-[0_0_10px_#4ade80]"
                animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar space-y-4">
              {MESSAGES.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-50 space-y-3">
                  <Wifi className="text-green-500 animate-pulse" size={32} />
                  <p className="font-mono text-xs text-green-400 uppercase tracking-widest text-center">
                    No signals detected.<br/>Scanner active...
                  </p>
                </div>
              ) : (
                MESSAGES.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white/5 border border-white/5 rounded-sm p-4 hover:bg-white/10 hover:border-green-500/30 transition-all"
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500/0 group-hover:border-green-500/50 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500/0 group-hover:border-green-500/50 transition-colors" />

                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-wider">
                        [{msg.sender}]
                      </span>
                      <span className="font-mono text-[10px] text-gray-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {msg.text}
                    </p>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 rounded-full border border-green-500/10">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-green-500/80 font-mono uppercase tracking-widest">
                  Secure Connection Established
                </span>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommsModal;