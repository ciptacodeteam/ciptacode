"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ToastProps {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  description?: string;
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({
  id,
  type,
  title,
  description,
  duration = 5000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  };

  const colors = {
    success: "border-green-500/20 bg-green-500/10 text-green-600",
    error: "border-red-500/20 bg-red-500/10 text-red-600",
    info: "border-blue-500/20 bg-blue-500/10 text-blue-600",
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={cn(
        "glass relative flex w-full max-w-sm items-center space-x-4 rounded-lg border p-4 shadow-lg backdrop-blur-sm",
        colors[type],
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        {description && <p className="text-xs opacity-90">{description}</p>}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-full"
        onClick={() => onClose(id)}
      >
        <X className="h-3 w-3" />
      </Button>
    </motion.div>
  );
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // This would typically be managed by a toast context/provider
  // For demo purposes, we'll just render the container

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
