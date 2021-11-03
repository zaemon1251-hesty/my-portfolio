import Image from 'next/image';
import { ReactNode } from 'react';
import { NOIMAGE } from '../../utils/constants';

type Props = {
    src: string,
    alt?: string,
    children?: ReactNode
}

export const AboutSection: React.VFC<Props> = (props) => {
    const alt = props.alt ? props.alt : "";
    const src = props.src ? props.src : NOIMAGE;
    const { children } = props;
    return (
        <>
            <section className="text-gray-600 body-font">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 p-5 text-center">You Are (Not) Alone</h2>
                <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <Image width={647} height={400} className="object-cover object-center rounded" alt={alt} src={src} />
                    <div className="text-center lg:w-2/3 w-full">
                        <p className="mb-8 leading-relaxed p-2">Yor Are (Not) Happy</p>
                        <div className="flex justify-center">
                            { children }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}