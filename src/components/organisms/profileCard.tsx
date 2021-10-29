import { emailIcon } from "../molecules/emailIcon";
import { githubIcon } from "../molecules/githubIcon";
import { IconWrapper } from "../molecules/IconWrapper";
import { twitterIcon } from "../molecules/twitterIcon";
import Image from "next/image"

type Props = {}

export const ProfileCard: React.VFC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="w-40 h-40 overflow-hidden border border-gray-200 rounded-full shadow-xl">
        <Image
          src="/neko.jpg"
          alt="neko icon"
          className="object-contain w-40 h-40"
          width="160"
          height="160"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold">Marina</h2>
      <p className="mt-2 text-sm font-medium">Mobile Engineer | Backend Engineer</p>

      <p className="mt-3 text-xs text-center text-gray-500">React Native Lover</p>

      <ul className="flex flex-row mt-4 space-x-2">
        <IconWrapper href="https://github.com/zaemon1251-hesty" name="github">
          <githubIcon />
        </IconWrapper>
        <IconWrapper href="https://twitter.com/CatEmperorTime" name="twitter">
          <twitterIcon />
        </IconWrapper>
        <IconWrapper href="mailto:hisakawa1251&#64;gmail.com" name="email">
          <emailIcon />
        </IconWrapper>
      </ul>
    </div>
  )
}