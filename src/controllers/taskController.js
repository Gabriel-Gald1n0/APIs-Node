const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

exports.createTask = async (req, res) => {
    const { title } = req.body;

    try {
        const task = await prismaClient.task.create({
            data: {
                title,
                userId: req.user.id
            }
        });

        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao criar tarefa!', error: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await prismaClient.task.findMany({
            where: { userId: req.user.id }
        });

        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar tarefas!', error: err.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await prismaClient.task.update({
            where: { id: parseInt(req.params.id) },
            data: req.body,
        });

        res.json(task);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao atualizar tarefa!', error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await prismaClient.task.delete({
            where: { id: parseInt(req.params.id) },
        });

        res.json({ message: 'Tarefa deletada com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao deletar tarefa!', error: err.message });
    }
};
