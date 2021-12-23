import React from 'react'
import { Link } from 'gatsby'
import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className={styles.tags}>
      {tags.map((tag) => (
        <Link to={`/tags/${tag.id}`} className={styles.link} key={tag.id}>
          <div className={styles.tag}>
            {tag.title}
          </div>
        </Link>
      ))}
    </small>
  )

export default Tags
