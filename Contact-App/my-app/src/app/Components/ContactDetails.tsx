import React from 'react';
import Image from 'next/image';
import developer from "../../../public/developer.png"
const ContactDetails = ({ contact }:any) => {
  return (
    <div>
      <h2 className='font-bold'>Contact Details</h2>
      <Image src={developer} alt="profile" width={100} height={100} className='rounded-full'/>
      {/* <p>Profile: {contact.}</p> */}
      
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

    </div>
  );
};

export default ContactDetails;