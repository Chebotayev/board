import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const HomeInformation = () => <div className='info'>
  <Paper elevation={10} style={{ padding: '40px' }}>
    <Typography variant="h5" component="h3">
      Make your own plans and control it
    </Typography>
    <Typography component="p">
      You can use app for free, just use an existing account or Sign up
    </Typography>
  </Paper>
</div>

export default HomeInformation;