import { changeFilter } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { GoSearch } from 'react-icons/go';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const handleFilterValue = e =>
    dispatch(changeFilter(e.currentTarget.value.trim()));

  return (
    <label className={s.label}>
      <input
        className={s.input}
        placeholder="Enter to search..."
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <GoSearch className={s.icon} />
    </label>
  );
};

export default Filter;
