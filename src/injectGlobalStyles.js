import { injectGlobal } from 'emotion';
import { styles, classes } from './styles';

injectGlobal`
  body{
    margin:0;
  }
  a{
    text-decoration:none
  }
  button.link{
    background:none;
    border:none;
    font: inherit;
    margin:0;
    padding:0;
    display:inline;
    color: ${styles.colors.blue3};
    cursor: pointer
  }
  .h1-text{
    ${classes.typography.h1}
  }
  .h2-text{
    ${classes.typography.h2}
  }
  .h3-text{
    ${classes.typography.h3}
  }
  .base-text{
    ${classes.typography.base}
  }

  .text-center{
    text-align:center;
  }
`;
