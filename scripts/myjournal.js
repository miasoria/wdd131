document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("journalForm");
  const saveMessage = document.getElementById("saveMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const mood = document.getElementById("mood").value.trim();
    const entry = document.getElementById("entry").value.trim();

    if (!name || !mood || !entry) {
      alert("Please complete all fields before saving..");
      return;
    }

    const entryData = {
      name,
      mood,
      entry,
      date: new Date().toLocaleString(),
    };

    let journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    journalEntries.push(entryData);
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));

    saveMessage.textContent = `✨ ${name}'s entry was saved successfully!`;
    form.reset();
  });

  const lastModified = document.getElementById("lastModified");
  const currentYear = document.getElementById("currentyear");

  if (lastModified) {
    lastModified.textContent = `Última modificación: ${document.lastModified}`;
  }

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});