import "./App.css";
import PageTitle from "./components/PageTitle";
import TextBlock from "./components/TextBlock";

const App: React.FC = () => (
  <>
    <PageTitle title="Le Palmypède" subtitle="Alexis Valentin" />
    <TextBlock text="Bonjour ! Je suis un développeur web front spécialiser en ReactJS, Typescript et NextJS." />
  </>
);

export default App;
