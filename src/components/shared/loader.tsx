import "./loader.styles.scss";

interface LoaderProps {
  modifier?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  modifier = "loader--blue",
}) => {
  return (
    <div className={"loader"}>
      <div className={modifier}></div>
      <div className={modifier}></div>
    </div>
  );
};
