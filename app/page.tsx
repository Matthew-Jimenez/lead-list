import Uploader from '@/features/upload/Uploader';
import { Typography } from '@mui/material';

export default function Home() {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Typography variant='h1'>Hello MUI</Typography>
      <Uploader />
    </main>
  );
}