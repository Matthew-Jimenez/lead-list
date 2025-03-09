import { Box, Grid2, Typography } from '@mui/material';
import LeadFormContainer from '../features/lead-capture/LeadFormContainer';

export default function Home() {

  return (
    <>
      <Box component={'header'} sx={{ position: 'relative', background: '#d9dea6', height: '50vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <Typography zIndex={9} variant='h2' fontWeight={600} component={'h1'} mb={4}>alma</Typography>
          <Typography variant='h1' component={'h2'} fontWeight={700}>Get An Assessment <br /> Of Your Immigration Case</Typography>
        </Box>
      </Box>

      <Grid2 component="main" container direction='column' justifyContent='center' alignItems='center' py={4} px={2}>
        <Typography align='center' variant='h4' component='h4'>
          Want to understand your visa options?
        </Typography>

        <Typography maxWidth={500} align='center' variant='h5' component={'h3'}>Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your gaols.</Typography>


        <LeadFormContainer />
      </Grid2>
    </>
  );
}