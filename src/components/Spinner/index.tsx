import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface SpinnerProps {
  color?: string;
  size?: number;
}

export default function Spinner({ color = 'white', size = 20 }: SpinnerProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress sx={{ color }} size={size} />
    </Box>
  );
}
