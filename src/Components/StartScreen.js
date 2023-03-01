import "./StartScreen.css";

const GameStart = ({ StartGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={StartGame}>Começar jogo</button>
    </div>
  );
};

export default GameStart;