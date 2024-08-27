const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const color = e.target.getAttribute("id");
    document.body.style.backgroundColor = color;
  });
});
