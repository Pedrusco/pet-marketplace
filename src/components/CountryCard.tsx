import { getFlagEmoji } from '@/utils/getFlag';

type CountryProps = {
  code: string;
  name: string;
};

export const CountryCard = ({ code, name }: CountryProps) => {
  return (
    <div
      className='bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10
      cursor-pointer transition transform hover:scale-105 hover:bg-white/20 hover:shadow-xl'
    >
      <div className='text-3xl mb-2'>{getFlagEmoji(code)}</div>
      <h2 className='text-white font-semibold mb-1'>{name}</h2>
      <p className='text-gray-300 text-sm'>Code: {code}</p>
    </div>
  );
};
