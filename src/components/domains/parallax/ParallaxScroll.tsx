import { motion, useScroll, useSpring } from 'motion/react'

const ParallaxScroll: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: '#ffffff',
      }}
    />
  )
}

export default ParallaxScroll
