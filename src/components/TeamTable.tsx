import Image from 'next/image';
import Card from 'components/card';

const TeamCard = (props: { title: string; list: Array<object> }) => {
  const { title, list } = props;

  return (
    <Card extra={'!z-5 overflow-hidden'}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          {title}
        </div>
        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div>

      {/* History CardData */}

      {list.map((data, index) => (
        <div
          key={index}
          className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-background-800 dark:shadow-none dark:hover:!bg-background-700"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <Image
                width="2"
                height="20"
                className="h-full w-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {' '}
                {data.name}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {' '}
                {data.title}{' '}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
            <div className="flex items-center text-sm font-bold text-navy-700 dark:text-white">
              <p className="">{data.account}</p>
            </div>
            <div className="ml-2">{data.icon}</div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default TeamCard;
