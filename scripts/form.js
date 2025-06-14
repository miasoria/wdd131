const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const modSpan = document.getElementById("lastModified");
if (modSpan) {
  modSpan.textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
  ];
  const select = document.getElementById("productSelect");
  if (select) {
    products.forEach(p => {
      const option = document.createElement("option");
      option.value = p.id;
      option.textContent = p.name;
      select.appendChild(option);
    });
  }

  const rvProduct = document.getElementById("rvProduct");
  if (rvProduct) {
    const params = new URLSearchParams(window.location.search);

    document.getElementById("rvProduct").textContent = params.get("product") || "(none)";
    document.getElementById("rvRating").textContent = params.get("rating") || "(none)";
    document.getElementById("rvDate").textContent = params.get("date") || "(none)";
    document.getElementById("rvFeatures").textContent = params.getAll("features").join(", ") || "(none)";
    document.getElementById("rvComments").textContent = params.get("comments") || "(no review)";
    document.getElementById("rvUser").textContent = params.get("username") || "(anonymous)";

    let count = Number(localStorage.getItem("reviews")) || 0;
    count++;
    localStorage.setItem("reviews", count);
    document.getElementById("counter").textContent = `Reviews submitted: ${count}`;
  }
});