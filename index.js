const container = document.getElementById("app");

function Votacao(props) {

    // let contador = 0;
    const [contador, setContador] = React.useState(0);

    function votarMenos() {
        setContador(contador - 1);
        console.log(contador);
    }

    function votarMais() {
        setContador(contador + 1);
        console.log(contador);
    }

    function votarDez(){
        setContador(contador+10);
        console.log(contador);
    }

    return (
        <div>
            <h3>{props.titulo}</h3>
            Votos: {contador} <br></br>
            {/* <button onclick="funcao()">Votar</button> */}
            <button onClick={votarMenos}>-</button>
            <button onClick={votarMais}>+</button>
            <button onClick={votarDez}>+10</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Votacao titulo="Lua nova"/>
            <Votacao titulo="Dois filhos de Francisco"/>
            <Votacao titulo="The batman"/>
            <Votacao titulo="Joker"/>

        </div>
        
    );
}

ReactDOM.render(App(), container);