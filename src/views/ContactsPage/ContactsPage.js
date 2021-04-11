// import { Link, useRouteMatch } from 'react-router-dom';
import React, { Component } from 'react';
import s from './ContactsPage.module.css';
import ContactCard from '../ContactCard/ContactCard'
import Axios from 'axios';

// import * as membersAPI from '../../services/members-api';



class ContactsPage extends Component {
    state = {
        members: [],
    };

    async componentDidMount() {
        const response = await Axios.get('http://localhost:3000/contacts');

        this.setState({ members: response.data });
    }

    render() {
        return (
            <section className={s.team}>
                <h4 className={s.teamTitle}>Our team</h4>
                <hr className={s.teamLine} />



                <ul className={s.teamList}>


                    {this.state.members.map(({ id, name, title, imageUrl, descr }) => (
                        <li key={id}>
                            <ContactCard

                                name={name}
                                title={title}
                                imageUrl={imageUrl}
                                descr={descr} />
                        </li>
                    ))}



                </ul>
            </section>

        );
    }
}


export default ContactsPage




{/* // export default function ContactsPage() { */ }



// return (
//             <>
//         <section className={s.team}>
//             <h4 className={s.teamTitle}>Our team</h4>
//             <hr className={s.teamLine} />
//             <ul className={s.teamList}>


//                 {members.map(

//                     ({ name, title, imageUrl, descr }) => {
//                         return (
//                             <li key={id}
//                                 className={s.teamItem}


//                             >

//                                 <ContactCard
// name={name}
// title={title}
// imageUrl={imageUrl}
// descr={descr}
//                                 />
//                             </li>
//                         )
//                     }
//                 )}
{/* <li className={s.teamItem}>
                        <img src={imageAlex} alt="Alex" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Alex Zhyvotenko</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li> */}

            //     </ul>
            // </section>




