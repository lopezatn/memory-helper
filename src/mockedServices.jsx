const loginUser = (username, password) => {
    if (username === "admin" && password === "admin") {
        return { username: "Duck" };
    }
    if (username !== "admin") {
        throw Error("The user doesn't exist");
    }
    if (password !== "admin") {
        throw Error("Password is not correct");
    }
    
    throw Error("Error login user");
};

export default loginUser;