import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectValue } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

export const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalized = filter.toLocaleLowerCase();
  const contactsFilter = contacts?.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  const contactsState = contactsFilter.sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <List>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts &&
        contactsState.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>
              {name} : {phone}
            </p>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        ))}
    </List>
  );
};