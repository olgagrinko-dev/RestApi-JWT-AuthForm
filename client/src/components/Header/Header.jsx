import style from './header.module.scss';

function Header() {
    return (
        <div className={style.header}>
            <p>Sign In</p>
            <p>Sign Up</p>
        </div>
    )
}

export default Header;