import type { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

const hashUrl = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { base64 } = await getPlaiceholder(
    'https://cdn-cas.orami.co.id/parenting/images/Im-Nayeon.width-800.jpegquality-80.jpg'
  );
  res.status(200).json({ base64 });
};

export default hashUrl;
