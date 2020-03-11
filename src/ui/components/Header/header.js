import React from 'react';
import Box from '@material-ui/core/Box';
import styles from './styles/header.module.scss';

function Header() {
  return (
    <>
      <Box align="center" className={styles.header}>
        <Box px={2} className={styles.bar} />
        <img
          src="https://s3.amazonaws.com/sample-login/companies/avatars/000/000/568/original/Screen_Shot_2015-09-14_at_6.10.01_PM.png?1442265389"
          width={200}
          alt="iClinic"
        />
      </Box>
    </>
  );
}

export default Header;
