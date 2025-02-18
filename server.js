const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const {
  print_item,
  make_search_url,
  print_date,
  print_category,
  print_username,
  print_size,
  print_magnet_button,
} = require("./helper");
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;
// Set the view engine to EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Security headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'"], // Allows inline scripts (modify if needed)
      imgSrc: ["'self'", "https://torrindex.net", "data:"], // Allows external images
      styleSrc: ["'self'", "'unsafe-inline'"], // Allows inline styles
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"], // Blocks Flash & plugins
      upgradeInsecureRequests: [], // Forces HTTPS
    },
  })
);
// Compression
app.use(compression());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", async (req, res) => {
  const q = req.query.q || "";
  const page = parseInt(req.query.page, 10) || 1;
  const cat = req.query.cat || "";
  const isAjax = req.xhr || req.headers.accept.indexOf("json") > -1;

  try {
    const url = `https://apibay.org/q.php?q=${encodeURIComponent(
      q
    )}&cat=${cat}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("API request failed");
    }

    if (isAjax) {
      res.json({
        data,
        html: data.map((item) => print_item(item)).join(""),
        hasMore: data.length >= 100,
        page,
      });
    } else {
      res.render("search", {
        data,
        message: `Search results for: ${q}`,
        count: data.length,
        print_item,
        make_search_url,
        page,
        q,
        cat,
      });
    }
  } catch (error) {
    console.error("Search error:", error);
    if (isAjax) {
      res.status(500).json({ error: "Failed to fetch search results" });
    } else {
      res.status(500).render("error", {
        message: "Failed to fetch search results",
        error: process.env.NODE_ENV === "development" ? error : {},
      });
    }
  }
});

app.get("/details/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const [descriptionRes, filesRes] = await Promise.all([
      fetch(`https://apibay.org/t.php?id=${id}`),
      fetch(`https://apibay.org/f.php?id=${id}`),
    ]);

    const [description, files] = await Promise.all([
      descriptionRes.json(),
      filesRes.json(),
    ]);

    if (!descriptionRes.ok || !filesRes.ok) {
      throw new Error("API request failed");
    }

    res.render("details", {
      description,
      files,
      print_date,
      print_size,
      print_category,
      print_username,
      print_magnet_button,
    });
  } catch (error) {
    console.error("Details error:", error);
    res.status(500).render("error", {
      message: "Failed to fetch torrent details",
      error: process.env.NODE_ENV === "development" ? error : {},
    });
  }
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
