export const action = (
  action: "add" | "subtract",
  value: number,
  setValue: (val: number) => void,
) => {
  return setValue(action === "add" ? ++value : --value);
};

export const isEven = (val: number) => {
  return !(val % 2);
};
