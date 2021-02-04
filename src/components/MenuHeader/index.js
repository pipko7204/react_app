import {useState} from 'react';

import Menu from "./Menu";
import Nav from "./NavBar";

const MenuHeader = ({bgActiv}) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickHamburg = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <>
            <Menu isOpen={isOpen} onClickHamburg={handleClickHamburg}/>
            <Nav isOpen={isOpen} bgActive={bgActiv} onClickHamburg={handleClickHamburg}/>
        </>
    );
};

export default MenuHeader;