import "./hero.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "motion/react"

const Hero = () => {
   return (
     <section className="hero flex">
        <div className="left-section">
          <div className="perent-avatar flex">
                <motion.img
                 initial={{ transform: "scale(0)" }}
                 animate={{ transform: "scale(1.1)" }}
                 transition={{ damping: 6 , type: "spring" , stiffness: 100}}
                 src="/logo.jpg"
                 className="avatar"
                 alt="my-profile" />
                <div className="icon-verified"></div>
          </div>

        <motion.h1
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1.1)" }}
          transition={{ damping: 6 , type: "spring" , stiffness: 100}}
          className="title">
          Full Stack web Development And Cybersecurity
          </motion.h1>
         <motion.p
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6 , type: "spring" , stiffness: 100}}

         className="subtitle"> Hello Im Mohammed Yousif , Full Stack web & cybersecurity specialist I Web Developer I PHP I Laravel I WordPress I
         </motion.p>


        <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6 , type: "spring" , stiffness: 100}}

        className="all-icons flex">
          <div><a href="https://wa.me/249905370486"         target="_blank"  className="icon icon-whatsappicon icon-whatsapp" ></a></div>
          <div><a href="https://github.com/mohammedyousifm" target="_blank"  className="icon icon-github-square"></a></div>
          <div><a href="https://www.linkedin.com/in/mohammed-yousif-96a492261" target="_blank" className="icon icon-linkedin"></a></div>
          <div><a href="mailto:contact@mohammedyousif.com" className="icon icon-envelope"></a></div>
        </motion.div>

        </div>

         <div
            className="right-section animation flex">

          <DotLottieReact className="SepyMaO1SL"
            src="https://lottie.host/fb06cf2a-8be6-408e-85ba-88eca3ebc374/SepyMaO1SL.lottie"
            loop
            autoplay
          />
         </div>
    </section>
  );
}

export default Hero;
