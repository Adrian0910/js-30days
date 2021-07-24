<<<<<<< HEAD
  const triggers = document.querySelectorAll('a');
=======
const triggers = document.querySelectorAll('a');
>>>>>>> c2fd3a420ed78df24b34e0d5dc5e02e7295e6f3a
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  }

  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
<<<<<<< HEAD
  
=======
>>>>>>> c2fd3a420ed78df24b34e0d5dc5e02e7295e6f3a
