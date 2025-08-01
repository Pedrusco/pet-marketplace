import Head from 'next/head';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';

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
      <main className='p-8 flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-4'>Countries (GraphQL Example)</h1>
        <ul className='mb-6 text-center'>
          {countries.map((country) => (
            <li key={country.code}>{country.name}</li>
          ))}
        </ul>

        <Link href='/api/create-stripe-account-link'>
          <button className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800 transition cursor-pointer'>
            Connect with Stripe
          </button>
        </Link>
      </main>
    </>
  );
}
