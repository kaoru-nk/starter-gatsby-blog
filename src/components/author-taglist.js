import React from 'react'
import { Link } from 'gatsby'

const AuthorTagList = ({ tags }) =>
  tags?.length > 0 && (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Link to={`/tags/${tag.id}`}>
              {tag.title}
          </Link>
        </li>
      ))}
    </ul>
  )

export default AuthorTagList
