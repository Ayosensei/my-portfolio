"use client";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Abstract Blob 1: Purple */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[100px]"
            />

            {/* Abstract Blob 2: Blue/Cyan */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [-50, 50, -50],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px]"
            />
        </div>
    );
}