const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const { sessionSecret, environment } = require("./config");
const { restoreUser } = require("./auth");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const questionsRouter = require("./routes/questions");
const answersRouter = require("./routes/answers")
const searchRouter = require("./routes/search");

const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cookieParser(sessionSecret));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
    session({
        name: "snack-overflow-tracker.sid",
        secret: sessionSecret,
        store,
        saveUninitialized: false,
        resave: false,
    })
);
app.use(restoreUser);
// create Session table if it doesn't already exist
store.sync();

app.use("/", questionsRouter);
app.use("/users", usersRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    // res.send("test");
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
