import "./style.scss";

const FormWrapper: React.FC = (props: any) => {
  return <div className="form-wrapper">{props.children}</div>;
};

export default FormWrapper;
