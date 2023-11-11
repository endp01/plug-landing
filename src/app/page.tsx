'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { ChevronRight, PartyPopper, Puzzle, Receipt, Sparkles, TestTube2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'

import Fireworks from './components/Fireworks'

const chains = [
  'ethereum', 
  'polygon', 
  'optimism', 
  'base', 
  'gnosis',
  'arbitrum', 
  'avalanche', 
  'bsc'
]

export default function Home() {
  const ref = useRef<HTMLInputElement>(null)

  const [chain, setChain] = useState(chains[0]);

  const [form, setForm] = useState('');
  const [submit, setSubmit] = useState<boolean | number>(false);

  const isValid = useMemo(() => { 
    if (form.length === 0) return false
  
    const isEmail = form.includes('@') && form.includes('.')
    const isAddress = form.length === 42 && form.startsWith('0x')
    const isENS = form.length > 0 && form.includes('.eth')

    return isEmail || isAddress || isENS
  }, [form])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if(form === '' || !isValid) ref.current?.focus()

    if(!isValid || submit) return

    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ identifier: form })
    })
      .then(res => res.json())
      .then(res => { setSubmit(res.id) })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const index = chains.indexOf(chain)
      const next = index === chains.length - 1 ? 0 : index + 1

      setChain(chains[next])
    }, 5000)

    return () => clearInterval(interval)
  }, [chain])

  return (
    <>
      <Fireworks enabled={typeof submit === 'number'} />

      <div className="mt-auto mx-8 flex flex-col">
        <motion.h1 className="text-4xl lg:text-7xl mb-12 mt-12 lg:mt-0">
          <span className="text-black/60 dark:text-white/60">
          <motion.span className="text-black dark:text-white"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: .4, delay: 0.4, ease: 'easeInOut' }}
          >PLUG</motion.span>
            -AND-
          <motion.span className="text-black dark:text-white"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: .4, delay: 0.4, ease: 'easeInOut' }}
          >PLAY</motion.span>
            <br /> {"'"}</span>
          <motion.span className="text-black dark:text-white"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: .4, delay: 0.8, ease: 'easeInOut' }}
          >IF THIS</motion.span>
          <span className="text-black/60 dark:text-white/60">,</span>
          <motion.span className="text-black dark:text-white"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: .4, delay: 1.2, ease: 'easeInOut' }}
          >
            THEN THAT
          </motion.span>
          <span className="text-black/60 dark:text-white/60">{"'"}</span><br /> 
          <span className="text-black/60 dark:text-white/60">FOR</span>
          <motion.span className="relative w-full"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: .4, delay: 1.6, ease: 'easeInOut' }}
          >
            {' '}<AnimatePresence>
              {chains.map((c, i) => chain === c && <motion.span
                key={i}
                initial={{ display: 'none', opacity: 0 }}
                animate={{ display: 'inline-block', opacity: 1 }}
                exit={{ display: 'none', opacity: 0 }}
                transition={{ duration: .4, delayChildren: 1.6, ease: 'easeInOut' }}
              >{c.toUpperCase()}</motion.span>
              )}
            </AnimatePresence>{' '}
          </motion.span>
          <span className="text-black/60 dark:text-white/60">TRANSACTIONS.</span>
        </motion.h1>

        <div className="grid col-span-12 grid-cols-11 lg:grid-cols-10 gap-4 lg:gap-12">
          <div className="col-span-10 lg:col-span-3">
            <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center">
              <Sparkles className="text-black/40 dark:text-white/40" size={24} />
              CONDITIONAL EXECUTION              
            </h3>
            <p className="text-justify text-black/60 dark:text-white/60 ml-10">The reliance on imperative blockchain transactions has resulted in significant and growing costs. With Emporium transactions can be defined with verbose conditions.</p>
          </div>

          <div className="col-span-10 lg:col-span-3">
            <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center">
              <Puzzle className="text-black/40 dark:text-white/40" size={24} />
              SEAMLESS INTEGRATION 
            </h3>
            <p className="text-justify text-black/60 dark:text-white/60 ml-10">Emporium is designed to work with any smart contract deployed past, present or future without gas overhead. There is no need to migrate or deploy a new smart contract.</p>
          </div>

          <div className="col-span-10 lg:col-span-3">
            <h3 className="text-2xl mb-4 flex flex-row gap-4 items-center">
              <Receipt className="text-black/40 dark:text-white/40" size={24} />
              EVM COMPATIBLE
            </h3>
            <p className="text-justify text-black/60 dark:text-white/60 ml-10">Emporium was designed to operate on all EVM compatible blockchains including the most popular L2s. With this cross-chain functionality is included right out of the box.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center justify-center border-t-[1px] border-black/10 dark:border-white/10 mt-12">
        {!submit && <AnimatePresence><motion.div 
          className="flex flex-row items-center min-w-full lg:min-w-[75%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .4, ease: 'easeInOut' }}
        >
          <ChevronRight className="text-black/40 dark:text-white/40 ml-8" size={24} />

          <motion.input
            autoFocus
            ref={ref}
            className="bg-white dark:bg-black text-black/60 dark:text-white/60 p-4 pl-0 outline-none placeholder-black/60 dark:placeholder-white/60"
            type="text"
            value={form}
            onChange={e => setForm(e.target.value.trim())}
            placeholder="YOUR ETHEREUM OR EMAIL ADDRESS"
            initial={{ width: '100%' }}
            animate={{ width: submit ? '0%' : '100%', padding: submit ? '0px' : '1rem 2rem', opacity: submit ? 0 : 1, color: form !== '' && !isValid ? '#ef4444' : '' }}
            autoComplete="off" 
            spellCheck="false"
            transition={{ duration: .4, ease: 'easeInOut' }}
          />
        </motion.div></AnimatePresence>}

        <motion.div className="min-w-full lg:min-w-[25%]"
          animate={{ width: submit ? '100%' : '' }}
          transition={{ duration: .4, ease: 'easeInOut' }}
        >
          <motion.button
            type="submit"
            className="w-full flex flex-row gap-4 items-center justify-center bg-black dark:bg-white hover:bg-black/90 hover:dark:bg-white/90 text-white dark:text-black p-4 px-8 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
            disabled={form !== '' && !isValid}
          >
            {submit ? <PartyPopper className="text-white/40 dark:text-black/40" size={18} />
              : <TestTube2 className="text-white/40 dark:text-black/40" size={18} />}

            {
              submit 
                ? `YOUR SPOT HAS BEEN SAVED AS #${submit}.` 
                : (form === '' || form !== '' && isValid) 
                  ? 'REQUEST EARLY ACCESS' 
                  : 'INVALID ENTRY'
            }
          </motion.button>
        </motion.div>
      </form>
    </>
  )
}
