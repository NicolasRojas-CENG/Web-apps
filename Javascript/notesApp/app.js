//Add button
const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
let past = -1;

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}
//To create a new note.
addBtn.addEventListener("click", () => {
  addNewNote();
});
//To make the new note.
function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  let colour = Math.floor(Math.random() * 4);
  while (colour === past) {
    colour = Math.floor(Math.random() * 4);
  }
  past = colour;
  //To get notes of 4 different colours.
  switch (colour) {
    case 0:
      note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit_button"><i class="fas fa-edit"></i></button>
                <button class="delete_button"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${
              text ? "hidden" : ""
            }" placeholder="Enter Note."></textarea>
        </div>`;
      break;
    case 1:
      note.innerHTML = `
        <div class="notes">
            <div class="tools" style="background-color:rgb(155, 152, 23);">
                <button class="edit_button"><i class="fas fa-edit"></i></button>
                <button class="delete_button"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div style="color:#57561A;" class="main ${
              text ? "" : "hidden"
            }"></div>
            <textarea style="color:#57561A;" class="${
              text ? "hidden" : ""
            }" placeholder="Enter Note."></textarea>
        </div>`;
      note.style.background = "rgb(245, 241, 28)";
      break;
    case 2:
      note.innerHTML = `
        <div class="notes">
            <div class="tools" style="background-color:rgb(165, 52, 52);">
                <button class="edit_button"><i class="fas fa-edit"></i></button>
                <button class="delete_button"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div style="color:#571A1A;" class="main ${
              text ? "" : "hidden"
            }"></div>
            <textarea style="color:#571A1A;" class="${
              text ? "hidden" : ""
            }" placeholder="Enter Note."></textarea>
        </div>`;
      note.style.background = "rgb(214, 64, 64)";
      break;
    case 3:
      note.innerHTML = `
        <div class="notes">
            <div class="tools" style="background-color:rgb(44, 61, 160);">
                <button class="edit_button"><i class="fas fa-edit"></i></button>
                <button class="delete_button"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div style="color:#1A2357;" class="main ${
              text ? "" : "hidden"
            }"></div>
            <textarea style="color:#1A2357;" class="${
              text ? "hidden" : ""
            }" placeholder="Enter Note."></textarea>
        </div>`;
      note.style.background = "rgb(61, 88, 240)";
      break;
  }

  const edit_button = note.querySelector(".edit_button");
  const delete_button = note.querySelector(".delete_button");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  edit_button.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  delete_button.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}
//To update the localStorage.
function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
