// TODO - typecheck this better
// eslint-disable-next-line
const revalidate = async function handler(req, res): Promise<any> {
  const url = req.query.url ?? '/';
  console.log('Nextjs revalidating'); // eslint-disable-line
  let revalidated = false;
  try {
    await res.unstable_revalidate(url);
    revalidated = true;
  } catch (err) {
    console.log(err); // eslint-disable-line
  }

  res.json({
    revalidated,
    url,
  });
};

export default revalidate;
