import { motion } from 'framer-motion'
import CrossIcon from '../../../assets/icons/crossIcon.svg'
import './Modal.css'

interface ModalProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
}) => (
  <>
    {isOpen && (
      <motion.div
        className="modalBackdrop flexContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modalContent"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <img src={CrossIcon} onClick={onClose} />
          <h3>{title}</h3>
          <div>{description}</div>
        </motion.div>
      </motion.div>
    )}
  </>
)

export default Modal
