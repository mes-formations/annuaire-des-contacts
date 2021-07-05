import "./style.scss";

interface LoaderRoundedProps {
  modifier?: string;
}

export const LoaderRounded: React.FC<LoaderRoundedProps> = ({
  modifier = "loader--blue",
}) => {
  return (
    <div className={"loader"}>
      <div className={modifier}></div>
      <div className={modifier}></div>
    </div>
  );
};
