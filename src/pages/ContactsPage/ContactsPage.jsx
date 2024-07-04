import { useEffect } from "react";
import ContactForm from "../../components/contactsComponents/ContactForm/ContactForm";
import ContactList from "../../components/contactsComponents/ContactList/ContactList";
import SearchBox from "../../components/contactsComponents/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
