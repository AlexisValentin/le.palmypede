import TechIcon from '../assets/icons/techIcon.svg'
import ProIcon from '../assets/icons/proIcon.svg'
import IdeaIcon from '../assets/icons/ideaIcon.svg'

interface ParallaxImageType {
  label: string
  alt: string
  path: string
  color: string
}

export const PARALLAX_IMAGES: ParallaxImageType[] = [
  {
    label: 'Technos',
    alt: 'Icône représentant des noeuds informatques',
    path: TechIcon,
    color: '#f9b016',
  },
  {
    label: 'Expériences',
    alt: 'Icône représentant un personnage avec des étoiles',
    path: ProIcon,
    color: '#1288a6',
  },
  {
    label: 'Projets',
    alt: 'Icône représenant une ampoule englobée dans deux cercles',
    path: IdeaIcon,
    color: '#775c89',
  },
]
