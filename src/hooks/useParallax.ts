import { MotionValue } from 'motion'
import { useTransform } from 'motion/react'

export const useParallax = (value: MotionValue<number>, distance: number) =>
  useTransform(value, [0, 1], [-distance, distance])
