app.put("/users", (request, response) => {

    const usuarioAtualizado = request.body;

    if (!usuarios.get(usuarioAtualizado.id)) {
        return response.status(404).send({ error: "Usuário não encontrado!" });
    }

    
    const emailEmUso = Array.from(usuarios.values())
        .some(u => u.email === usuarioAtualizado.email && u.id !== usuarioAtualizado.id);

    if (emailEmUso) {
        return response.status(400).send({ error: "E-mail já está em uso por outro usuário!" });
    }

    usuarios.set(usuarioAtualizado.id, usuarioAtualizado);

    return response.status(204).send();
});
