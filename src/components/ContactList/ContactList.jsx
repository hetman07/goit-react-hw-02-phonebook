import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({contacts}) => {
    return(
<div>
<h2>Contacts</h2>
<ul className="TaskList">
  {contacts.map(cont => (
    <li className="TaskList-item" key={cont.id}>
      <span className="TaskList-text">{cont.name}+': '</span>
      <span className="TaskList-text">{cont.number}</span>
    </li>
  ))}
</ul>
</div>
    )
}

export default ContactList;
