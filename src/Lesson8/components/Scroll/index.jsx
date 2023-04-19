
function getScroll() {
  const scroll = () => {
    console.log(window.scrollY);
  }
  window.addEventListener('scroll', scroll);
}

export default getScroll;