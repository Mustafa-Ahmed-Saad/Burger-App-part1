import React, { useState } from 'react';
import Button from '../../../components/Ui/Button';
import classes from './ContactData.module.css';

const ContactData = () => {
  const [customarData, setCustomarData] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  });
  return (
    <div className={classes.ContactData}>
      <h4>Enter Your Contact</h4>
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
        <input className={classes.Input} type="text" name="street" placeholder="Street" />
        <input className={classes.Input} type="text" name="postal" placeholder="Postal" />
        <Button btnType="Success">ORDER</Button>
      </form>
    </div>
  );
};

export default ContactData;
