const csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
    handler(req, res, next).catch(next);

const checkPermissions = (resource, currentUser) => {
    if (resource.userId !== currentUser.id) {
        const err = new Error("Illegal operation.");
        err.status = 403;
        throw err;
    }
};

module.exports = {
    csrfProtection,
    asyncHandler,
    checkPermissions
};
