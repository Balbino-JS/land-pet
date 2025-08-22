import { useEffect, useState } from "react";
import "../CSS/App.css"
import "../CSS/Testimo.css";
import api from "../services/Api";

function Testimony() {
  const [users, setUsers] = useState([]);
  const [nome, setNome] = useState("");
  const [depoimento, setDepoimento] = useState("");

  // Buscar usuários
  async function getUsers() {
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
    }
  }

  // Enviar novo depoimento
  async function handleSubmit(e) {
    e.preventDefault();
    if (!nome || !depoimento) return alert("Preencha todos os campos!");

    try {
      await api.post("/usuarios", {
        name: nome,
        testimony: depoimento,
      });
      setNome("");
      setDepoimento("");
      getUsers(); // atualiza a lista
    } catch (error) {
      console.error("Erro ao enviar depoimento", error);
    }
  }

  // Deletar depoimento
  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir?")) return;

    try {
      await api.delete(`/usuarios/${id}`);
      getUsers(); // atualiza a lista após excluir
    } catch (error) {
      console.error("Erro ao excluir depoimento", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="testimony-container">
      <form onSubmit={handleSubmit}>
        <h1 className="testimony-text">Avaliações de nossos clientes</h1>
        <input type="text" name="nome" placeholder="Digite seu nome" value={nome}
          onChange={(e) => setNome(e.target.value)} />
        <textarea
          type="text"
          name="testimonials"
          placeholder="Deixe sua mensagem" 
          value={depoimento}
          onChange={(e) => setDepoimento(e.target.value)}
        />
        <button type="submit" onClick={'Sua nebsagem foi enviada com sucesso'}>Enviar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Depoimento: <span>{user.testimony}</span>
            </p>
          </div>
          <button className="fa" onClick={() => handleDelete(user.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Testimony;
