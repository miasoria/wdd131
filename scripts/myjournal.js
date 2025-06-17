document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("journalForm");
  const saveMessage = document.getElementById("saveMessage");

  const savedEntry = JSON.parse(localStorage.getItem("journalEntry"));
  if (savedEntry) {
    document.getElementById("name").value = savedEntry.name;
    document.getElementById("mood").value = savedEntry.mood;
    document.getElementById("entry").value = savedEntry.entry;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const entryData = {
      name: document.getElementById("name").value.trim(),
      mood: document.getElementById("mood").value,
      entry: document.getElementById("entry").value.trim(),
    };

    localStorage.setItem("journalEntry", JSON.stringify(entryData));

    saveMessage.textContent = "✨ Entry saved successfully!";
    setTimeout(() => {
      saveMessage.textContent = "";
    }, 3000);
  });
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;