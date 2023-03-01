import react from "react";
import { useCallback,useEffect,useState } from "react";

// DATA
import { wordsList } from "./data/Words";

// STYLES
import "./Styles/Global.css";
import "./Styles/App.css";

// COOMPONENTES
import StartScreen from "./Components/StartScreen.js";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver";
const stages =[
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
];

function App() {

  const [gameStates,setGameStates] = useState(stages[0].name)
  const [words] = useState(wordsList);


  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  

// Setando uma categoria aleatoria 

const setCategoria = () => {
// CATEGORIAS ALEATORIAS
  const categorias = Object.keys(words)
 const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]
// PALAVRAS ALEATORIAS
 const word = words[categoria][Math.floor(Math.random() * Object.keys(categoria).length)]


 return { word,categoria};
}

// INICIANDO MEU GAME
  const StartGame =() =>{

    setGameStates(stages[1].name);

    const{word,categoria} = setCategoria();
  

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());


console.log(word,categoria)
console.log(wordLetters)

    setPickedCategory(categoria);
    setPickedWord(word);
    setLetters(wordLetters);

  }

  // VERIFICAÇAO DO MEU INPUT
  const VerifyLetter =() =>{
    setGameStates(stages[2].name);
  }

  const Reiniciar =() =>{
    setGameStates(stages[0].name);
  }

  return (
    <div className="App">
        {gameStates === "start" && <StartScreen StartGame={StartGame} />};
        {gameStates === "game" && <Game  VerifyLetter={VerifyLetter}/>};
        {gameStates === "end" && <GameOver Reiniciar={Reiniciar }/>};
    </div>
  );
}

export default App;
