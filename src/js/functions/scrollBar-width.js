export const getScrollBarWidth = () => {
  const body = document?.querySelector('body');
  const scrollBarWidth = window.innerWidth - body.offsetWidth;
  document.querySelector(':root').style.setProperty('--scroll-bar-width', `${scrollBarWidth}px`);
}
