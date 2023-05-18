import data from "../../data.json";

export const fetchFirstAllLessons = () => {
  return new Promise((res) => {
    setTimeout(() => res(data.first), 1000);
  });
};
