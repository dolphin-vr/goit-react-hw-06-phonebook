import { useDispatch, useSelector } from "react-redux";
import { InputFilter, Label, Wrapper } from "./Filter.styled"
import { getFilter } from "redux/selectors";
import { handleFilter } from "redux/filterSlice";


export const Filter = () =>{
   const filter = useSelector(getFilter);
   const dispatch = useDispatch();
   return (
      <Wrapper>
         <Label>
            Find contacts by name
            <InputFilter value={filter} onChange={ev => dispatch(handleFilter(ev.target.value))} />
         </Label>
      </Wrapper>
   )
}