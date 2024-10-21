import loginUser from "../mockedServices";

const login = (username, password) => {
    try {
        return loginUser(username, password);
    }
    catch(e) {
        console.log("Login user FAILED", e);
    }
}

export default login;