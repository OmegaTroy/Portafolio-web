import { useRef } from "react";
import { motion } from "framer-motion";

import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoMongodb,BiLogoCss3,BiLogoJavascript,BiLogoReact,BiLogoTailwindCss} from 'react-icons/bi'
import {SiAstro,SiExpress,SiNodedotjs} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {TbBrandNextjs} from 'react-icons/tb'


export const Tecnologias = () => {
  const constraintsRef = useRef(null);
  return (
<motion.div  className="w-96 lg:w-[35rem] h-72 rounded-xl mt-8 border-2 border-gradi_light bg-FL overflow-hidden flex items-center flex-wrap" ref={constraintsRef}>
<motion.div className='w-[50px] h-[50px] text-4xl text-white rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <SiExpress/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-tercero rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <SiNodedotjs/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-amber-700 rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <BsGit/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-Negro rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <TbBrandNextjs/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-orange rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <AiFillHtml5/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-primary rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <BiLogoCss3/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl text-success rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <BiLogoMongodb/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl rounded-full text-newPalette6 grid place-items-center' drag dragConstraints={constraintsRef}>
  <BiLogoJavascript/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl rounded-full text-primario grid place-items-center' drag dragConstraints={constraintsRef}>
  <BiLogoReact/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl rounded-full text-Primario grid place-items-center' drag dragConstraints={constraintsRef}>
  <BiLogoTailwindCss/>
</motion.div>
<motion.div className='w-[50px] h-[50px] text-4xl rounded-full grid place-items-center' drag dragConstraints={constraintsRef}>
  <SiAstro/>
</motion.div>
</motion.div>
    )
}
