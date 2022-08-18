import type { NextApiRequest, NextApiResponse } from 'next';
import { getPlaiceholder } from 'plaiceholder';

const hashUrl = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    if (!req.query.url) {
      res.status(400).json({ message: 'URL is required' });
    } else {
      const { base64 } = await getPlaiceholder(req.query.url as string);
      res.status(200).json({ base64 });
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export default hashUrl;
