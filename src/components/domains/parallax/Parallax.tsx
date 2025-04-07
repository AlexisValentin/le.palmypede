import { motion, MotionValue, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'
import './Parallax.css'
import { useParallax } from '../../../hooks/useParallax'
import { GridElementType, PARALLAX_IMAGES } from '../../../constants/parallax'
import LePalmypedeLogo from '../../../assets/images/lePalmypedeLogo.jpg'

const ParallaxScrollHandler: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="progress" style={{ scaleX }} />
}

interface ParallaxImageItemProps {
  label: string
  subtitle?: string
  path: string
  alt: string
  imageRef: React.RefObject<null>
  color: string
  verticalMotion: MotionValue<number>
  gridElements?: GridElementType[]
}

const ParallaxImageItem: React.FC<ParallaxImageItemProps> = ({
  label,
  subtitle,
  path,
  alt,
  imageRef,
  color,
  verticalMotion,
  gridElements,
}) => (
  <section className="imageWrapper" key={`image-${label}`} ref={imageRef}>
    <img src={path} alt={alt} />
    <div className="titleWrapper">
      <motion.h2
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y: verticalMotion, color }}
      >
        {label}
      </motion.h2>
      {subtitle && (
        <motion.h3
          initial={{ visibility: 'hidden' }}
          animate={{ visibility: 'visible' }}
          style={{ y: verticalMotion, color }}
        >
          {subtitle}
        </motion.h3>
      )}
      {gridElements && (
        <div
          className={
            gridElements.length === 2 ? 'gridWrapperInline' : 'gridWrapper'
          }
        >
          {gridElements.map(({ label, icon }) => (
            <motion.button
              whileHover={{ scale: 1.5 }}
              key={`gridElement-${label}`}
              className="gridElement"
            >
              {icon ? (
                <img
                  className="gridElementImage"
                  src={icon}
                  alt={`${label} icône`}
                />
              ) : (
                label
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  </section>
)

const ParallaxImageHandler: React.FC = () => {
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imageRef })
  const verticalMotion = useParallax(scrollYProgress, 0)

  return (
    <>
      <ParallaxImageItem
        label={'Alexis Valentin'}
        subtitle={'Développeur web JS'}
        alt={'Logo du Palmypède'}
        path={LePalmypedeLogo}
        color={'#ffffff'}
        imageRef={imageRef}
        verticalMotion={verticalMotion}
      />
      {PARALLAX_IMAGES.map(({ label, alt, path, color, gridElements }) => (
        <ParallaxImageItem
          key={`image-${label}`}
          label={label}
          alt={alt}
          path={path}
          color={color}
          imageRef={imageRef}
          verticalMotion={verticalMotion}
          gridElements={gridElements}
        />
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
