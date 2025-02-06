import React from "react";
import { Button } from "react-native";

type Props = {
  decrement: () => void;
};

const Decrement: React.FC<Props> = ({ decrement }) => {
  return (
    <Button title="Decrement -" color='red'  onPress={decrement}></Button>
  );
};

export default Decrement;