export const ROUTES = {
  git_created: "https://github.com/Mykola-Samchuk",
  about: "/",
  first_line: "/first_line",
  second_line: "/second_line",
  third_line: "/third_line",
  interest_first_line: "/interesting_first_line",

  lesson: (id = null) => (id ? `/first_line/${id}` : "/first_line/:lessonId"),
};
