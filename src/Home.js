import { useState } from "react";

const Home = () => {
    // let name='mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(23);

    const handleClick = ()=> {
        setName('Laila')
        setAge(24)

    }



    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;