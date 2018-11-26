import { injectGlobal } from 'emotion';
import { styles } from './styles';

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
`;
