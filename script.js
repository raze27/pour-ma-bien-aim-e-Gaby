function openLetter() {
  const scene = document.querySelector(".scene");
  const content = document.querySelector(".content");
  

  const isOpen = scene.classList.contains("open");

  if (isOpen) {
    /* CLOSE */
    scene.classList.remove("open");

  } else {
    /* OPEN */
    scene.classList.add("open");

    setTimeout(() => {
  content.classList.remove("hidden"); 
  content.classList.add("show");

  setTimeout(() => {
    content.classList.add("revealed");
  }, 50);

}, 900);
  }
}
function goTo(page){
  window.location.href = page;
}
