// Initial Data
let draggedItem = null;

// Events
document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", function (e) {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 0)
  });
})

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragend", function (e) {
    setTimeout(() => {
      item.style.display = "block";
    }, 0)
    draggedItem = null;
  });
})

document.querySelectorAll('.tier-content').forEach(tierContent => {
  tierContent.addEventListener("dragover", dragOver);
  tierContent.addEventListener("drop", drop);
})

document.querySelector('.item-area').addEventListener("dragover", dragOverArea);
document.querySelector('.item-area').addEventListener("drop", dropArea);

// Functions tierContent
function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.currentTarget.appendChild(draggedItem);
}

// Functions item-area

function dragOverArea(e) {
  e.preventDefault();
}

function dropArea(e) {
  e.currentTarget.appendChild(draggedItem);
}


