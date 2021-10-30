import Head from "next/head"
import { STATIC_IMAGE } from "../../utils/constants"

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  type?: string
}

export const MyMeta: React.VFC<Props> = (props) => {
  const { image, type, children } = props
  const description = props.description ?? ""
  const title = props.title ? props.title : `mori.Z`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          image
            ? image
            : STATIC_IMAGE
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta
        property="og:image"
        content={
          image
            ? image
            : STATIC_IMAGE
        }
      />
      {children}
    </Head>
  )
}