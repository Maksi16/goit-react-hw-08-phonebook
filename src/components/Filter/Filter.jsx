import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectValue } from 'redux/contacts/selectors';
import { setTextFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(setTextFilter(e.currentTarget.value));
  };

  const idFilter = nanoid(5);

  return (
    <Label htmlFor={idFilter}>
      Find contacts by name
      <Input
        id={idFilter}
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={filterContact}
      />
    </Label>
  );
};
