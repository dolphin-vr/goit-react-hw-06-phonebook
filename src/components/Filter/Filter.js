import { InputFilter, Label, Wrapper } from "./Filter.styled"


export const Filter = ({filter, onChangeFilter}) =>{
   return (
      <Wrapper>
         <Label>
            Find contacts by name
            <InputFilter value={filter} onChange={ev => onChangeFilter(ev.target.value)} />
         </Label>
      </Wrapper>
   )
}