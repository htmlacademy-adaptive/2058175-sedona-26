const likeButtons = Array.from(document.querySelectorAll(".gallery__button-like"));
const likeNumber = Array.from(document.querySelectorAll(".gallery__likes"));

likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("gallery__button-like--added");
    const current = Number(likeNumber[index].innerHTML);
    const inc = button.classList.contains("gallery__button-like--added") ? 1 : -1;
    likeNumber[index].innerHTML = current + inc;
  });
});
