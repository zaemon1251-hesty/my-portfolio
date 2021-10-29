import Head from "next/head"

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  type?: string
}

export const Meta: React.VFC<Props> = (props) => {
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
            : "https://tiny-images-mori.s3.ap-northeast-1.amazonaws.com/2021-01-06+16.43.19.jpg"
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
            : "https://tiny-images-mori.s3.ap-northeast-1.amazonaws.com/2021-01-06+16.43.19.jpg"
        }
      />
      {children}
    </Head>
  )
}