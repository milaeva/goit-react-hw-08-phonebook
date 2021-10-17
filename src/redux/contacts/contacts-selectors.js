import { createSelector } from 'reselect';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleItems = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter),
    );
  },
);

const contactsSelectors = { getItems, getFilter, getVisibleItems };

export default contactsSelectors;
