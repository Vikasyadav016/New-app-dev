import { useNavigate } from "react-router";

export const useTobarnavigationActions = () => {
  const navigate = useNavigate();

  const handleClickNavLink = (e:any, url:any) => {
    e.preventDefault();
    navigate(url);
  };
  return { handleClickNavLink };
};

const navigationMenuContent = [
  {
    key: "one",
    value: "One",
    link: "one",
  },
  {
    key: "two",
    value: "Two",
    link: "two",
  },
  {
    key: "three",
    value: "Three",
    link: "three",
  },
  {
    key: "four",
    value: "Four",
    link: "four",
  },
  {
    key: "five",
    value: "Create Account",
    link: "new-registration",
  },
  {
    key: "profile",
    value: "Profile",
    link: "profile",
  },
];

export default navigationMenuContent;
