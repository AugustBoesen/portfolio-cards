'use client';

import React, { useContext } from 'react';
import { currentPage } from './layout';
import Default from './pageDefault';
import Code from './pageCode';
import Events from './pageEvents';
import Music from './pageMusic';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const { pageValue } = useContext(currentPage);

  return (
    <AnimatePresence mode="wait">
      {pageValue && pageValue.length > 0 && (
        <AnimatePresence mode="wait">
          {pageValue === 'Music' && (
            <motion.div
              key="music"
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              exit={{ opacity: 0, x: -500 }}
            >
              <Music />
            </motion.div>
          )}
          {pageValue === 'Events' && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              exit={{ opacity: 0, y: -500 }}
            >
              <Events />
            </motion.div>
          )}
          {pageValue === 'Code' && (
            <motion.div
              key="code"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              exit={{ opacity: 0, x: 500 }}
            >
              <Code />
            </motion.div>
          )}
          {pageValue === 'Default' && (
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Default />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </AnimatePresence>
  );
}
