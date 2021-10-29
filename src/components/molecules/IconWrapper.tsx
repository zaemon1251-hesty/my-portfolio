import { ReactChild } from "react";

type Props = {
  href: string;
  name: string;
  children?: ReactChild;
};

export const IconWrapper: React.VFC<Props> = (props) => {
  const {href, name, children} = props;
  return (
      <li>
        <a
          href={href}
          className="flex items-center justify-center text-gray-500 hover:text-blue-400"
          aria-label={name}
        >
          {children}
        </a>
      </li>
  );
};
