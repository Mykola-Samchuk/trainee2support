import data from "../../data.json";

export const fetchInterestFirstLine = () => {
  return new Promise((res) => {
    setTimeout(() => res(data.interestFirstLine), 1000);
  });
};
