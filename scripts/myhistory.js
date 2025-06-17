document.addEventListener("DOMContentLoaded", () => {
  const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  const entryList = document.getElementById("entryList");

  if (entries.length === 0) {
    entryList.innerHTML = "<p>No journal entries found. Start writing today!</p>";
    return;
  }

  entries.forEach((entry, index) => {
    const card = document.createElement("div");
    card.classList.add("entry-card");

    card.innerHTML = `
      <h3>Entry #${index + 1} - ${entry.date}</h3>
      <p><strong>Name:</strong> ${entry.name}</p>
      <p><strong>Mood:</strong> ${entry.mood}</p>
      <p><strong>Reflection:</strong><br>${entry.entry}</p>
    `;

    entryList.appendChild(card);
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});