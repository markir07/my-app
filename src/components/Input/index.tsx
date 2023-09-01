import React from "react";
interface Props {
  input: string;
  setInput: (value: string | undefined) => void;
}
const Form: React.FC<Props> = ({ input, setInput }) => {
  return (
    <label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </label>
  );
};

export default Form;
