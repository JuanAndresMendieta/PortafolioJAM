"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[999]">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >

        <h1 className="text-3xl font-bold mb-4">
          Juan Andres Mendieta
        </h1>

        <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden">

          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />

        </div>

      </motion.div>

    </div>
  )
}