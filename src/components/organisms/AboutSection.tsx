import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
    title: string,
    src: string,
    alt?: string,
    children?: ReactNode
}

export const AboutSection: React.VFC<Props> = (props) => {
    const alt = props.alt || "";
    const { src, title, children } = props;
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 p-5 text-center">{title}</h2>
                <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                    <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                        <Image width={647} height={400} className="object-cover object-center rounded" alt={alt} src={src} />
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
            </div>
        </>
    )
}