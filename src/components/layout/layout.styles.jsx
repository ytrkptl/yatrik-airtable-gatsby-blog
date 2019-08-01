import styled from "styled-components"

export const DivInLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  padding-bottom: 0;
  max-width: 960;
  background-color: var(--bg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`
