import Image from 'next/image';
import Header from '@/components/Header';
import CreateAnAccount from '@/components/CreateAnAccount';
export default function Home() {
  return (
    <div className="">
      <Header />
      <CreateAnAccount />
    </div>
  );
}
