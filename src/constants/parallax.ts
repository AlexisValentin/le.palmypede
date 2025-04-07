import TechIcon from '../assets/icons/techIcon.svg'
import ProIcon from '../assets/icons/proIcon.svg'
import IdeaIcon from '../assets/icons/ideaIcon.svg'
import ReactIcon from '../assets/icons/stack/reactIcon.svg'
import NextIcon from '../assets/icons/stack/nextIcon.svg'
import TailwindIcon from '../assets/icons/stack/tailwindIcon.svg'
import NodeIcon from '../assets/icons/stack/nodeIcon.svg'
import CanalIcon from '../assets/icons/experience/canalIcon.svg'
import RATPIcon from '../assets/icons/experience/ratpIcon.svg'
import PalmythologyIcon from '../assets/icons/projects/palmythologyIcon.png'
import BetjemanIcon from '../assets/icons/projects/betjemanIcon.jpg'

export interface GridElementType {
  label: string
  icon?: string
}

interface ParallaxImageType {
  label: string
  alt: string
  path: string
  color: string
  gridElements?: GridElementType[]
}

export const PARALLAX_IMAGES: ParallaxImageType[] = [
  {
    label: 'Technos',
    alt: 'Icône représentant des noeuds informatques',
    path: TechIcon,
    color: '#f9b016',
    gridElements: [
      { label: 'React JS', icon: ReactIcon },
      { label: 'Next JS', icon: NextIcon },
      { label: 'Typescript', icon: TailwindIcon },
      { label: 'Tailwind CSS', icon: NodeIcon },
    ],
  },
  {
    label: 'Expériences',
    alt: 'Icône représentant un personnage avec des étoiles',
    path: ProIcon,
    color: '#1288a6',
    gridElements: [
      { label: 'Canal+', icon: CanalIcon },
      { label: 'Mappy / RSS', icon: RATPIcon },
    ],
  },
  {
    label: 'Projets',
    alt: 'Icône représenant une ampoule englobée dans deux cercles',
    path: IdeaIcon,
    color: '#775c89',
    gridElements: [
      { label: 'Palmythology', icon: PalmythologyIcon },
      { label: 'Maison des Thés', icon: BetjemanIcon },
    ],
  },
]
