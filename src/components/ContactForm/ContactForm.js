import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone-lite";
import { Notify } from 'notiflix';
import { Label, StyledForm, StyledField, ErrorMsg } from "./ContactForm.styled"
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

// const phoneRegExp = "/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/";
const phonePattern = "\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}";

const phoneSchema = Yup.object().shape({
   name: Yup.string().min(2, 'Too Short!').required('Name is required'),
   // phone: Yup.string().phone(["US", "UA"], "Please enter a valid phone number")
   phone: Yup.string().matches(phonePattern, 'Phone number is not valid')
   .required("A phone number is required")
 });
 
const optNotiflx = {
  position: 'center-top',
  timeout: 5000,
  fontSize: '18px',
};


export const ContactForm =()=>{
  const contacts = useSelector(state => state.contacts);
  const dispatch= useDispatch();
  
  const isInList = contact =>{
    return contacts.some(el => (el.name.toLowerCase()===contact.name.toLowerCase()))
  }

  const onAdd = contact => {
    if (isInList(contact)) {
      Notify.warning(`${contact.name} is already in contacts`, optNotiflx)
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