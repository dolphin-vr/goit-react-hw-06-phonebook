import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Title = styled.h2`
   margin: ${({theme}) => theme.spacing(4)} auto ${({theme}) => theme.spacing(3)};
   font-size: 32px;
`

export const List = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0;
   width: 100%;
`

export const ListItem = styled.li`
   display: flex;
   align-items: center;
   gap: ${props => props.theme.spacing(3)};
   margin: 0;
   padding: ${props => props.theme.spacing(1)};
   width: 100%;
`

export const Name = styled.span`
   width: calc(100% / 2.2);
`

export const Phone = styled.span`
`

export const BtnDelete = styled.button`
   margin-left: auto;
   font-size: 12px;
   padding: 0;
   border: none;
   border-radius: ${({ theme }) => theme.radii.sm};
   color: ${({ theme }) => theme.colors.red};
`