if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const multer = require("multer");
const path = require("path");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
const fs = require("fs");

const initialize = require("./passport-config");
let users = [
  { id: 1, username: "admin", password: "admin" },
  { id: 2, username: "user", password: "user" },
];
users = users.map((user) => {
  const hash = bcrypt.hashSync(
    user.password,
    parseInt(process.env.SALT_ROUNDS)
  );
  return { ...user, password: hash };
});
initialize(
  passport,
  (username) => users.find((user) => user.username === username),
  (id) => users.find((user) => user.id === id)
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(methodOverride("_method"));

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    let user = users.find((user) => user.username === username);

    if (!user) {
      return done(null, false);
    }

    // Sprawdź hasło
    bcrypt.compare(password, user.password, function (err, res) {
      if (err) return done(err);
      if (res === false) return done(null, false);
      return done(null, user);
    });
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/sponsorzy/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/zarzad/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2 });

app.get("/check", (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated() });
});
app.get("/fail", (req, res) => {
  res.send(false);
});
app.get("/pass", (req, res) => {
  res.send(true);
});
app.get("/ch", (req, res) => {
  res.json(req.session);
});
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.redirect("/login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/pass",
    failureRedirect: "/fail",
    failureFlash: true,
  })
);

app.delete("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/posts", (req, res) => {
  fs.readFile("./content/news.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while reading the file.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});
app.put("/posts", (req, res) => {
  const configData = req.body;
  console.log(configData);
  fs.writeFile(
    "./content/news.json",
    JSON.stringify(configData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.get("/osiagniecia", (req, res) => {
  fs.readFile("./content/osiagniecia.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while reading the file.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.put("/osiagniecia", (req, res) => {
  const configData = req.body;
  console.log(configData);
  fs.writeFile(
    "./content/osiagniecia.json",
    JSON.stringify(configData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.get("/zarzad", (req, res) => {
  fs.readFile("./content/zarzad.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while reading the file.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.put("/zarzad", (req, res) => {
  const configData = req.body;
  console.log(configData);
  fs.writeFile(
    "./content/zarzad.json",
    JSON.stringify(configData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.get("/sponsorzy", (req, res) => {
  fs.readFile("./content/sponsor.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while reading the file.");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.put("/sponsorzy", (req, res) => {
  const configData = req.body;
  console.log(configData);
  fs.writeFile(
    "./content/sponsor.json",
    JSON.stringify(configData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.put("/zarzad", (req, res) => {
  const configData = req.body;
  console.log(configData);
  fs.writeFile(
    "./content/zarzad.json",
    JSON.stringify(configData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("An error occurred while writing to the file.");
      } else {
        res.status(200).send("Data successfully written to file.");
      }
    }
  );
});

app.post("/upload", upload.single("file"), function (req, res, next) {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Zwróć ścieżkę do pliku
  res.send(req.file.path);
});

app.post("/uploadzarzad", upload2.single("file"), function (req, res, next) {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  // Zwróć ścieżkę do pliku
  res.send(req.file.path);
});

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
app.listen(3300, () => console.log("Server running on port 3300!"));
