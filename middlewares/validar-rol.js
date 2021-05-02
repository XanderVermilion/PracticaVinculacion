const { response, request } = require("express");
const validarRol = (req = request, res = response, next) => {
    const rols = req.header.Usuario.findOne(rol);
    console.log(rols);
    if (rols != 'ADMIN_ROLE') {
        return res.status(400).json({
            msg: 'Usted no es administrador'
        });
    }
}
module.exports = {
    validarRol
}