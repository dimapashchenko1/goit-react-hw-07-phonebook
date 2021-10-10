import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contacts-actions";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    let duplicate = state.find((contact) => contact.name === payload.name);
    if (duplicate) {
      alert("Такой контакт уже существует!");
      return state;
    } else {
      return [...state, payload];
    }
  },
  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
