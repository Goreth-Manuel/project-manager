import { ChangeEvent } from "react";
import { 
  Input, 
  Label
} from "./style";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

const InputField = ({ label, type, name, value, onChange, error, placeholder }: InputFieldProps) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <br />
      <Input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        
      /> <br />
      {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
      <br />
    </div>
  );
};

export default InputField;
