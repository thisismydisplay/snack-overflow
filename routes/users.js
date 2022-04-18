const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser } = require("../auth");

const router = express.Router();

router.get("/register", csrfProtection, (req, res) => {
    const user = db.User.build();
    res.render("user-register", {
        title: "Register",
        user,
        csrfToken: req.csrfToken(),
    });
});

const userValidators = [
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for username")
        .isLength({ min: 3, max: 25 })
        .withMessage("Username must be between 3 and 25 characters long")
        .custom((value) => {
            return db.User.findOne({ where: { username: value } }).then(
                (user) => {
                    if (user) {
                        return Promise.reject(
                            "The provided username is already in use by another account"
                        );
                    }
                }
            );
        }),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Email Address")
        .isLength({ max: 100 })
        .withMessage("Your email address is too long. Get a better email.")
        .isEmail()
        .withMessage("Email Address is not a valid email")
        .custom((value) => {
            return db.User.findOne({ where: { email: value } }).then((user) => {
                if (user) {
                    return Promise.reject(
                        "The provided Email Address is already in use by another account"
                    );
                }
            });
        }),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Password")
        .isLength({ min: 8, max: 50 })
        .withMessage("Password must be between 8 and 50 characters long")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
        .withMessage(
            'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
        ),
    check("confirmPassword")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Confirm Password")
        .isLength({ min: 8, max: 50 })
        .withMessage("Password must be between 8 and 50 characters long")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Confirm Password does not match Password");
            }
            return true;
        }),
];

router.post(
    "/register",
    csrfProtection,
    userValidators,
    asyncHandler(async (req, res) => {
        const { email, username, password } = req.body;

        const user = db.User.build({
            email,
            username,
        });

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.hashedPassword = hashedPassword;
            await user.save();
            loginUser(req, res, user);
            res.redirect("/");
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render("user-register", {
                title: "Register",
                user,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

const loginValidators = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Email Address"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a value for Password"),
];

router.get("/login", csrfProtection, (req, res) => {
    res.render("user-login", {
        title: "Login",
        csrfToken: req.csrfToken(),
    });
});

router.post(
    "/login",
    csrfProtection,
    loginValidators,
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        let errors = [];
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {


            // Attempt to get the user by their email address.
            const user = await db.User.findOne({ where: { email } });

            if (user !== null) {
                // If the user exists then compare their password
                // to the provided password.
                const passwordMatch = await bcrypt.compare(
                    password,
                    user.hashedPassword.toString()
                );
                if (passwordMatch) {
                    // If the password hashes match, then login the user
                    // and redirect them to the default route.
                    loginUser(req, res, user);
                    return res.redirect("/");
                }
            }
            errors.push(
                "Login failed for the provided email address and password"
            );
        } else {
            errors = validatorErrors.array().map((error) => error.msg);
        }

        res.render("user-login", {
            title: "Login",
            email,
            errors,
            csrfToken: req.csrfToken(),
        });
    })
);

router.post(
    "/login/demo",
    asyncHandler(async (req, res) => {
        const user = { id: 1 }
        loginUser(req, res, user);
        return res.redirect("/");
    })
);



router.post("/logout", (req, res) => {
    logoutUser(req, res);
    res.redirect("/");
});

module.exports = router;
