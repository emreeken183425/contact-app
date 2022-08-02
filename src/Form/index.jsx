import {useEffect, useState} from 'react'


const initialFormValues={full_name:"",phone_number:""}

function Form({addContact,contacts}) {
const [form, setForm] = useState(initialFormValues);
useEffect(()=>{
    setForm(initialFormValues)
},[contacts]);

const onChangeInput=(e)=>{
    setForm({...form, [e.target.name]: e.target.value });
}

const onSubmit=(e)=>{
    e.preventDefault(); 

    if(form.fullname===""|| form.phone_number===""){
        return false
    }
    addContact([...contacts, form]);
const initialFormValues={full_name:"",phone_number:""}
   
   
}

  return (
    <div>
        <form onSubmit={onSubmit} >
        <input name='full_name' placeholder='Enter your name...' value={form.fullname} onChange={onChangeInput} />
        <br />
        <input name='phone_number' placeholder='Enter your phone number...' value={form.phone_number} onChange={onChangeInput } /><br />
       <div className='btn' >  <button  >ADD</button></div>
        </form>
    </div>
  )
}

export default Form