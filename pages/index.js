import React, { useState } from 'react'; // get the React object from the react module

function Home() {
    return (
        <div>
            <h2>HOME</h2>
            <Contador />
        </div>
    )
}


function Contador() {
    const [contador, setContador] = useState(1);
    
    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>add</button>
        </div>
    )
}

export default Home
