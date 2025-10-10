app.put("/users", (request, response) => {

    const usuarioAtualizado = request.body;

    if (!usuarios.get(usuarioAtualizado.id)) {
        return response.status(404).send({ error: "Usuário não encontrado!" });
    }
    for (const usuario of usuarios.values()) {
        if (usuario.email === usuarioAtualizado.email && usuario.id !== usuarioAtualizado.id) {
            return response.status(400).send({ error: "E-mail já está em uso por outro usuário!" });
        }
    }

    usuarios.set(usuarioAtualizado.id, usuarioAtualizado);

    return response.status(204).send();
});
