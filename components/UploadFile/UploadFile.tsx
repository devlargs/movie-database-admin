import { Box, Text } from '@chakra-ui/react';
import { useUploadFile } from '@store/useUploadFile';
import Image from 'next/image';
import { FC, useEffect } from 'react';

const UploadFile: FC<{
  label: string;
  callback?: (imgUrl: string) => void;
  errorMessage?: string;
}> = ({ label, callback, errorMessage }) => {
  const [localFile, setLocalFile, base64Image, loading] = useUploadFile((e) => [
    e.file,
    e.setFile,
    e.base64Image,
    e.loading,
  ]);
  const onChange = async (e): Promise<void> => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    try {
      setLocalFile(file);
      callback?.(file.name);
    } catch (ex) {
      jest.fn();
    }
  };

  useEffect(() => {
    return () => {
      setLocalFile(null);
    };
  }, [setLocalFile]);

  return (
    <Box pos="relative">
      <Text fontSize="sm" mb="3px">
        {label}
      </Text>
      <input type="file" onChange={onChange} disabled={loading} />
      {errorMessage && !localFile && (
        <Text mt="4px" variant="error">
          {errorMessage}
        </Text>
      )}
      {base64Image && (
        <Box mt={3}>
          <Image width={260} height={360} alt="image preview" src={base64Image} />
        </Box>
      )}
    </Box>
  );
};

export default UploadFile;
