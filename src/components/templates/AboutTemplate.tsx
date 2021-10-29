import { MyHeader } from '../organisms/MyHeader';
import { aboutSection } from '../organisms/aboutSection';

type Props = {
}

export const AboutTemplate: React.VFC<Props> = () => {
    return (
        <div>
            <MyHeader />
            <aboutSection src="../../../public/vercel.svg" />
        </div>
    )
}