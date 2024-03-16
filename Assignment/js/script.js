function onSubmit(e) {
  e.preventDefault();
    const user = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const description = e.target[3].value;
  document.location = `mailto:ScubaParadise@maldives.com?subject=${user} ${subject}&body=${email} ${description}&cc=isabelgbracho@gmail.com`;
  window.location.replace("./index.html");
}