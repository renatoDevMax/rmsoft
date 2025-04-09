import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
}

export default function Toast({ message, type, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`toast ${type}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 