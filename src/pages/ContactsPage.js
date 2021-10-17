import ReactNotification from 'react-notifications-component';
import { useEffect } from 'react';
import 'react-notifications-component/dist/theme.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  const visibleItems = useSelector(contactsSelectors.getVisibleItems);

  return (
    <>
      <ReactNotification />
      <Section nameForClass={'section'}>
        <h1 className={s.title}>My phonebook</h1>
        <div className={s.newContactWrapper}>
          <h2 className={s.newContactTitle}>A new contact</h2>
          <ContactForm />
        </div>
      </Section>
      <Section nameForClass={'sectionList'}>
        <h2 className={s.titleContacts}>Contacts</h2>
        <Filter />
        {visibleItems[0] ? (
          <ContactList />
        ) : (
          <p className={s.text}>There’s nothing here yet...</p>
        )}
      </Section>
    </>
  );
};

export default ContactsPage;
