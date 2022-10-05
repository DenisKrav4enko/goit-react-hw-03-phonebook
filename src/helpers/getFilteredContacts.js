import PropTypes from 'prop-types';

export const getFilteredContacts = (contacts, filter) => {
  const filterValue = filter.toLowerCase().trim();
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue)
  })
}

getFilteredContacts.propTypes = {
  name: PropTypes.string,
  filter: PropTypes.string,
  contact: PropTypes.object,
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string,
  getFilteredContacts: PropTypes.func,
}
