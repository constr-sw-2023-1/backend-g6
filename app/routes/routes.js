const express = require('express');
const routes = express.Router();
const userController =  require ('../controller/userController')

routes.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

routes.post('/login', (req, res) => {
    console.log(req)
    userController.login(req, res).then(r => {
        res.send("Login realizado com sucesso!");
    });
})

module.exports = routes;

// const express = require('express');
// const axios = require('axios');
// const qs = require('qs');
// const app = express();
//
// const PORT = process.env.PORT || 3000;
//
// app.get('/', (req, res) => {
//     res.send('Bem-vindo à minha aplicação Node.js e Express!');
// });
//
// app.get('/login', (req, res) => {
//     const data = qs.stringify({
//         'grant_type': 'password',
//         'client_id': 'grupo06',
//         'client_secret': 'KDP40Ue5YHJQDFuSD8bfVCRqcus44nq8',
//         'username': 'douglas',
//         'password': '123456789'
//     });
//     const config = {
//         method: 'post',
//         url: 'http://localhost:8090/auth/realms/Grupo-06/protocol/openid-connect/token',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         data : data
//     };
//
//     axios(config)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//
// })
//
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });
//
// module.exports = app;
