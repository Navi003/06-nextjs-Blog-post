import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type Props = {
  posts: BlogPost;
};

function ListItem({ posts }: Props) {
  const { id, title, date } = posts;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl ■dark: text-gray-800/90">
      <Link
        className="underline ☐hover:text-black/70
  dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm_mt-1">{formattedDate}</p>
    </li>
  );
}

export default ListItem;
