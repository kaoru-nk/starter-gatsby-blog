import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>すど日記</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to={"/"}>Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <a href="https://twitter.com/sudosan" target="_blank" rel="noreferrer noopener">
          Twitter
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
