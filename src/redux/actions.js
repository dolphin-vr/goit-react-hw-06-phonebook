const { nanoid } = require("nanoid")

export const addContact = contact => {
   return{
      type: "contacts/addContact",
      payload: {
         id: nanoid(),
         name: contact.name,
         phone: contact.phone,
      },
   }
 }

export const deleteContact = id =>{
   return{
      type: "contacts/deleteContact",
      payload: id,
   }
 }

export const handleFilter = filter =>{
   return{
      type: "filter/handleFilter",
      payload: filter,
   }
} 
