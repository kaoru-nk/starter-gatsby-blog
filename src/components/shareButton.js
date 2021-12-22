import React from 'react'

import * as styles from './shareButton.module.less'


const ShareButton = ({ link }) => (
  <div className={styles.sharebutton}>
    <a href={link}><button>この記事をツイート</button></a>
  </div>
)

export default ShareButton