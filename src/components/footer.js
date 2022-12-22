import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Code and content by <a href="https://davidkong.dev">David Kong</a>{' '}
      &middot; 2023
    </div>
  </Container>
)

export default Footer
