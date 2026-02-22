function findDesignation(experience) {
  if (typeof experience === "number" && experience < 9) {
    if (experience >= 0 && experience <= 2) {
      console.log("Junior Developer");
    }

    if (experience > 2 && experience <= 5) {
      console.log("Senior Developer");
    }

    if (experience > 5 && experience <= 8) {
      console.log("Team Lead");
    }
  } else {
    console.log("Invalid Experience");
  }
}

findDesignation(true);
