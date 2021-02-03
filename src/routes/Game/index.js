
const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app')
    }
    return (
        <>
        <div>
            This is Game Page!
        </div>
            <button onClick={handleClick}>
                Back button
            </button>
        </>
    );
}

export default GamePage;