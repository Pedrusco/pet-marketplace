import Head from 'next/head';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { getFlagEmoji } from '@/utils/getFlag';
import { CountryCard } from '@/components/CountryCard';

type CountryProps = {
  code: string;
  name: string;
};

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_COUNTRIES_API,
  cache: new InMemoryCache(),
});

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        countries {
          code
          name
        }
      }
    `,
  });

  return { props: { countries: data.countries } };
}

export default function Home({ countries }: { countries: CountryProps[] }) {
  return (
    <>
      <Head>
        <title>Pet Marketplace</title>
      </Head>
      <main className='p-8 max-w-6xl mx-auto text-white bg-neutral-900 min-h-screen'>
        <h1 className='text-3xl font-bold mb-8 text-center'>
          🌍 Countries (GraphQL Example)
        </h1>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
          {countries.map((country) => (
            <CountryCard
              key={country.code}
              code={country.code}
              name={country.name}
            />
          ))}
        </section>

        <div className='flex justify-center'>
          <Link href='/api/create-stripe-account-link'>
            <button className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition cursor-pointer'>
              Connect with Stripe
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
