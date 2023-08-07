import Logo from "./Logo";
import {
  GithubIcon,
  LinkArrow,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import CustomLink from "@/common/CustomLink";
import MotionIcons from "@common/MotionIcons";

const items = [
  { title: "Home", href: "/", className: "mr-4" },
  { title: "About", href: "/about", className: "mx-4" },
  { title: "Projects", href: "/projects", className: "mx-4" },
  { title: "Articles", href: "/articles", className: "ml-4" },
];

const components = [
  {
    children: <TwitterIcon />,
    href: "https://twitter.com/MorochoFebres",
    className: "w-6 mr-3",
    target: "_blank",
  },
  {
    children: <GithubIcon />,
    href: "https://github.com/Enrique2115",
    className: "w-6 mr-3",
    target: "_blank",
  },
  {
    children: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/luis-enriquemf/",
    className: "w-6 mr-3",
    target: "_blank",
  },
  { children: <SunIcon />, href: "/", className: "w-6 mr-3", target: "_blank" },
  {
    children: <MoonIcon />,
    href: "/",
    className: "w-6 mr-3",
    target: "_blank",
  },
  {
    children: <LinkArrow />,
    href: "/",
    className: "w-6 mr-3",
    target: "_blank",
  },
];

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink items={items} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <MotionIcons items={components} as="a" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
