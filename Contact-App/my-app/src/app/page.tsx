"use client"
import React from 'react';
import {IoMdContact} from 'react-icons/io'
// import Contactlist from './components/ContactList';
import ContactList from './Components/ContactList';
import ContactDetails from './Components/ContactDetails';
import contactsData from './Components/ContactData';

const HomePage = () => {
  return (
    <div>
    <div className='flex justify-between items-center pt-5 pb-5 bg-purple-500'>
      <h1 className='text-2xl font-bold pl-10'>Contact List App</h1>
      <div className='pr-40'>
      <IoMdContact size={40} />
      </div>
    </div>
    <div className='pt-5'>
       <ContactList contacts={contactsData} />
    </div>
    </div>
  );
};

export default HomePage;