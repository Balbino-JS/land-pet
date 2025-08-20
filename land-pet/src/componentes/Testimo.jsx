import { useState } from "react";

function Testimony() {
  const users = [
    {
      id: "55sd4fg54dfsg",
      name: "Juliano",
      testimony: "klsdajifdsaljlkfn",
    },
    {
      id: "55g4fds5g45f",
      name: "Mayara",
      testimony: "kkanlgknfslavioijakldm sddioajv",
    },
    {
      di: "8g15fds1g3fd1",
      name: "Flavia",
      testimony: "ksdadnlknafgjçalmvkla",
    },
  ];

  return (
    <div className="testimony-container">
      <form>
        <h1>Avaliações de nossos clientes</h1>
        <input type="text" name="nome" placeholder="Digite seu nome" />
        <input
          type="text"
          name="testimonials"
          placeholder="Deixe sua mensagem"
        />
        <button type="submit">Enviar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Depoimento: {user.testimony}</p>
          </div>
          <button onClick={() => handleDelete(user.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Testimony;
