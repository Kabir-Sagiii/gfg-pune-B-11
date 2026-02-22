function findDesignation(experience) {
  if (typeof experience === "number") {
    if (experience >= 0 && experience <= 2) {
      console.log("Junior Developer");
    } else if (experience > 2 && experience <= 5) {
      console.log("Senior Developer");
    } else if (experience > 5 && experience <= 8) {
      console.log("Team Lead");
    } else {
      console.log("Experience should be less then 8yrs");
    }
  } else {
    console.log("Invalid Experience");
  }
}

findDesignation("1.9");
