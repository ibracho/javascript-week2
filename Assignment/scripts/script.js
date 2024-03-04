function onSubmit(e) {
  e.preventDefault();

  const user = e.target[0].value;
  const email = e.target[1].value;
  const subject = e.target[2].value;
  const description = e.target[3].value;

  //   let values1 = [];
  //   for (let index = 0; index < e.target.length; index++) {
  //     const value = e.target[index];
  //     values1.push({ name: e.name, value: e.value });
  //   }

  //   let values3 = [];
  //   for (const result of e.target) {
  //     values3.push({ name: result.name, value: result.value });
  //   }

  //   let values2 = [];
  //   e.target.forEach((item) => values2.push({ name: item.name, value: item.value }) );

  //   const values4 = e.target.map((e) => ({ name: e.name, value: e.value }));

  document.location = `mailto:mybusiness@melomaman.com?subject=${user} ${subject}&body=${email} ${description}&cc=miswebos@gmail.com`;
  window.location.replace("/pages/");
}
