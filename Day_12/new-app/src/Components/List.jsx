function List(){
    const fruits=["apple","mango","guava"]
    return(
        <>
        <ul>
            {fruits.map((fruit)=>(<p>{fruit}</p>))}
        </ul>
        </>
    )
}
export default List;