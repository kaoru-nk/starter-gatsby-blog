import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './author.module.less'
import AuthorTaglist from "./author-taglist";
const Author = (props) =>{
  return(
    <div className={styles.author}>
      {props.image && (
        <GatsbyImage className={styles.image} alt={props.title} image={props.image} />
      )}
      <div className={styles.details}>
        <h1 className={styles.title}>{props.title}</h1>
        {props.content && <p className={styles.content}>{props.content}</p>}
      </div>
      <h2>Twitter</h2>
      <div className={styles.twitter}>
        <a className="twitter-timeline" href="https://twitter.com/sudosan?ref_src=twsrc%5Etfw">Tweets by sudosan</a>
      </div>
      <h2>カテゴリ</h2>
      <AuthorTaglist tags={props.tags}></AuthorTaglist>
    </div>
  )
}
export default Author
