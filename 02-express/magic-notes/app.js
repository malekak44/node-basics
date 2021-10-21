const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addTitle = document.getElementById("addTitle");
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addText.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTitle.value = "";
  addText.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((elem, index) => {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;height: 180px;margin-bottom: 20px !important;">
              <div class="card-body">
                  <h5 class="card-title">${elem.title}</h5>
                  <p class="card-text"> ${elem.text}</p>
                  <button id='${index}' onclick='deleteNote(this.id)' class='btn deleteBtn'>Delete</button>
              </div>
            </div>`;
  });
  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = '<h1 style="color:#e48c8b;margin-left:10%;">Nothing to show! Use the AddNote section.</h1>';
  }
}
showNotes();

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchText = document.getElementById("searchText");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", (e) => {
  showNotes();
  e.preventDefault();
  let inputVal = searchText.value;
  let noteCard = document.getElementsByClassName('noteCard');
  Array.from(noteCard).forEach(elem => {
    let cardTitle = elem.getElementsByTagName('h5')[0].innerText;
    let cardText = elem.getElementsByTagName('p')[0].innerText;
    if (cardText.includes(inputVal) || cardTitle.includes(inputVal)) {
      elem.className += ' block';
    } else {
      elem.className += ' none';
    };
  });
});

searchText.addEventListener("blur", (e) => {
  e.preventDefault();
  showNotes();
});