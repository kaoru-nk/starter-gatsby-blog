import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Copyright © 2024 すど. All Rights Reserved.
    </div>
  </Container>
)

export default Footer
