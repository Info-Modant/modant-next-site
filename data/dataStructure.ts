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

export interface PortfolioItem {
  id: number,
  title: string,
  titleInHyphens: string,
  description: string,
  thumbnail: string,
  videoLink: string,
  date: string,
}

export interface ContactUsInfo {
  address: Address,
  contactMethods: ContactMethod[],
}

export interface Address {
  addressLine1: string,
  addressLine2: string,
  city: string,
  postcode: string,
}

export interface ContactMethod {
  displayName: string,
  href: string,
}