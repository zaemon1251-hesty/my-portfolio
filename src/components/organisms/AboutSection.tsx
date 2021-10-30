import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
    src: string,
    alt?: string,
    children?: ReactNode
}

export const AboutSection: React.VFC<Props> = (props) => {
    const alt = props.alt ? props.alt : "";
    const { src, children } = props;
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image width={647} height={400} className="object-cover object-center rounded" alt={alt} src={src} />
                    <div className="text-center lg:w-2/3 w-full">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">You Are (Not) Alone</h2>
                    <p className="mb-8 leading-relaxed">Yor Are (Not) Happy</p>
                    <div className="flex justify-center">
                        { children }
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}