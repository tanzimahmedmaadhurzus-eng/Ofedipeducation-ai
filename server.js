const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🧪 Chemistry AI Running 🚀");
});

app.post("/chemistry", (req, res) => {
  const q = req.body.question.toLowerCase();
  let answer = "";

  if (q.includes("chloride")) {
    answer = "Chloride (Cl⁻): AgNO3 → white ppt (AgCl)";
  }
  else if (q.includes("sulphate")) {
    answer = "Sulphate (SO₄²⁻): BaCl2 → white ppt (BaSO4)";
  }
  else if (q.includes("carbonate")) {
    answer = "Carbonate: acid → CO2 gas";
  }
  else if (q.includes("ammonium")) {
    answer = "Ammonium: NaOH → NH3 gas";
  }
  else {
    answer = "Ask chloride, sulphate, carbonate, ammonium";
  }

  res.json({ answer });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running on port " + PORT));
