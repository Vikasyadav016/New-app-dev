import { useNavigate } from "react-router";

export const useSidebarAction = () => {
  const navigate = useNavigate();

  const handleClickSidebarTabUrl = (e:any, url:any) => {
    e.preventDefault();
    navigate(url);
  };
  return { handleClickSidebarTabUrl };
};

const sidebarConent = [
  {
    key: "welcome",
    value: "Welcome",
    url: "/",
  },
  {
    key: "1",
    value: "One",
    url: "one",
  },
  {
    key: "2",
    value: "Two",
    url: "two",
  },
  {
    key: "3",
    value: "Three",
    url: "three",
  },
  {
    key: "4",
    value: "Four",
    url: "four",
  },
  {
    key: "5",
    value: "Five",
    url: "five",
  },
  {
    key: "6",
    value: "Six",
    url: "six",
  },
  {
    key: "7",
    value: "Seven",
    url: "seven",
  },
  {
    key: "8",
    value: "Eight",
    url: "eight",
  },
  {
    key: "9",
    value: "Nine",
    url: "nine",
  },
  {
    key: "10",
    value: "Ten",
    url: "ten",
  },
  {
    key: "11",
    value: "Eleven",
    url: "eleven",
  },
  {
    key: "12",
    value: "Tweleve",
    url: "tweleve",
  },
  {
    key: "13",
    value: "Thirteen",
    url: "thirteen",
  },
  {
    key: "14",
    value: "Setting",
    url: "settings",
  },
];

export default sidebarConent;
