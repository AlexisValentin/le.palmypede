import { motion, MotionValue, useScroll } from 'motion/react'
import { useRef, useState } from 'react'
import './Parallax.css'
import { useParallax } from '../../../hooks/useParallax'
import { GridElementType, PARALLAX_IMAGES } from '../../../constants/parallax'
import LePalmypedeLogo from '../../../assets/images/lePalmypedeLogo.jpg'
import ParallaxScroll from './ParallaxScroll'
import Modal from '../modal/Modal'

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
}) => {
  const [openModal, setOpenModal] = useState<string | undefined>()

  const handleOpenModal = (label: string) => {
    setOpenModal(label)
  }

  const handleCloseModal = () => {
    setOpenModal(undefined)
  }

  return (
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
            {gridElements.map(({ label, description, icon }) => (
              <div className="flexContainer" key={`gridElement-${label}`}>
                <Modal
                  title={label}
                  description={description}
                  isOpen={openModal === label}
                  onClose={handleCloseModal}
                />
                <motion.button
                  onClick={() => handleOpenModal(label)}
                  whileHover={{ scale: 1.5 }}
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

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
    <ParallaxScroll />
  </>
)

export default Parallax
