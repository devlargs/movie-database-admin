// TODO - typecheck this better
// eslint-disable-next-line
const revalidate = async function handler(_, res): Promise<any> {
  console.log('Nextjs revalidating'); // eslint-disable-line
  let revalidated = false;
  try {
    await res.unstable_revalidate('/');
    revalidated = true;
  } catch (err) {
    console.log(err); // eslint-disable-line
  }

  res.json({
    revalidated,
  });
};

export default revalidate;
