import banner from '/public/img/profile/banner.png';
import Card from 'components/card';

const Banner = (props: { data: object; selcted: boolean }) => {
  const { selcted, data } = props;

  return (
    <Card
      extra={
        selcted
          ? 'ring-4 ring-brand-400 dark:ring-brand-200 items-center w-full h-full p-[16px] bg-cover'
          : 'items-center w-full h-full p-[16px] bg-cover'
      }
    >
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-brand-400 dark:!border-navy-700">
          {/* <Image
            width="2"
            height="20"
            className="h-full w-full rounded-full"
            src={avatar}
            alt=""
          /> */}
          <p className="font-poppins text-[26px] font-bold uppercase text-white">
            VPS {data.id}
          </p>
        </div>
      </div>

      {selcted && (
        <button className="absolute right-5 top-7 flex items-center justify-center rounded-full bg-white p-2 text-navy-700 hover:cursor-pointer motion-safe:animate-pulse dark:bg-brand-400">
          <div className="flex h-full w-full items-center justify-center rounded-full text-sm  dark:text-white">
            Ai Recommendation ✨
          </div>
        </button>
      )}

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Virtual Private Server
        </h4>
        <h5 className="text-base font-normal text-gray-600">Plan {data.id}</h5>
      </div>

      {/* Post followers */}
      <div className="mb-3 mt-6 flex flex-col items-center justify-center gap-4 ">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            {data.cpu}
          </h4>
          <p className="text-sm font-normal text-gray-600">CPU</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold uppercase text-navy-700 dark:text-white">
            {data.ram}
          </h4>
          <p className="text-sm font-normal text-gray-600">RAM</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            {data.network}
          </h4>
          <p className="text-sm font-normal text-gray-600">Network Speed</p>
        </div>
        <button className="linear w-32 rounded-[20px] bg-brand-900 px-4 py-2 text-xl font-bold text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90">
          {data.price}
          <span className="text-sm font-medium leading-6 text-gray-600">
            /mo
          </span>
        </button>
      </div>
    </Card>
  );
};

export default Banner;
