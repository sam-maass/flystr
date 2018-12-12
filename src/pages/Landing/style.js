import { classes, styles } from '../../styles';
import { css } from 'emotion';

export const style = css`
max-width: 100vw;
width: 1280px;
overflow: hidden;
margin: auto;
padding: 0 8px 0 8px;
section{
    margin-bottom: 96px;
}
.grid{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:8px;
    justify-items:center;
    align-items:center;
    margin: 8px;
    @media (min-width: 1024px){
     grid-template-columns: repeat(5,1fr);
    }
    .advantage-box-container{
        grid-column: 1 / span 3;
    }
    .image-container{
        grid-column: 1 / span 3;
        @media only screen and (min-width:1024px){
            grid-column: 4 /span 2;
        }
        &.double-height{
            grid-row: span 3;
        }
    }
}

.cta{
  max-width: 600px;
  margin: auto;
  text-align:center;
  a{
    text-decoration:none
  }
  .button {
  border-radius: 4px;
  background-color: ${styles.colors.orange};
  color: ${styles.colors.white};
  padding: 8px 16px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  ${classes.typography.title};
  font-weight: bold;

}
`;
