import "./InputText.css";

interface IProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ placeholder, onChange }: IProps) => {
  return (
    <input
      className="input-text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
