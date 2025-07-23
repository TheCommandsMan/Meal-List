const meals = [
  "Bangers and mash",
  "Tacos",
  "Quesadillas",
  "Chicken and rice",
  "Hamburgers",
  "Pizza",
  "Pasta with chicken",
  "Chicken and potatoes",
  "Enchiladas",
  "Chicken and waffles",
  "Breakfast sandwiches",
  "Potstickers",
  "Sausage rolls",
  "Fried rice",
  "Philly cheesesteaks",
  "Korean beef bowl",
  "Karan chicken",
  "Pupusas",
  "Loaded hash browns",
  "Breakfast burritos",
  "Teriyaki chicken",
  "Nachos",
  "Beef bulgogi",
  "Garlic shrimp",
  "Chilaquiles",
  "Curry"
];

// Simple seeded PRNG
function seededRandom(seed) {
  let x = parseInt(seed, 10);
  x = (x ^ 0xdeadbeef) >>> 0;
  return () => {
    x = Math.imul(x ^ x >>> 15, 1 | x);
    x = x + (x << 3) | 0;
    return (x >>> 0) / 2**32;
  };
}

function generateMeals() {
  const code = document.getElementById("codeInput").value;
  if (!/^\d{6}$/.test(code)) {
    alert("Please enter a valid 6-digit code.");
    return;
  }

  const rand = seededRandom(code);
  const mealCopy = [...meals];
  const selected = [];

  for (let i = 0; i < 7 && mealCopy.length > 0; i++) {
    const index = Math.floor(rand() * mealCopy.length);
    selected.push(mealCopy.splice(index, 1)[0]);
  }

  const mealList = document.getElementById("mealList");
  mealList.innerHTML = "";
  selected.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal;
    mealList.appendChild(li);
  });
}