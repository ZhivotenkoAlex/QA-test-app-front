import { Link, useRouteMatch } from 'react-router-dom';
import s from './ContactCard.module.css';
import DevPhoto from '../../images/dev-photo.png';



function ContactCard() {


    return (
        <li>

            <img src={DevPhoto} alt="Developer photo" />
            <h3>Name</h3>
            <p>Front-End Developer</p>

            <p>Lorem Ipsum has been the standard "fish" for Latin texts since the early 16th century.</p>


        </li>
    )

}


export default ContactCard