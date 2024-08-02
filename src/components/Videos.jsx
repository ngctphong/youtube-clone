import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Video = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      alignItems='start'
      gap={2}
    >
      {videos?.map(item => (
        <Box key={Math.random()}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
