function main() {
  const panelsElements = document.querySelector(".wrapper");

  const createCounter = () => {
    let count = 1

    return () => {
      return count++
    }
  }

  const redCounter = createCounter()
  const greenCounter = createCounter()
  const blueCounter = createCounter()

  panelsElements.addEventListener('click', (e) => {
    switch (e.target.className) {
      case 'red':
        e.target.innerHTML = redCounter()
        break;
      case 'green':
        e.target.innerHTML = greenCounter()
        break;
      case 'blue':
        e.target.innerHTML = blueCounter()
        break;
      default:
        break;
    }
  })
}

window.onload = main;
