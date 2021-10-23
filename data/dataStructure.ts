export interface Dict<T> {
  [key: string]: T;
}

export interface SiteInfo {
  title: string,
  siteTitle: string,
  subtitle: string,
  description: string,
}

export interface Nav {
  href: string,
  pageTitle: string,
}

export interface AboutUs {
  title: string,
  description: string,
  profiles: Profile[]
}

export interface Profile {
  image: string,
  name: string,
}

export interface FooterInfo {
  title: string,
  subtitle: string,
  copyright: string,
  email: string,
}