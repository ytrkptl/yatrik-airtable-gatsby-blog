import styled from "styled-components"

export const DivInLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 0;
  max-width: 960px;
  background-color: var(--bg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 400px) {
    max-width: 100%;
    padding: 0;
    display: flex;
  }
`
