import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #405059;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledH1 = styled.h1`
  color: #fff;
  font-family: "Calibri", sans-serif;
  font-size: 24px;
`;

function App() {
  return (
    <AppWrapper>
      <StyledH1>
        <h1>
          {" "}
          O mundo pode até fazer você chorar, mas Deus te quer sorrindo. 😃🙏
        </h1>
      </StyledH1>
    </AppWrapper>
  );
}


export default App;
