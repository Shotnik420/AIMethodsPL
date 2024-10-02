if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const multer = require("multer");
const path = require("path");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const https = require("https");
const http = require("http");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const cors = require("cors");
const fs = require("fs");

const initialize = require("./passport-config");

var user = process.env.USER;
var admin = process.env.ADMIN;

var users = [user, admin];
users = users.map((acc) => {
  var pass = "";
  if (acc == "user") {
    pass = process.env.USERPASS;
  } else if (acc == "admin") {
    pass = process.env.ADMINPASS;
  }
  const hash = bcrypt.hashSync(pass, parseInt(process.env.SALT_ROUNDS));
  return { username: user, password: hash };
});
initialize(
  passport,
  (username) => users.find((user) => user.username === username),
  (id) => users.find((user) => user.id === id)
);

const privateKey = fs.readFileSync(
  path.join(__dirname, "ssl", "private.key"),
  "utf8"
);
const certificate = fs.readFileSync(
  path.join(__dirname, "ssl", "certificate.crt"),
  "utf8"
);
const caBundle = fs.readFileSync(
  path.join(__dirname, "ssl", "ca_bundle.crt"),
  "utf8"
);

const credentials = { key: privateKey, cert: certificate, ca: caBundle };

app.use(
  cors({
    origin: "https://aimeth.netlify.app",
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
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
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

passport.serializeUser(function (user, done) {
  // Here you specify what to store in the session. Typically, the user ID is stored.
  done(null, user.username); // You can choose to store the username or any unique identifier.
});

passport.deserializeUser(function (username, done) {
  // This function takes the stored session data (e.g., username) and reconstructs the user object
  const user = users.find((user) => user.username === username);
  if (user) {
    done(null, user);
  } else {
    done(new Error("User not found"));
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../aimeth/public/sponsorzy/");
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
    cb(null, "../aimeth//public/zarzad/");
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
  console.log("fail");
  res.send(false);
});
app.get("/pass", (req, res) => {
  console.log("true");
  res.send(true);
});
app.get("/ch", (req, res) => {
  res.json(req.session);
});
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.send("Login page");
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
  });
});

app.get("/posts", (req, res) => {
  fs.readFile("./content/news.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error podczas odczytywania pliku");
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
        res.status(500).send("Error podczas zapisywania pliku");
      } else {
        res.status(200).send("Udało się! Dane zostały zapisane");
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
    console.error("No file uploaded.");
    return res.status(400).send("No file uploaded.");
  }
  const relativePath = `/zarzad/${req.file.filename}`;
  console.log(`File uploaded successfully: ${relativePath}`);
  res.send(relativePath);
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
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => console.log("HTTPS Server running on port 443!"));
const httpServer = http.createServer(app);
httpServer.listen(80, () => console.log("HTTP Server running on port 80!"));
