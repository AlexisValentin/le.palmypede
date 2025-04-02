import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import './Parallax.css'
import { useParallax } from '../../../hooks/useParallax'
import { PARALLAX_IMAGES } from '../../../constants/parallax'

const ParallaxScrollHandler: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress" style={{ scaleX }} />
}

const ParallaxImageHandler: React.FC = () => {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imageRef })
  const y = useParallax(scrollYProgress, 0)

  return (
    <>
      {PARALLAX_IMAGES.map(({ label, alt, path, color }) => (
        <section className="imageWrapper" key={`image-${label}`} ref={imageRef}>
          <img src={path} alt={alt} />
          <motion.h2
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
            style={{ y, color }}
          >
            {label}
          </motion.h2>
        </section>
      ))}
    </>
  )
}

const Parallax = () => (
  <>
    <ParallaxImageHandler />
    <ParallaxScrollHandler />
  </>
)

export default Parallax
