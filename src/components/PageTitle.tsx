import "./PageTitle.css";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => (
  <div className="pageTitleWrapper">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default PageTitle;
