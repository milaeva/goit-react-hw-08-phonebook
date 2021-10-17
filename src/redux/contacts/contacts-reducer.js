import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import contactsOperations from './contacts-operations';
import { changeFilter } from './contacts-actions';

const { getContacts, addContact, deleteContact, editContact } =
  contactsOperations;

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [editContact.fulfilled]: (state, { payload }) => {
    return [...state].map(contact => {
      if (contact.id === payload.id) {
        return payload;
      }
      return contact;
    });
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
