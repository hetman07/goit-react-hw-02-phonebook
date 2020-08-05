import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({contacts, onRemove}) => {
    return(
<div>
<h2>Contacts</h2>
<ul className={styles.TaskList}>
  {contacts.map(cont => (
    <li className={styles.TaskListItem} key={cont.id}>
      <span className={styles.TaskListText}>{cont.name}: </span>
      <span className={styles.TaskListText}>{cont.number}</span>
      <button type="button" 
      className={styles.TaskListButton}
      onClick={() => onRemove(cont.id)}>Delete</button>
    </li>
  ))}
</ul>
</div>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number:PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired
};

export default ContactList;
