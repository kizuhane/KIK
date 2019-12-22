export const printContent = divElement => {
  const content = document.getElementById(divElement);
  let pri;
  if (document.getElementById("PRINT_PAGE")) {
    pri = document.getElementById("PRINT_PAGE").contentWindow;
  } else {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("title", "PRINT_PAGE");
    iframe.setAttribute("id", "PRINT_PAGE");
    iframe.setAttribute(
      "style",
      "height: 0px; width: 0px; position: absolute;"
    );
    document.body.appendChild(iframe);
    pri = iframe.contentWindow;
  }
  pri.document.open();
  pri.document.write(content.innerHTML);
  pri.document.close();
  pri.focus();
  pri.print();
  pri.close();
};
export default printContent;
