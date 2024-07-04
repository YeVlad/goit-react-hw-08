import Contact from "../Conctact/Contact";

import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contacts/operations";
import { selectFilteredContacts } from "../../../redux/contacts/selectors";
export default function ContactList() {
  const filteredContacts = useSelector((state) =>
    selectFilteredContacts(state)
  );
  const dispatch = useDispatch();

  function delContact(id) {
    dispatch(deleteContacts(id));
  }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            delContact={delContact}
          />
        );
      })}
    </ul>
  );
}
