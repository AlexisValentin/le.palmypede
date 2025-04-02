import "./TextBlock.css";

interface TextBlockProps {
  text: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text }) => (
  <div className="textBlockWrapper">{text}</div>
);

export default TextBlock;
