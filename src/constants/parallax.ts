import TechIcon from '../assets/images/techIcon.svg'
import ProIcon from '../assets/images/proIcon.svg'
import IdeaIcon from '../assets/images/ideaIcon.svg'

interface ParallaxImageType {
  label: string
  alt: string
  path: string
  color: string
}

export const PARALLAX_IMAGES: ParallaxImageType[] = [
  {
    label: 'Stacks techniques',
    alt: 'Icône représentant des noeuds informatques',
    path: TechIcon,
    color: '#2ce355',
  },
  {
    label: 'Expériences professionnelles',
    alt: 'Icône représentant un personnage avec des étoiles',
    path: ProIcon,
    color: '#e32c97',
  },
  {
    label: 'Projets annexes',
    alt: 'Icône représenant une ampoule englobée dans deux cercles',
    path: IdeaIcon,
    color: '#e3de2c',
  },
]
