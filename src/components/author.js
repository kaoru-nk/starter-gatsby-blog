import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './author.module.less'


const Author = ({ image, title, content }) => (
    <div className={styles.author}>
        {image && (
            <GatsbyImage className={styles.image} alt={title} image={image} />
        )}
        <div className={styles.details}>
            <h1 className={styles.title}>{title}</h1>
            {content && <p className={styles.content}>{content}</p>}
        </div>
      <h2>Twitter</h2>
      <div className={styles.twitter}>
        <a className="twitter-timeline" href="https://twitter.com/sudosan?ref_src=twsrc%5Etfw">Tweets by sudosan</a>
      </div>
      <h2>リンク</h2>

    </div>
)

export default Author