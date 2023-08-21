import React, { useState } from 'react';
import ContactDetails from './ContactDetails';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }: ContactListProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className='flex text-black items-center gap-1 border border-gray px-2 rounded-lg tex-xl '
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
      {selectedContact && (
        <ContactDetails contact={selectedContact} />
      )}
    </div>
  );
};

export default ContactList;
