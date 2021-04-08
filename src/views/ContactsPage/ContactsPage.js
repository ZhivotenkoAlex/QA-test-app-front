import { Link, useRouteMatch } from 'react-router-dom';
import s from './ContactsPage.module.css';
import ContactCard from '../ContactCard/ContactCard'
import imageAlex from "../../images/alex.jpg"
import imageDasha from "../../images/daria.jpg"


function ContactsPage() {


    return (
        <>
            <section className={s.team}>
                <h4 className={s.teamTitle}>Our team</h4>
                <hr className="teamLine" />

                <ul className={s.teamList}>
                    <li className={s.teamItem}>
                        <img src={imageAlex} alt="Alex" className={s.personPhoto} />

                        <div className="aboutPerson">
                            <p className={s.personName}>Alex Zhyvotenko</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>




                    <li className="teamItem">
                        <img src="./img/oleksii.jpg" alt="Olexii" className="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Olexii Fedorkan</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>

                    <li class="teamItem">
                        <img src="./img/ekaterina.jpg" alt="Ekaterina" class="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Ekaterina Kruichkovskaya</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className="teamItem">
                        <img src="./img/ivan.jpg" alt="Ivan" className="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Ivan Vitenko</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className="teamItem">
                        <img src="./img/taisia.jpg" alt="Taisiia" class="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Taisiia Morhunska</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className="teamItem">
                        <img src="./img/anton.jpg" alt="Anton" class="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Anton Lazurko</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li class="teamItem">
                        <img src={imageDasha} alt="Daria" class="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Dasha Voitekhovskaya</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li class="teamItem">
                        <img src="./img/fedir.jpg" alt="Fedir" className="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Fedir Havrylyak</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className="teamItem">
                        <img src="./img/oleksandr.jpg" alt="Oleksandr" className="personPhoto" />
                        <div className="aboutPerson">
                            <p className="personName">Oleksandr Bezvuglyak</p>
                            <p className="personPosition">Front-End Developer</p>
                            <p className="personText">Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                </ul>
            </section>


        </>

    )

}






export default ContactsPage;