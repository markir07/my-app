import { useState } from "react";
import Button from "../../components/Button";
import styles from "./index.module.scss";
import { action, isEven } from "./utils";

function EvenOrOdd() {
  const [value, setValue] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div>{value}</div>
        {/* TODO text should be moved to seaprate trasnaltion file an managed from there */}
        <div>{isEven(value) ? "Even" : "Odd"}</div>
      </div>
      <div className={styles.buttons}>
        <Button name="Add" action={() => action("add", value, setValue)} />
        <Button
          name="Subtract"
          action={() => action("subtract", value, setValue)}
        />
      </div>
    </div>
  );
}

export default EvenOrOdd;
