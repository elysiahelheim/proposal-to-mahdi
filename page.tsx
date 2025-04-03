"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [showProposal, setShowProposal] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showConfetti, setShowConfetti] = useState(false)

  const handleHiClick = () => {
    setShowProposal(true)
  }

  const handleYesClick = () => {
    setShowConfetti(true)
  }

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150
    const y = Math.random() * 300 - 150
    setNoButtonPosition({ x, y })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 p-4">
      <div className="w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!showProposal ? (
            <motion.div
              key="homepage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-8 p-8 bg-white rounded-xl shadow-lg border-4 border-pink-300"
            >
              <motion.div
                className="relative w-64 h-64 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                {/* Hello Kitty-like character */}
                <div className="relative mx-auto w-56 h-56 animate-float">
                  {/* Head */}
                  <div className="absolute w-48 h-48 bg-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-black shadow-lg">
                    {/* Eyes */}
                    <div className="absolute w-5 h-8 bg-black rounded-full left-1/4 top-1/3"></div>
                    <div className="absolute w-5 h-8 bg-black rounded-full right-1/4 top-1/3"></div>

                    {/* Nose */}
                    <div className="absolute w-6 h-4 bg-yellow-400 rounded-full left-1/2 top-[45%] transform -translate-x-1/2"></div>

                    {/* Whiskers */}
                    <div className="absolute w-10 h-0.5 bg-black left-[15%] top-[50%] transform -rotate-12"></div>
                    <div className="absolute w-10 h-0.5 bg-black left-[15%] top-[55%] transform rotate-12"></div>
                    <div className="absolute w-10 h-0.5 bg-black right-[15%] top-[50%] transform rotate-12"></div>
                    <div className="absolute w-10 h-0.5 bg-black right-[15%] top-[55%] transform -rotate-12"></div>

                    {/* Bow */}
                    <div className="absolute w-16 h-8 bg-pink-500 rounded-full left-1/2 top-[-5%] transform -translate-x-1/2 rotate-12 z-10"></div>
                    <div className="absolute w-16 h-8 bg-pink-500 rounded-full left-1/2 top-[-5%] transform -translate-x-1/2 -rotate-12 z-10"></div>
                    <div className="absolute w-6 h-6 bg-pink-400 rounded-full left-1/2 top-[-5%] transform -translate-x-1/2 z-20"></div>
                  </div>

                  {/* Ears */}
                  <div className="absolute w-14 h-14 bg-white rounded-full left-[20%] top-[5%] border-4 border-black"></div>
                  <div className="absolute w-14 h-14 bg-white rounded-full right-[20%] top-[5%] border-4 border-black"></div>
                </div>

                {/* Sparkles around Hello Kitty */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-pink-400 animate-twinkle"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      fontSize: `${Math.random() * 1.5 + 1}rem`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                  >
                    ✨
                  </div>
                ))}
              </motion.div>

              <h1
                className="text-4xl md:text-5xl font-bold text-pink-500 text-center"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                Hi Daddy Mahdi, it&apos;s me, Shaima!
              </h1>

              <Button
                onClick={handleHiClick}
                className="mt-8 px-12 py-6 text-2xl bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Hi
              </Button>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-pink-300 animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      fontSize: `${Math.random() * 1.5 + 0.5}rem`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                  >
                    ✨
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="proposal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-8 p-8 bg-white rounded-xl shadow-lg border-4 border-pink-300"
            >
              <div className="relative w-full">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-pink-300 animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 1.5 + 0.5}rem`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                      }}
                    >
                      {Math.random() > 0.5 ? "✨" : "💕"}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center mb-4">
                <Heart className="text-pink-500 w-8 h-8 mr-2 animate-pulse" />
                <Heart className="text-pink-500 w-12 h-12 mr-2 animate-pulse" style={{ animationDelay: "0.5s" }} />
                <Heart className="text-pink-500 w-8 h-8 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-pink-600 text-center leading-relaxed"
                style={{ fontFamily: "Comic Sans MS, cursive" }}
              >
                My moon, my madness, my evermore—will you be my husband and the love of my life, bound by heart and
                fate?
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <Button
                  onClick={handleYesClick}
                  className="px-12 py-6 text-2xl bg-pink-500 hover:bg-pink-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Yes
                </Button>

                <motion.div
                  animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    onMouseEnter={moveNoButton}
                    className="px-12 py-6 text-2xl bg-gray-400 hover:bg-gray-500 rounded-full shadow-lg"
                  >
                    No
                  </Button>
                </motion.div>
              </div>

              {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-fall"
                      style={{
                        top: "-20px",
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        backgroundColor: ["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493", "#DB7093"][
                          Math.floor(Math.random() * 5)
                        ],
                        borderRadius: "50%",
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold text-pink-600 text-center bg-white bg-opacity-80 p-8 rounded-xl">
                    Yay! 💖 I love you!
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

