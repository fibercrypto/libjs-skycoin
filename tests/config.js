let host = process.env.HOST;
let port = process.env.PORT;
let user = {
    username: process.env.WEB_USERNAME,
    password: process.env.WEB_PASSWORD
};

let set_defaults = function () {
    if (host === undefined) {
        if (port === undefined) {
            port = 6420;
        }
        host = `http://localhost:${port}`;
    }

    if (user.username === undefined) {
        user.username = 'foobar';
    }

    if (user.password === undefined) {
        user.password = 'abcdef123';
    }
};

let set_exports = function () {
    exports.HOST = host;
    exports.PORT = port;
    exports.WEB_USERNAME = user.username;
    exports.WEB_PASSWORD = user.password;
};

set_defaults();

set_exports();
