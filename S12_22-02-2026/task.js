function canVote(age) {
  if (age >= 18) {
    console.log("yes he/she can vote");
  }

  if (age < 18) {
    console.log("he/she cant vote");
  }
}

canVote(17); //

canVote(21);

canVote(9);

canVote(30);

canVote(45);
