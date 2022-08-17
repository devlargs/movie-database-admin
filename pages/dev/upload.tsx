import { FC } from 'react';

const Upload: FC = () => {
  const onChange = async (e): Promise<void> => {
    const file = e.target.files[0];
    try {
      const data = await fetch(`https://graphql-movies-api.herokuapp.com/s3/url?folder=movies&filename=${file.name}`);
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
      const img = document.createElement('img');
      img.src = imageUrl;
      document.body.appendChild(img);
    } catch (ex) {
      // eslint-disable-next-line
      console.log(Object.keys(ex), ex);
    }
  };

  return (
    <>
      <input type="file" onChange={onChange} />
    </>
  );
};

export default Upload;
