import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import Container from '@components/Container';
import UploadFile from '@components/UploadFile';
import { UPDATE_ACTOR } from '@graphql/mutations/actor.mutation';
import { GET_ACTOR_BY_ID } from '@graphql/queries/actor.query';
import { useUploadFile } from '@store/useUploadFile';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const ActorById: FC = () => {
  const uploadFile = useUploadFile((e) => e.uploadFile);
  const router = useRouter();
  const [getActor, { data }] = useLazyQuery(GET_ACTOR_BY_ID, {
    fetchPolicy: 'network-only',
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      void getActor({
        variables: {
          id: router.query.id,
        },
      });
    }
  }, [router.query.id, getActor]);

  const [updateActor, { loading }] = useMutation(UPDATE_ACTOR);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>{data?.actor.title}</Heading>
      </Flex>

      {/* dev part */}
      <Box mt="20">
        <UploadFile
          label="upload"
          callback={async (): Promise<void> => {
            setUploading(true);
            await uploadFile('actors', async (imageUrl) => {
              await updateActor({
                variables: {
                  id: data?.actor._id,
                  input: {
                    imageUrl,
                  },
                },
                onCompleted: () => {
                  void getActor({
                    variables: {
                      id: router.query.id,
                    },
                  });
                  setUploading(false);
                },
              });
            });
          }}
        />
        <h1>dev part</h1>
        <br />
        <br />
        {loading || uploading ? (
          <Spinner />
        ) : (
          <Flex>
            {data?.actor.imageHashUrl && (
              <Image
                src={data.actor.imageUrl}
                placeholder="blur"
                width={400}
                height={200}
                blurDataURL={data.actor.imageHashUrl}
                alt="tanga"
              />
            )}
            <Box w={10} />
            {data?.actor.imageUrl && <img src={data?.actor.imageUrl} alt="poster" width={400} height={200} />}
            <Box w={10} />
            {data?.actor?.imageHashUrl && <img src={data.actor.imageHashUrl} width={400} height={200} />}
          </Flex>
        )}
      </Box>
      <Box h="20" />
    </Container>
  );
};

export default ActorById;
