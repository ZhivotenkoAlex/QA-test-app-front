import { Link, useRouteMatch } from 'react-router-dom';
import s from './ContactsPage.module.css';
import ContactCard from '../ContactCard/ContactCard'


function ContactsPage() {


    return (
        <ul className={s.devsList} >
            <ContactCard />
        </ul >)

}






export default ContactsPage;