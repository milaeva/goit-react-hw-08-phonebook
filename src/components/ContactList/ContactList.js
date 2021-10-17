import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(contactsSelectors.getVisibleItems);

  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
