import { MyHeader } from "../organisms/MyHeader"
import { ProfileCard } from "../organisms/profileCard"

type Props = {
}


export const indexTemplate:React.VFC<Props> = () => {
    return (
        <div>
            <MyHeader />
            <main className="max-w-3xl px-4 mx-auto my-10 sm:px-6 xl:max-w-5xl xl:px-0">
                <ProfileCard />
            </main>
        </div>
    );
};