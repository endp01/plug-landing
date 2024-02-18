"use client";

import { useEffect, useState } from "react";

import { Puzzle, Receipt, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Grid from "./components/Grid";

const chains = [
  "ethereum",
  "optimism",
  "bera",
  "polygon",
  "base",
  "gnosis",
  "arbitrum",
  "avalanche",
  "bsc",
];

export default function Home() {
  const [chain, setChain] = useState(chains[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const index = chains.indexOf(chain);
      const next = index === chains.length - 1 ? 0 : index + 1;

      if (!document.hasFocus()) return;

      setChain(chains[next]);
    }, 5000);

    return () => clearInterval(interval);
  }, [chain]);

  return (
    <>
      <Grid />

      <div className="mt-auto flex flex-col">
        <div className="h-full mx-4 lg:mx-8 mb-12">
          <motion.h1 className="text-4xl lg:text-7xl mb-12 mt-12 lg:mt-0 text-shadow-blur shadow-white dark:shadow-black">
            <span className="text-black/60 dark:text-white/60">
              <motion.span
                className="text-black dark:text-white"
                animate={{ opacity: [0.6, 1] }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
              >
                PLUG
              </motion.span>
              -AND-
              <motion.span
                className="text-black dark:text-white"
                animate={{ opacity: [0.6, 1] }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
              >
                PLAY
              </motion.span>
              <br />
            </span>
            <motion.span
              className="text-black dark:text-white"
              animate={{ opacity: [0.6, 1] }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
            >
              IF THIS
            </motion.span>
            <span className="text-black/60 dark:text-white/60">,</span>
            <motion.span
              className="text-black dark:text-white"
              animate={{ opacity: [0.6, 1] }}
              transition={{ duration: 0.4, delay: 1.2, ease: "easeInOut" }}
            >
              THEN THAT
            </motion.span>
            <span className="text-black/60 dark:text-white/60"></span>
            <br />
            <span className="text-black/60 dark:text-white/60">FOR</span>
            <motion.span
              className="relative w-full"
              animate={{ opacity: [0.6, 1] }}
              transition={{ duration: 0.4, delay: 1.6, ease: "easeInOut" }}
            >
              {" "}
              <AnimatePresence>
                {chains.map(
                  (c, i) =>
                    chain === c && (
                      <motion.span
                        key={i}
                        initial={{ display: "none", opacity: 0 }}
                        animate={{ display: "inline-block", opacity: 1 }}
                        exit={{ display: "none", opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          delayChildren: 1.6,
                          ease: "easeInOut",
                        }}
                      >
                        {c.toUpperCase()}
                      </motion.span>
                    )
                )}
              </AnimatePresence>{" "}
            </motion.span>
            <span className="text-black/60 dark:text-white/60">
              TRANSACTIONS.
            </span>
          </motion.h1>

          <div className="grid col-span-12 grid-cols-10 lg:grid-cols-12 xl:grid-cols-10 gap-4 lg:gap-12">
            <div className="col-span-9 lg:col-span-4 xl:col-span-3 text-shadow-blur shadow-white dark:shadow-black">
              <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-black/60 dark:to-white/60">
                <Sparkles
                  className="text-black/40 dark:text-white/40"
                  size={24}
                />
                CONDITIONAL EXECUTION
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-black dark:from-white to-black/60 dark:to-white/60 text-justify ml-10">
                Unlocks the power of conditional execution for transactions on
                EVM blockchains. From simple to complex, Plug can scale till
                your heart is content.
              </p>
            </div>

            <div className="col-span-9 lg:col-span-4 xl:col-span-3 text-shadow-blur shadow-white dark:shadow-black">
              <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-black/60 dark:to-white/60">
                <Puzzle
                  className="text-black/40 dark:text-white/40"
                  size={24}
                />
                SEAMLESS INTEGRATION
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-black dark:from-white to-black/60 dark:to-white/60 text-justify ml-10">
                Designed to work with any smart contract deployed past, present
                or future, Plug has several levels of integration to chose from.
                No need to deploy a new contract.
              </p>
            </div>

            <div className="col-span-9 lg:col-span-4 xl:col-span-3 text-shadow-blur shadow-white dark:shadow-black">
              <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-black/60 dark:to-white/60">
                <Receipt
                  className="text-black/40 dark:text-white/40"
                  size={24}
                />
                ALL EVM BLOCKCHAINS
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-black dark:from-white to-black/60 dark:to-white/60 text-justify ml-10">
                Plug was designed to operate on all EVM compatible blockchains
                such as Optimism, Base, etc.. With this, cross-chain
                functionality is included right out of the box.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
