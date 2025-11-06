"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import "./Modal.css";
import type { ModalProps } from "@/types/Modal.Types";

interface Origin {
  x: number;
  y: number;
}

interface ModalWithOriginProps extends ModalProps {
  origin?: Origin | null;
}

const Modal: React.FC<ModalWithOriginProps> = ({ isOpen, onClose, origin, children }) => {
  const [mounted, setMounted] = React.useState(false);

  // ✅ Asegura que el modal solo se renderice cuando haya DOM disponible
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, mounted]);

  // Si aún no hay DOM disponible, no renderizar nada
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && origin && (
        <>
          {/* Fondo */}
          <motion.div
            className="modal-overlay"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            initial={{
              opacity: 0,
              maskImage: "linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal principal */}
          <motion.div
            className="modal-container"
            initial={{
              opacity: 0,
              scale: 0.2,
              top: origin.y,
              left: origin.x,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              transition: {
                type: "spring",
                stiffness: 40,
                damping: 18,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              top: origin.y,
              left: origin.x,
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              transformOrigin: "center",
              zIndex: 50,
            }}
          >
            <button className="close-btn button" onClick={onClose}>
              <span>✖</span>
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
