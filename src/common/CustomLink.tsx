"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Items = {
  title: string;
  href: string;
  className?: string;
};

type CustomLinkProps = {
  items?: Items[];
};

const CustomLink = ({ items }: CustomLinkProps) => {
  const router = usePathname();
  console.log(router);

  return items && items.length > 0 ? (
    items.map((item, index) => (
      <Link
        href={item.href}
        key={index}
        className={`${item.className} relative group`}
      >
        {item.title}
        <span
          className={`h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 
          ${router === item.href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    ))
  ) : (
    <Link href="/">Home</Link>
  );
};

export default CustomLink;
