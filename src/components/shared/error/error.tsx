import "./style.scss";

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div className="error">{message}</div>;
};
