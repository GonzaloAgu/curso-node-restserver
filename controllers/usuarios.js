const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const {q = 'empty message', apodo = 'no nickname'} = req.query;

    res.status(403).json({
        msg: 'get API - controlador',
        q,
        apodo
    });
};

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.status(403).json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.status(403).json({
        msg: 'post API',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.status(403).json({
        msg: 'delete API'
    });
}

const usuariosPatch = (req, res) => {
    res.status(403).json({
        msg: 'patch API'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}