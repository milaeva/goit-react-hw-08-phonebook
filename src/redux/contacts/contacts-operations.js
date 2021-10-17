import phoneBookApi from 'service/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phoneBookApi.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await phoneBookApi.addContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await phoneBookApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await phoneBookApi.editContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const contactsOperations = {
  addContact,
  deleteContact,
  getContacts,
  editContact,
};

export default contactsOperations;
