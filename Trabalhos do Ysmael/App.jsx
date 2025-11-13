import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [entrada, setEntrada] = useState("");
  const [diario, setDiario] = useState([]);

  // Carrega o diário salvo no localStorage
  useEffect(() => {
    const salvo = localStorage.getItem("meuDiario");
    if (salvo) {
      setDiario(JSON.parse(salvo));
    }
  }, []);

  // Salva o diário sempre que muda
  useEffect(() => {
    localStorage.setItem("meuDiario", JSON.stringify(diario));
  }, [diario]);

  const adicionarEntrada = () => {
    if (entrada.trim() === "") return;
    const novaEntrada = {
      texto: entrada,
      data: new Date().toLocaleString("pt-BR"),
    };
    setDiario([novaEntrada, ...diario]);
    setEntrada("");
  };

  const limparDiario = () => {
    if (window.confirm("Tem certeza que quer apagar tudo?")) {
      setDiario([]);
      localStorage.removeItem("meuDiario");
    }
  };

  return (
    <div className="app">
      <h1> Meu Diário Digital</h1>

      <textarea
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Escreva seus pensamentos aqui..."
      />

      <div className="buttons">
        <button onClick={adicionarEntrada}>Salvar</button>
        <button onClick={limparDiario} className="delete">
          Limpar Tudo
        </button>
      </div>

      <div className="entries">
        {diario.length === 0 ? (
          <p className="empty">Nenhuma entrada ainda...</p>
        ) : (
          diario.map((item, index) => (
            <div key={index} className="entry">
              <small>{item.data}</small>
              <p>{item.texto}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
