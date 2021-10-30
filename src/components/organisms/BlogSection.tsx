import { ReactChild, ReactNode } from "react";
import { formatDate } from "../../utils/funcs";

type Props = {
    title: string,
    src: string,
    date :Date,
    children?: ReactNode
}

export const BlogSection: React.VFC<Props> = (props) => {
    const {
        title,
        src,
        date,
        children
    } = props;
    return (
        <>
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
    <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{title}</h2>
    <span className="font-light text-sm text-gray-600">
            {formatDate(date)}
    </span>

    <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
      <img src={src} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center" />
    </div>

    {children}

  </div>
</div>
        </>
    );
};