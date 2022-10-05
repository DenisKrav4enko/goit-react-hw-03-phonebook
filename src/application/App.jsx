import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './StyeledComponents';
import ContactsBook from './contactsBook/ContactsBook';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const isStored = localStorage.getItem('contacts')
    if (isStored) {
      setContacts(JSON.parse(isStored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  return (
    <Wrapper>
      <ContactsBook
        filter={filter}
        contacts={contacts}
        setFilter={setFilter}
        setContacts={setContacts}
      />
    </Wrapper>
  );
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  setFilter: PropTypes.func,
  setContacts: PropTypes.func,
}

export default App;
