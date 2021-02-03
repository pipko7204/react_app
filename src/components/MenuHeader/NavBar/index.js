import s from './style.module.css';

const Nav = () => {
    return (
        <>
            <nav id="navbar">
                <div className={s.navWrapper}>
                    <p className={s.brand}>
                        LOGO
                    </p>
                    <a className={[s.menuButton] [s.active]}>
                        <span/>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;