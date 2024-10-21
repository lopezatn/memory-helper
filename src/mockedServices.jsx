const loginUser = (username, password) => {
    if (username === "admin" && password === "admin") {
        return { username, name: "Duck" };
    } else {
        return undefined;
    }
};

export default loginUser;