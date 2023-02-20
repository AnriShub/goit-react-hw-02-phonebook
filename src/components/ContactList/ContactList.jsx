import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
    return <div className={css.wraperContactList}>
        <ul className={css.contactList}>
            {contacts.map((contact, index) => (
                <li key={index} className={css.contactListItem}>
                    {contact.name}: {contact.number}
                    <button type='button' className={css.contactListItemBtn} 
                    onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContact: PropTypes.func.isRequired,
  };