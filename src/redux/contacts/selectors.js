export const selectContacts = state => state.contacts;

export const selectValue = state => state.filters.text;

export const selectLoading = state => state.contacts.isLoading;
