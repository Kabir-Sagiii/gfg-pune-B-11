// function fnUser([a, b, c]) {
//   console.log(c); //30
//   //x[index]
// }

// fnUser([10, 20, 30, 40]);

function fnUser({ city, name }, [a, b]) {
  console.log(city, name, a, b);

  //   console.log(x.city);
  //   console.log(x.name);
}

fnUser({ name: "s1", gender: "female", city: "mumbai" }, [10, 20]);
