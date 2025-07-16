function Header({title}){
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps={
    title:"Welcome to my app",
}
export default Header