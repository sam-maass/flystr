import styled from 'styled-components';
import {typo} from '../../style-components/vars';

export const StyledTripRow = styled.div`
  margin-bottom: 1px;
  display: flex;
  width: 100%;
  .bg {
    min-width: 160px;
    min-height: 90px;
    background: red;
    position: relative;
    background-image: url('/beach.jpg');
    background-size:cover;
  }
  .status {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    height: 20px;
    text-align: center;
    color: #fafafa;
  }
  .content {
    width:100%;
    background:#fafafa;
    padding: 12px;
  }
  .title {
      ${typo.heading}
  }
    .info {
      ${typo.normal}
  }
`;
