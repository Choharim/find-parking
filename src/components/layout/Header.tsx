import { MetaHTMLAttributes } from 'react'
import Head from 'next/head'

type MetaTypeProps = {
  desc: MetaHTMLAttributes<HTMLMetaElement>['content']
  image: MetaHTMLAttributes<HTMLMetaElement>['content']
  title: HTMLTitleElement['title']
  url: MetaHTMLAttributes<HTMLMetaElement>['content']
  name: MetaHTMLAttributes<HTMLMetaElement>['content']
}

export type HeaderProps = {
  meta: Partial<MetaTypeProps>
}

const META: MetaTypeProps = Object.freeze({
  desc: '차장',
  image: '',
  name: '차장',
  title: '차장',
  url: '',
} as const)

export const Header = ({
  meta: { desc, image, title, url, name },
}: HeaderProps) => {
  return (
    <Head>
      <title>{title ? title : META.title}</title>
      <meta name="description" content={desc || META.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || META.url} />
      <meta property="og:site_name" content={name || META.name} />
      <meta property="og:image" content={image || META.image} />
      <meta property="og:title" content={title || META.title} />
      <meta property="og:description" content={desc || META.desc} />
      <meta name="twitter:card" content={image || META.image} />
      <meta name="twitter:site" content={name || META.name} />
      <meta name="twitter:title" content={title || META.title} />
      <meta name="twitter:description" content={desc || META.desc} />
      <meta property="twitter:image" content={image || META.image} />
      <meta property="product:brand" content={name || META.name} />
    </Head>
  )
}
