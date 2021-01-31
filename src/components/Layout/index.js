import s from './style.module.css';

const Layut = (props) => {
    const styleRoot = props.hideBackground ? { backgroundImage: 'none', backgroundColor: 'pink'} : {};
    return (
    <section className={s.root} style={styleRoot} id={props.id}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title} >
                    <h3>
                        {props.title}
                    </h3>
                    <span className={s.separator}></span>
                </div>
                <div className={s.desc.full}>
                    <p>
                        {props.descr}
                    </p>
                </div>
            </article>
        </div>
    </section>
    )
}

export default Layut

