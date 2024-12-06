const register = (req, res) => {
    res.send("register");
    console.log("register");
};

const login = (req, res) => {
    res.send("login");
    console.log("login");
};

export { register, login };
