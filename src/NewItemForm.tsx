import React, { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

//onAdd is a callback func passed through AddNewItem
interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("");
  const { onAdd } = props;
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
