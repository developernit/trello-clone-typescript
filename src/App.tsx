import React from "react";
import { AppContainer } from "./styles";
import { Card } from "./Card";
import { Column } from "./Column";
function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate application" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="Completed">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
