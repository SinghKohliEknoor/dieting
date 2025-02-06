import React from "react";
import { Button } from "react-native";

type Props = {
  increment: () => void;
};

const Increment: React.FC<Props> = ({ increment }) => {
  return (
    <Button title="Increment +" color='red' onPress={increment}>
      
    </Button>
  );
};

export default Increment;