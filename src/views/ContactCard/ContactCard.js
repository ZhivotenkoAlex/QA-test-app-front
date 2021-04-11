// import { Link, useRouteMatch } from 'react-router-dom';
import s from './ContactCard.module.css';
// import DevPhoto from '../../images/dev-photo.png';
import React, { Component } from 'react';
import Axios from 'axios';


class ContactCard extends Component {
    state = {
        descr: null,
        name: null,
        id: null,
        imgUrl: null,
        title: null,

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await Axios.get(
            `http://localhost:3000/books/`,
        );

        this.setState({ ...response.data });
    }

    render() {
        const { imgUrl, title, name, descr } = this.state;
        return (
            <>

                <img src={imgUrl} alt={name} className={s.personPhoto} />

                <div className={s.aboutPerson}>
                    //             <p className={s.personName}>{name}</p>
//             <p className={s.personPosition}>{title}</p>
//             <p className={s.personText}>{descr}</p>
//         </div>

            </>
        );
    }
}



export default ContactCard



// return (
//     <>
//         <img src={DevPhoto} alt="Alex" className={s.personPhoto} />
//         <div className={s.aboutPerson}>
//             <p className={s.personName}>Alex Zhyvotenko</p>
//             <p className={s.personPosition}>Front-End Developer</p>
//             <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
//             16th
//                     century.</p>
//         </div>
//     </>