import { Box, Spinner, Text } from '@chakra-ui/react';
import { API_URL } from '@constants/apiUrl';
import { FC, useState } from 'react';

const UploadFile: FC<{
  label: string;
  type: 'actors' | 'movies' | 'directors';
  callback?: (imgUrl: string) => void;
  errorMessage?: string;
}> = ({ label, callback, type, errorMessage }) => {
  const [loading, setLoading] = useState(false);
  const [localFile, setLocalFile] = useState('');
  const onChange = async (e): Promise<void> => {
    const file = e.target.files[0];
    try {
      setLoading(true);
      const data = await fetch(`${API_URL}/s3/url?folder=${type}&filename=${file.name}`);
      const response = await data.json();
      const url = response.signedUrl;

      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });

      const imageUrl = url.split('?')[0];
      callback?.(imageUrl);
      setLocalFile(imageUrl);
    } catch (ex) {
      // eslint-disable-next-line
      console.log(Object.keys(ex), ex);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box pos="relative">
      <Box pos="absolute" right="0" height="100%" d="grid" placeContent="center">
        {loading && <Spinner />}
      </Box>
      <Text fontSize="sm" mb="3px">
        {label}
      </Text>
      <input type="file" onChange={onChange} />
      {errorMessage && !loading && !localFile && (
        <Text mt="4px" variant="error">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default UploadFile;
