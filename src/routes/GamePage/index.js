
import Game from "../../components/Game";

const GamePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page)
    }
    return (
        <>
        <Game onClickButton={handleClickButton}/>
        </>
    );
}

export default GamePage;