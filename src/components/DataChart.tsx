import { MdOutlineCalendarToday, MdCached } from 'react-icons/md';
import Card from 'components/card';
import LineChart from 'components/LineChart';

const TotalSpent = (props: { data: object; option: object; reload: any }) => {
  const { data, option, reload } = props;

  function generateRandomIntegers(length, min, max) {
    const randomIntegers = new Set();
    while (randomIntegers.size < length) {
      randomIntegers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(randomIntegers);
  }

  function randomizeData() {
    let len = generateRandomIntegers(1, 5, 18)[0];
    let ranPlan = generateRandomIntegers(1, 1, 8)[0];
    reload({
      plan: ranPlan,
      length: len,
      cpu: generateRandomIntegers(len, 10, 100),
      ram: generateRandomIntegers(len, 70, 100),
      network: generateRandomIntegers(len, 10, 100),
    });
  }

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-background-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">Last Period</span>
        </button>
        <button
          onClick={randomizeData}
          className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-background-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
        >
          <MdCached className="h-6 w-6" />
        </button>
      </div>

      <div className="h-full w-full lg:min-h-[350px]">
        <LineChart chartOptions={option} chartData={data} />
      </div>
    </Card>
  );
};

export default TotalSpent;
