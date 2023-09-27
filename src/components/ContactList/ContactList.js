import { BtnDelete, List, ListItem, Name, Phone, Wrapper } from "./ContactList.styled"
import {MdOutlineDeleteForever} from "react-icons/md";

export const ContactList = ({contacts, onClick}) =>{
   return (
      <Wrapper>
         <List>
            {contacts.map(el=> 
               <ListItem key={el.id}>
                  <Name>{el.name}</Name>
                  <Phone>{el.phone}</Phone>
                  <BtnDelete onClick={()=>onClick(el.id)}>
                     <MdOutlineDeleteForever size={24} />
                  </BtnDelete>
               </ListItem>)}
         </List>
      </Wrapper>
   )
}