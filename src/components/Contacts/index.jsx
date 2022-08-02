import {useState,useEffect} from 'react'
import Form from '../../Form'
import List from './List'

function Contacts() {
    const [contacts, setContacts] = useState([
      {full_name:"mehmet",
    phone_number:"05535646500"},
    {full_name:"ahmet",
    phone_number:"05535646511"},
    {full_name:"ayşe",
    phone_number:"05535646522"},
    {full_name:"veli",
    phone_number:"05535646533"}

    ]);

    useEffect(()=>{
console.log(contacts);
    },[contacts])



  return (
    <div id='container' >
      <h1>CONTACT APP</h1>
      <List contacts={contacts } />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
