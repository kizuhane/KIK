export const hashLinkScroll = hash => {
  if (hash) {
    const id = decodeURI(hash).replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView();
      }, 60);
    }
  }
};
export default hashLinkScroll;
