const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    // email y password
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    // false --> no era contraseña invalida
    // null --> no se encuentra al usuario
    // { isValid, result }
    if (result) {
      const { nombre, correo, id, rol } = result.result;
      const user = { nombre, correo, id, rol };
      // console.log(user)
      const token = AuthServices.genToken(user);
      user.token = token;
      res.json({ ...user });
      console.log({ ...user })
    } else {
      res.status(400).json({ message: "Información inválida" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Email o contraseña inválida",
    });
  }
};

module.exports = {
  userLogin,
};
