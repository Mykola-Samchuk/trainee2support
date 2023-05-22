import data from "../../data.json";

export const fetchLessonById = (id) => {
  const lesson = data.first.find((l)=> l.id === Number(id) )
  return new Promise((res) => {
    setTimeout(() => res(lesson), 1000);
  });
};

export const fetchLessonByIdRouted = ({ params: { lessonId } }) =>
  fetchLessonById(lessonId);
