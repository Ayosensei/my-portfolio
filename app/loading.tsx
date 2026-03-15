"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-2 border-gray-500 border-t-white rounded-full"
      />
      <p className="mt-4 text-gray-400">Loading...</p>
    </div>
  );
}
