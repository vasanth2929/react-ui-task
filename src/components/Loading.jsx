import React from 'react';
import { motion,AnimatePresence} from 'framer-motion';
import loadingGif from '../assets/loading.gif';

let Loading = ()=>{
    return (
    <AnimatePresence>
      <motion.div
       initial={{ opacity:0 }}
       animate={{ opacity: 1 }}
       exit={{ x: '100px' }}
       className="flex justify-center h-screen items-center">
          <img src={loadingGif} alt="loading"/>
      </motion.div>
    </AnimatePresence>);
}

export default Loading;