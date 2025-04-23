// Middleware de tratamento de erros globais
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Exibe o erro no terminal para debug
    res.status(500).json({ error: "Ocorreu um erro no servidor" }); // Retorna erro genérico ao cliente
};
