import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const account = await stripe.accounts.create({ type: 'standard' });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: process.env.STRIPE_REFRESH_URL!,
      return_url: process.env.STRIPE_RETURN_URL!,
      type: 'account_onboarding',
    });

    res.redirect(accountLink.url);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'Stripe error', message: (err as Error).message });
  }
}
