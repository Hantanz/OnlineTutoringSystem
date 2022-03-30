const courses = [
  {
    courseId: 8,
    title: "Thermo dymanics",
    provider: "Khan Academy",
    thumbnail: "img/logo.png",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {},
];

const aux = [
  "is",
  "are",
  "am",
  "I",
  "be",
  "can",
  "could",
  "dare",
  "do",
  "have",
  "may",
  "might",
  "must",
  "need",
  "ought",
  "shall",
  "should",
  "will",
  "would",
  "where",
  "who",
  "when",
  "why",
];

const loadHome = (req, res) => {
  res.render("home", { courses: courses });
};

const search = (req, res) => {
  let searchObj = JSON.parse(JSON.stringify(req.body));
  console.log(searchObj.query);
  let keywords = searchObj.query.split(" ");
  let mainKeywords = keywords.filter((x) => !aux.includes(x));
  console.log(mainKeywords); // includes all the valid keywords

  res.render("home", { courses: courses });
};

module.exports = {
  loadHome,
  search,
};
