import { useState } from "react";
import styles from "./RecursiveComponent.module.scss";
import Button from "../Button";
import Input from "../Input";
interface Props {
  data: Record<string, any>[];
}

const RecursiveComponent: React.FC<Props> = ({ data }) => {
  const [componentData, setComponentData] = useState(data);
  const [input, setInput] = useState("");

  const setInputValue = (input: string | undefined) => {
    input && setInput(input);
  };

  const addItem = (name: string) => {
    name && setComponentData([...componentData, { name }]);
  };
  const removeItem = (name: string | undefined) => {
    setComponentData(componentData.filter((item) => item.name !== name));
  };
  return (
    <div className={styles.component}>
      {componentData.map((item) => {
        return (
          <div key={item.name}>
            <span> - {item.name}</span>
            <Input input={input} setInput={(e) => setInputValue(e)} />
            <Button name="+" action={() => addItem(input)}></Button>
            <Button name="-" action={() => removeItem(item.name)}></Button>
            <div>
              {item.children && <RecursiveComponent data={item.children} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecursiveComponent;
