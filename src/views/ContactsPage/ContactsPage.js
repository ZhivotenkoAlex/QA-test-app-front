import { Link, useRouteMatch } from 'react-router-dom';
import s from './ContactsPage.module.css';
import ContactCard from '../ContactCard/ContactCard'
import imageAlex from "../../images/alex.jpg"
import imageDasha from "../../images/daria.jpg"
import imageTasia from "../../images/taisia.jpg"
import imageOleksandr from "../../images/oleksandr.jpg"
import imageOleksii from "../../images/oleksii.jpg"
import imageLillia from "../../images/lilia.jpg"
import imageIvan from '../../images/ivan.jpg'
import imageFedir from "../../images/fedir.jpg"
import imageAnton from "../../images/anton.jpg"
import imageEkaterina from "../../images/ekaterina.jpg"


function ContactsPage() {


    return (
        <>
            <section className={s.team}>
                <h4 className={s.teamTitle}>Our team</h4>
                <hr className={s.teamLine} />

                <ul className={s.teamList}>
                    <li className={s.teamItem}>
                        <img src={imageAlex} alt="Alex" className={s.personPhoto} />

                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Alex Zhyvotenko</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>




                    <li className={s.teamItem}>
                        <img src={imageOleksii} alt="Olexii" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Olexii Fedorkan</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>

                    <li className={s.teamItem}>
                        <img src={imageEkaterina} alt="Ekaterina" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Ekaterina Kruichkovskaya</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageIvan} alt="Ivan" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Ivan Vitenko</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageTasia} alt="Taisiia" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Taisiia Morhunska</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageAnton} alt="Anton" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Anton Lazurko</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageDasha} alt="Daria" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Dasha Voitekhovskaya</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageFedir} alt="Fedir" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Fedir Havrylyak</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
                            16th
                    century.</p>
                        </div>
                    </li>
                    <li className={s.teamItem}>
                        <img src={imageOleksandr} alt="Oleksandr" className={s.personPhoto} />
                        <div className={s.aboutPerson}>
                            <p className={s.personName}>Oleksandr Bezvuglyak</p>
                            <p className={s.personPosition}>Front-End Developer</p>
                            <p className={s.personText}>Lorem Ipsum has been the standard "fish" for Latin texts since the early
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