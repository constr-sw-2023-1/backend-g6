const User = require('../models/user');
const axios = require('axios')
const qs = require('qs');

const userController = {};

userController.login = async (req, res) => {
    try {
        const data = qs.stringify({
        'grant_type': 'password',
        'client_id': 'grupo06',
        'client_secret': 'KDP40Ue5YHJQDFuSD8bfVCRqcus44nq8',
        'username': 'douglas',
        'password': '123456789'
    });
    const config = {
        method: 'post',
        url: 'http://localhost:8090/auth/realms/Grupo-06/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios(config)
        .then(function (response) {
            User.acessToken.value = response.data.access_token
            console.log(User);
        })
        .catch(function (error) {
            return error;
        });
    } catch (error) {
        console.warn("error")
    }
}

// userController.getAllUsers = async (req, res) => {
//     try {
//         const users = await User.findAll();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
//
// userController.getUserById = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
//
// userController.addUser = async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
//
// userController.updateUser = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }
//         await user.update(req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
//
// userController.deleteUser = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }
//         await user.destroy();
//         res.status(200).json({ message: 'Usuário excluído com sucesso' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports = userController;
