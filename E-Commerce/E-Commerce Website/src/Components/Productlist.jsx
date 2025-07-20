import { Products } from '../Data/Products';
import { useState, useContext } from "react";
import Productcard from './Productcard';
import { CartContext } from './CartContext';
export default function Productlist(){
    const [product,setProduct]=useState(Products);
    const [genre,setGenre]=useState("");
    const [searchvalue,setSearchvalue]=useState("");
    const { addToCart } = useContext(CartContext);
    function handleSearch(){
        const search=searchvalue.toLowerCase();
        const filteredproducts=Products.filter(pros=>{
            return pros.Name.toLowerCase().includes(search)|| pros.Author.toLowerCase().includes(search) || pros.Genre.toLowerCase().includes(search)
        });
        setProduct(filteredproducts);
    }
    return(
        <>
        <div className='search-bar'>
            <input className="search-input" type="text" onChange={(e)=>{setSearchvalue(e.target.value)}} placeholder="Search..." onKeyDown={(e)=>{if (e.key==="Enter"){handleSearch();}}}></input>
            <button className="btn-search" onClick={handleSearch}>Search</button>
        </div>
        <div className='books'>
            {product.map((pro) => (
                <Productcard key={pro.id} product={pro} onAddtoCart={addToCart} />
            ))}
        </div>
        </>
    )
}