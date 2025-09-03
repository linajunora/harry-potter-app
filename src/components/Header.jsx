function Header(props) {
    return (
        <header>
            <h1>Harry Potter App</h1>
            <button onClick={props.onToggleDarkMode}>
                {props.darkMode ? 'Light mode' : 'Dark mode'}
            </button>
        </header>
    );
}

export default Header