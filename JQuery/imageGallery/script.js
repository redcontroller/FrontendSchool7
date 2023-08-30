const viewFrame = document.querySelector(".view-frame");
const imgContainer = document.querySelector(".img-container");
const imgList = imgContainer.querySelectorAll("img");

imgList.forEach(img => {
  img.addEventListener("click", function () {
    const selectedLi = document.querySelector("li.selected");
    const currentImg = this;

    viewFrame.innerHTML = '';
    viewFrame.appendChild(currentImg.cloneNode(true));

    if (selectedLi) {
      selectedLi.classList.remove("selected");
    }
    currentImg.parentElement.classList.add("selected");
  });
});

document.addEventListener("keyup", function (e) {
  const selectedLi = document.querySelector(".selected");
  let targetLi = null;

  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    targetLi = selectedLi.previousElementSibling;

    if (!targetLi) {
      targetLi = imgContainer.lastElementChild;
    }
  }
  else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    targetLi = selectedLi.nextElementSibling;

    if (!targetLi) {
      targetLi = imgContainer.firstElementChild;
    }
  }

  if (targetLi) {
    selectedLi.classList.remove('selected');
    targetLi.classList.add('selected');
    const targetImg = targetLi.querySelector("img");
    viewFrame.innerHTML = '';
    viewFrame.appendChild(targetImg.cloneNode(true));
  }
});