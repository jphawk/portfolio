export const cases = `
  {
    workcases {
      id
      slug
      workcaseTitle
      workcaseDescription
      workcaseContentHtml
      gallery
      updatedAt
      image {
        url
      }
      mediumLink
    }
    feedbacks {
      recommendation
      author
      title
      company
      companyLink
      linkedin
    }
    galleryMiscs {
      name
      description
      image {
        url
      }
      width
      height
      thumbnail {
        url
      }
    }
    mediumArticles {
      name
      description
      mediumLink
      slug
      image {
        url
      }
    }
    abouts {
      aboutText
      fact1
      fact2
      fact3
      fact4
      fact5
    }
  }
`;
