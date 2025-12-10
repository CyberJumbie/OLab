import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { password } = req.body;
    const sitePassword = process.env.SITE_PASSWORD;

    if (!sitePassword) {
        console.error('SITE_PASSWORD environment variable is not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    if (password === sitePassword) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ error: 'Incorrect password' });
    }
}
