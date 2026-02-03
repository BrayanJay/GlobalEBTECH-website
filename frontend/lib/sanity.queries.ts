import { groq } from 'next-sanity'

// Services Query
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`

// Testimonials Query
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    clientName,
    company,
    position,
    content,
    rating,
    avatar {
      asset->{
        url
      }
    },
    order
  }
`

// Locations Query
export const locationsQuery = groq`
  *[_type == "location"] {
    _id,
    city,
    country,
    address,
    phone,
    email,
    timezone,
    mapLink
  }
`

// Stats Query
export const statsQuery = groq`
  *[_type == "stat"] | order(order asc) {
    _id,
    label,
    value,
    description,
    order
  }
`

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    contactPhone,
    contactEmail,
    businessHours,
    socialLinks
  }
`

// Blog Posts Queries (keeping existing)
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    }
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset->{
        url
      }
    }
  }
`