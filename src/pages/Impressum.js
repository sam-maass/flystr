import React from 'react';
import Typography from '@material-ui/core/Typography';

const containerStyle = {
  textAlign: 'center',
  display: 'grid',
  gridTemplateRows: '50px 1fr',
  gridTemplateColumns: '1fr 800px 1fr',
  gridTemplateAreas: `
  '. . .'
  '. content .'
  `
};

const Impressum = () => {
  return (
    <div style={containerStyle}>
      <div style={{ gridArea: 'content' }}>
        <Typography variant="display2" gutterBotton>
          Impressum
        </Typography>
        <Typography variant="title">Betreiber</Typography>
        <Typography>Sam Maaß</Typography>
        <Typography>Ermekeilstr. 54</Typography>
        <Typography>53113 Bonn</Typography>
        <Typography>info@flystr.com</Typography>
      </div>
    </div>
  );
};

export default Impressum;
