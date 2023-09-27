import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(4)};
`

export const InputFilter = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
`

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing(1)};
`
