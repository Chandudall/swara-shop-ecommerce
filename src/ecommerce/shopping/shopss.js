import React,{useState} from "react";
import veena4 from '../images/veena 4.jpg';
import veena5 from '../images/veena 5.jpg';
import veena8 from '../images/veena 8.jpg';
import veena10 from '../images/veena10.jpg';
import veena11 from '../images/veena11.png';
import './shopss.css';
import { redirect } from "react-router-dom";

const shopObject=[
    {name:'mrudhanga',price:'$10',description:'The Mridangam is a traditional South Indian double-headed drum. It is one of the most important and widely used percussion instruments in Carnatic music, a classical music tradition of South India.'},
    {name:'saraswati',price:'$11',description:'The Saraswati Veena is one of the most well-known and widely used Veenas in India, particularly in the South Indian classical music tradition, known as Carnatic music.'},
    {name:'Rudra',price:'$15',description:'The Rudra Veena is one of the oldest known types of Veena and is used in both Hindustani and Carnatic classical music.'},
    {name:'vichitra',price:'$25', description:'It is commonly used in North Indian classical music and is known for its ethereal and melodious tone.'},
    {name:'chitravina',price:'$11',description:'The Gottuvadhyam is often played in vocal accompaniment and solo performances.'}
]

function HandleShop() {
    const [cart, setCart] = useState([]);
    const [description,setdescription]=useState("")
    
    const addToCart = (product) => {
        setCart([...cart, product]);

    };
    
    const renderProducts = () => {
        return shopObject.map((product, index) => (
            <div key={index} id='images'>
                {product.name === 'mrudhanga' && <img src={veena4} alt={product.name}/>}
                {product.name === 'saraswati' && <img src={veena5} alt={product.name} />}
                {product.name === 'Rudra' && <img src={veena8} alt={product.name} />}
                {product.name === 'vichitra' && <img src={veena10} alt={product.name} />}
                {product.name === 'chitravina' && <img src={veena11} alt={product.name} />} {/* Use the correct image path here */}
                <h3>{product.name}</h3>
                <p style={{Color:'red'}}>{product.price}</p>
                <p style={{fontFamily:'Italian', fontSize:15}}>{product.description}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        ));
    };

    return (
        <div className="Shopping">
            {renderProducts()} {/* Corrected the rendering of the products */}
        </div>
    );
}
export default HandleShop;