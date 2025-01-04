const prisma = require('@prisma/client').PrismaClient;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prismaClient = new prisma();

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar se o usuário já existe
        const existingUser = await prismaClient.user.findUnique({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe!' });
        }

        // Gerar o hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar o usuário com a senha criptografada
        const user = await prismaClient.user.create({
            data: { username, password: hashedPassword }
        });

        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (err) {
        console.error('Erro ao registrar usuário:', err.message);
        res.status(500).json({ message: 'Erro ao registrar usuário!', error: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar se o usuário existe no banco
        const user = await prismaClient.user.findUnique({ where: { username } });
        if (!user) {
            console.log('Usuário não encontrado!');
            return res.status(404).json({ message: 'Usuário não encontrado!' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log('Senha incorreta!');
            return res.status(401).json({ message: 'Senha incorreta!' });
        }

        // Gerar o token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao fazer login:', err.message);
        res.status(500).json({ message: 'Erro ao fazer login!', error: err.message });
    }
};
