import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from 'react-notifications-component';
import s from './ModalEditContact.module.css';

const ModalEditContact = ({ idEdit, name, number }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const items = useSelector(contactsSelectors.getItems);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const repeatCheck = newName => {
    return items.find(
      ({ name, id }) =>
        name.toLowerCase() === newName.toLowerCase() && id !== idEdit,
    );
  };

  const showNotification = () => {
    store.addNotification({
      title: 'Oops!',
      message:
        'But there’s already a contact with that name on your contact list',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  };

  const handleEdit = e => {
    e.preventDefault();
    if (repeatCheck(newName)) {
      showNotification();
      return;
    }

    const contact = { name: newName, number: newNumber, id: idEdit };
    dispatch(contactsOperations.editContact(contact));
    handleClose();
  };

  const handleGetValue = e => {
    const field = e.currentTarget.name;

    switch (field) {
      case 'name':
        setNewName(e.currentTarget.value);
        break;
      case 'number':
        setNewNumber(e.currentTarget.value);
        break;
      default:
        throw new Error();
    }
  };

  return (
    <>
      <Button className={s.buttonEdit} onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <form className={s.form} onSubmit={handleEdit}>
          <label className={s.label}>
            Name
            <input
              className={s.inputName}
              value={newName}
              onChange={handleGetValue}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.inputNumber}
              value={newNumber}
              onChange={handleGetValue}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <Modal.Footer className={s.modalFooter}>
            <Button
              onClick={handleClose}
              aria-label="button-cancel"
              className={s.buttonCancel}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEdit}
              type="submit"
              aria-label="button-edit"
              className={s.buttonDoneEdit}
            >
              Edit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalEditContact;
