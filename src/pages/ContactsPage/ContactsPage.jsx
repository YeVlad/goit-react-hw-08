import ContactForm from "../../components/contactsComponents/ContactForm/ContactForm";
import ContactList from "../../components/contactsComponents/ContactList/ContactList";
import SearchBox from "../../components/contactsComponents/SearchBox/SearchBox";

export default function ContactsPage() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
