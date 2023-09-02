import { Item } from "./Contact.styled"

export const Contact = ({ contact, deleteContact, id }) => {
  return (
      <Item>
          {contact.name}: {contact.phoneNumber} 
          <button onClick={() => deleteContact(id)}>delete</button>
    </Item>
  )
}
