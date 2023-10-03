import { useDispatch, useSelector } from "react-redux";
import { BtnDelete, List, ListItem, Name, Phone, Wrapper } from "./ContactList.styled"
import {MdOutlineDeleteForever} from "react-icons/md";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

export const ContactList = () =>{
   const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);
   const filteredContacts = contacts.filter(el => el.name.toLowerCase().startsWith(filter.toLowerCase()));
   const dispatch = useDispatch();
   return (
      <Wrapper>
         <List>
            {filteredContacts.map(el=> 
               <ListItem key={el.id}>
                  <Name>{el.name}</Name>
                  <Phone>{el.phone}</Phone>
                  <BtnDelete onClick={()=>dispatch(deleteContact(el.id))}>
                     <MdOutlineDeleteForever size={24} />
                  </BtnDelete>
               </ListItem>)}
         </List>
      </Wrapper>
   )
}