import BarChart from 'components/BarChart';
import Card from 'components/card';
const Peaks = (props: { data: object; option: object }) => {
  const { data, option } = props;

  return (
    <Card extra="pb-7 p-[20px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            Highest
            <span className="text-sm font-medium leading-6 text-gray-600">
              /Lowest
            </span>
          </p>
        </div>
      </div>

      <div className="h-[300px] w-full pb-0 pt-10">
        <BarChart chartData={data} chartOptions={option} />
      </div>
    </Card>
  );
};

export default Peaks;
