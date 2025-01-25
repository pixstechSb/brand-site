import React from 'react';
import '../style.css';

interface ContactInfoProps {
    email: string;
    phone: string;
    address: string;
  }
export const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone, address }) => {
  return (
    <div className={"contactInfoWrapper"}>
      <div className={"contactInfoHeader"}>
        <div className={"contactTitle"}>Contact Information</div>
        <div className={"contactDescription"}>
          It is a long established fact that a reader will be distracted
          by the readable content
        </div>
      </div>
      <div className={"contactDetails"}>
        <div>{email}</div>
        <div className={"contactAddress"}>
          <div>{phone}</div>
          <div className={"contact-addressText"}>{address}</div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;