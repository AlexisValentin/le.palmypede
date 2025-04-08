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
  icon: string
  description: string
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
      {
        label: 'React JS',
        icon: ReactIcon,
        description: `React JS est une librairie javascript, créant un écosystème tout autour du langage Javascript. Développeur React depuis maintenant plusieurs années, j'ai appris à m'adapter à la programmation fonctionnelle, notamment en passant par l'utilisation des hooks natifs (useState, useEffect, useContext, useMemo...).`,
      },
      {
        label: 'Next JS',
        icon: NextIcon,
        description: `Next JS est un framework se greffant à React JS permettant l'utilisation de nombreuses fonctionalités, tel que la navigation de page en page, la gestion des metadata... `,
      },
      {
        label: 'Typescript',
        icon: TailwindIcon,
        description: `Javascript étant un langage non typé, il est de nos jours primordial de passer par Typescript.`,
      },
      {
        label: 'Tailwind CSS',
        icon: NodeIcon,
        description: `L'utilisation du CSS peut parfois porter à confusion ou amener à des situations cocasses. Tailwind est une librairie CSS permet de faciliter l'usage des styles avec des classes prédéfinies, et se révèle entièrement personnalisable.`,
      },
    ],
  },
  {
    label: 'Expériences',
    alt: 'Icône représentant un personnage avec des étoiles',
    path: ProIcon,
    color: '#1288a6',
    gridElements: [
      { label: 'Canal+', icon: CanalIcon, description: '' },
      { label: 'Mappy / RSS', icon: RATPIcon, description: '' },
    ],
  },
  {
    label: 'Projets',
    alt: 'Icône représenant une ampoule englobée dans deux cercles',
    path: IdeaIcon,
    color: '#775c89',
    gridElements: [
      { label: 'Palmythology', icon: PalmythologyIcon, description: '' },
      { label: 'Maison des Thés', icon: BetjemanIcon, description: '' },
    ],
  },
]
