import './App.css'
import PageTitle from './components/PageTitle'
import TextBlock from './components/TextBlock'

const App: React.FC = () => (
  <>
    <PageTitle title="Le Palmypède" subtitle="Alexis Valentin" />
    <div className="contentWrapper">
      <TextBlock text="Bonjour ! Je suis un développeur web front spécialisé en ReactJS, Typescript et NextJS." />
    </div>
    <div className="contentWrapper">
      <TextBlock text="Bonjour ! Je suis un développeur web front spécialisé en ReactJS, Typescript et NextJS." />
    </div>
    <div className="contentWrapper">
      <TextBlock text="Bonjour ! Je suis un développeur web front spécialisé en ReactJS, Typescript et NextJS." />
    </div>
  </>
)

export default App
