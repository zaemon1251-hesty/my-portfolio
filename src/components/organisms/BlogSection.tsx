import { ReactNode } from "react";
import Image from 'next/image';

type Props = {
    title: string,
    src: string,
    date :string,
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
            {date}
    </span>

    <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
      <Image alt={""} width={800} height={400} className="object-cover object-center rounded" src={src} />
    </div>
    <div className="w-full">
      <div id="markdown-area">
        <div className="container">
          <div className="sub-container">
            {children}
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
        </>
    );
};