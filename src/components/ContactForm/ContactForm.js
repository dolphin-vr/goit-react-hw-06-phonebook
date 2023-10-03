import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";
import { Label, StyledForm, StyledField, ErrorMsg } from "./ContactForm.styled"
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const phonePattern = "\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}";

const phoneSchema = Yup.object().shape({
   name: Yup.string().min(2, 'Too Short!').required('Name is required'),
   phone: Yup.string().matches(phonePattern, 'Phone number is not valid')
   .required("A phone number is required")
 });
 
const toastOptions  = {
  position: 'center-top',
  duration: 5000,
  style: {
    width: '100%',
    fontSize: '22px',
    backgroundColor: '#f7ba60',
  },  
};


export const ContactForm =()=>{
  const contacts = useSelector(getContacts);
  const dispatch= useDispatch();
  
  const isInList = contact =>{
    return contacts.some(el => (el.name.toLowerCase()===contact.name.toLowerCase()))
  }

  const onAdd = contact => {
    if (isInList(contact)) {
      toast(`${contact.name} is already in contacts`, toastOptions );
    } else{
      dispatch(addContact(contact));
    }
  }

   return(
      <Formik
        initialValues={{
         name: '',
         phone: '',
        }}
        validationSchema={phoneSchema}
        onSubmit={(values, actions) => {
         onAdd(values);
         actions.resetForm();
       }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" placeholder="Jane" type="name" />
            <ErrorMsg name='name' component="span" />
          </Label>
    
          <Label>
            Phone Number
            <StyledField name="phone" placeholder="111-1111111" type="phone" />
            <ErrorMsg name='phone' component="span" />
          </Label>

          <button type="submit">Add Contact</button>
        </StyledForm>
      </Formik>
   )
}