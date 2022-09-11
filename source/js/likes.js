const likeButtons = document.querySelectorAll(".gallery__button-like");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("gallery__button-like--added");
    const currentElementNumber = button.querySelector(".gallery__likes");
    const current = Number(currentElementNumber.innerText);
    const inc = button.classList.contains("gallery__button-like--added") ? 1 : -1;
    currentElementNumber.innerText = current + inc;
  });
});
