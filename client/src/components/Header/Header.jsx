import { Link } from 'react-router-dom';
import style from './header.module.scss';

function Header() {
    return (
        <div className={style.header}>
            <p>< Link to = {'/'}> Sign In </Link></p>
            <p>< Link to = {'/reg'}> Sign Up </Link></p>
        </div>
    )
}

export default Header;