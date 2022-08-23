import { gql, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import Container from '@components/Container';
import UploadFile from '@components/UploadFile';
import { GET_MOVIE_BY_ID } from '@graphql/queries/movie.query';
import { useUploadFile } from '@store/useUploadFile';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const MovieById: FC = () => {
  const uploadFile = useUploadFile((e) => e.uploadFile);
  const router = useRouter();
  // const { data } = useQuery(GET_MOVIE_BY_ID, {
  //   variables: {
  //     id: router.query.id,
  //     skip: !router.query.id,
  //   },
  // });

  const [getMovie, { data }] = useLazyQuery(GET_MOVIE_BY_ID);

  useEffect(() => {
    if (router.query.id) {
      void getMovie({
        variables: {
          id: router.query.id,
        },
      });
    }
  }, [router.query.id, getMovie]);

  const [updateMovie, { loading }] = useMutation(gql`
    mutation updateImage($id: String!, $imageUrl: String!) {
      updateMovie(_id: $id, input: { imageUrl: $imageUrl }) {
        title
        imageHashUrl
        actors {
          _id
          lastName
        }
      }
    }
  `);

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading>{data?.movie.title}</Heading>
      </Flex>

      {/* dev part */}
      <Box mt="20">
        <UploadFile
          label="upload"
          callback={async (): Promise<void> => {
            await uploadFile('movies', async (imageUrl) => {
              // console.log(imageUrl);
              await updateMovie({
                variables: {
                  id: data?.movie._id,
                  imageUrl: imageUrl,
                },
                onCompleted: () => {
                  void getMovie({
                    variables: {
                      id: router.query.id,
                    },
                  });
                },
              });
            });
          }}
        />
        <h1>dev part</h1>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : (
          <Flex>
            {data?.movie.imageHashUrl && (
              <Image
                src={data.movie.imageUrl}
                placeholder="blur"
                width={400}
                height={200}
                blurDataURL={data.movie.imageHashUrl}
                alt="tanga"
              />
            )}
            <Box w={10} />
            <img src={data?.movie.imageUrl} alt="poster" width={400} height={200} />
            <Box w={10} />
            {data?.movie?.imageHashUrl && <img src={data.movie.imageHashUrl} width={400} height={200} />}
          </Flex>
        )}
      </Box>
      <Box h="20" />
    </Container>
  );
};

export default MovieById;
