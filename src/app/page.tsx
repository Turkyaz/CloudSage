'use client';
import { useState } from 'react';
import DataChart from 'components/DataChart';
import TeamTable from 'components/TeamTable';
import Banner from 'components/Banner';
import Widget from 'components/Widget';
import Peak from 'components/Peak';
import { MdMemory, MdNetworkCheck } from 'react-icons/md';
import {
  FaMemory,
  FaRegWindowRestore,
  FaCloud,
  FaReceipt,
  FaDiscord,
} from 'react-icons/fa';

import avatar1 from '/public/img/avatars/avatar1.gif';
import avatar2 from '/public/img/avatars/avatar2.gif';
import warnimg from '/public/img/avatars/warn.png';

const Dashboard = () => {
  const [collectedData, setCollectedData] = useState({
    plan: 4,
    length: 7,
    cpu: [50, 64, 48, 66, 49, 68, 55],
    ram: [30, 40, 24, 46, 20, 46, 44],
    network: [20, 30, 51, 36, 10, 76, 12],
  });
  const [Recommendation, setRecommendation] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collectedData),
      });
      const fetchedData = await response.json();
      setRecommendation(parseInt(fetchedData.recommendation));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  let plans = [
    {
      id: 1,
      ram: '1gb',
      cpu: '2 vCores @3.4GHz',
      network: '100 mb/s',
      price: '$4',
    },
    {
      id: 2,
      ram: '4gb',
      cpu: '4 vCores @ 3.4GHz',
      network: '150 mb/s',
      price: '$16',
    },
    {
      id: 3,
      ram: '8gb',
      cpu: '5 vCores @ 3.4GHz',
      network: '200 mb/s',
      price: '$32',
    },
    {
      id: 4,
      ram: '16gb',
      cpu: '6 vCores @ 3.4GHz',
      network: '300 mb/s',
      price: '$64',
    },
    {
      id: 5,
      ram: '20gb',
      cpu: '7 vCores @ 3.4GHz',
      network: '400 mb/s',
      price: '$80',
    },
    {
      id: 6,
      ram: '24gb',
      cpu: '8 vCores @ 3.4GHz',
      network: '500 mb/s',
      price: '$96',
    },
    {
      id: 7,
      ram: '32gb',
      cpu: '8 vCores @ 3.4GHz',
      network: '1000 mb/s',
      price: '$128',
    },
    {
      id: 8,
      ram: '64gb',
      cpu: '12 vCores @ 4.2GHz',
      network: '1000 mb/s',
      price: '$254',
    },
  ];

  function getCategoriesForLastWeek(num) {
    const categories = Array.from({ length: num }, (_, i) => {
      const date = new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000);
      return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
      });
    }).reverse();
    return categories;
  }

  let dates = getCategoriesForLastWeek(collectedData.length);
  const mean = (arr) =>
    Math.round(arr.reduce((acc, num) => acc + num, 0) / arr.length);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdMemory className="h-7 w-7" />}
          title={'Mean Cpu Usage'}
          subtitle={mean(collectedData.cpu) + '%'}
        />
        <Widget
          icon={<FaMemory className="h-6 w-6" />}
          title={'Mean Ram Usage'}
          subtitle={mean(collectedData.ram) + '%'}
        />
        <Widget
          icon={<MdNetworkCheck className="h-7 w-7" />}
          title={'Mean Network Speed'}
          subtitle={mean(collectedData.network) + ' mb/s'}
        />
        <Widget
          icon={<FaRegWindowRestore className="h-7 w-7" />}
          title={'Tasks opened'}
          subtitle={'145'}
        />
        <Widget
          icon={<FaCloud className="h-6 w-6" />}
          title={'Current Plan'}
          subtitle={'Vps ' + collectedData.plan}
        />
        <Widget
          icon={<FaReceipt className="h-6 w-6" />}
          title={'Next Bill'}
          subtitle={'Mar 30'}
        />
      </div>

      {/* Charts */}

      <div className="mt-5">
        <DataChart
          reload={setCollectedData}
          data={[
            {
              name: 'Cpu usage',
              data: collectedData.cpu,
              color: '#4318FF',
            },
            {
              name: 'Ram usage',
              data: collectedData.ram,
              color: '#6AD2FF',
            },
            {
              name: 'Network speed',
              data: collectedData.network,
              color: '#34c96b',
            },
          ]}
          option={{
            legend: {
              show: false,
            },

            theme: {
              mode: 'light',
            },
            chart: {
              type: 'line',

              toolbar: {
                show: false,
              },
            },

            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
            },

            tooltip: {
              style: {
                fontSize: '12px',
                fontFamily: undefined,
                backgroundColor: '#000000',
              },
              theme: 'dark',
              x: {
                format: 'dd/MM/yy HH:mm',
              },
            },
            grid: {
              show: false,
            },
            xaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: true,
              },
              labels: {
                style: {
                  colors: '#8a8a8a',
                  fontSize: '12px',
                  fontWeight: '500',
                },
              },
              type: 'text',
              range: undefined,
              categories: dates,
            },

            yaxis: {
              show: false,
            },
          }}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          {/* Peak Performance */}
          <div>
            <Peak
              data={[
                {
                  name: 'Min/Max',
                  data: [
                    Math.min(...collectedData.cpu),
                    Math.max(...collectedData.cpu),
                    Math.min(...collectedData.ram),
                    Math.max(...collectedData.ram),
                    Math.min(...collectedData.network),
                    Math.max(...collectedData.network),
                  ],
                },
              ]}
              option={{
                chart: {
                  toolbar: {
                    show: true,
                  },
                },
                tooltip: {
                  style: {
                    fontSize: '12px',
                    fontFamily: undefined,
                    backgroundColor: '#000000',
                  },
                  onDatasetHover: {
                    style: {
                      fontSize: '12px',
                      fontFamily: undefined,
                    },
                  },
                  theme: 'dark',
                },
                xaxis: {
                  categories: [
                    'Min CPU',
                    'Max CPU',
                    'Min RAM',
                    'Max RAM',
                    'Min Network',
                    'Max Network',
                  ],
                  show: false,
                  labels: {
                    show: true,
                    style: {
                      colors: '#A3AED0',
                      fontSize: '14px',
                      fontWeight: '500',
                    },
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                yaxis: {
                  show: false,
                  color: 'black',
                  labels: {
                    show: true,
                    style: {
                      colors: '#CBD5E0',
                      fontSize: '14px',
                    },
                  },
                },
                grid: {
                  show: false,
                  strokeDashArray: 5,
                  yaxis: {
                    lines: {
                      show: true,
                    },
                  },
                  xaxis: {
                    lines: {
                      show: false,
                    },
                  },
                },
                fill: {
                  type: 'gradient',
                  gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                      [
                        {
                          offset: 0,
                          color: '#4318FF',
                          opacity: 1,
                        },
                        {
                          offset: 100,
                          color: 'rgba(67, 24, 255, 1)',
                          opacity: 0.28,
                        },
                      ],
                    ],
                  },
                },
                dataLabels: {
                  enabled: false,
                },
                plotOptions: {
                  bar: {
                    borderRadius: 10,
                    columnWidth: '40px',
                  },
                },
              }}
            />
          </div>

          {/* Team Members list */}
          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            <TeamTable
              title={'Team Members'}
              list={[
                {
                  image: avatar1,
                  name: 'Sultan Yahya Alzahrani',
                  title: 'Product Manager | Tester',
                  account: '@w4ry',
                  icon: <FaDiscord />,
                },
                {
                  image: avatar2,
                  name: 'Turki Ahmed Alzahrani',
                  title: 'Programmer | Designer',
                  account: '@Cloud.Sage',
                  icon: <FaDiscord />,
                },
              ]}
            />
            <TeamTable
              title={'Spike Logs'}
              list={[
                {
                  image: warnimg,
                  name: 'Cpu Spike 95%',
                  title: '144 task',
                  account: '12 Mar',
                },
                {
                  image: warnimg,
                  name: 'Ram Spike 94%',
                  title: '144 task',
                  account: '8 Mar',
                },
                {
                  image: warnimg,
                  name: 'Ram Spike 99%',
                  title: '144 task',
                  account: '5 Mar',
                },
              ]}
            />
          </div>
        </div>

        {/* PriceList */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
          <div className="flex w-full justify-between ">
            <h1 className="text-[33px] font-bold capitalize text-navy-700 dark:text-white">
              The <span className="font-medium text-brand-300">Plans:</span>
            </h1>
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            >
              Ai Analysis 🧠
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-4">
            {plans.map((val) => (
              <Banner
                selcted={val.id == Recommendation && true}
                data={{
                  id: val.id,
                  ram: val.ram,
                  cpu: val.cpu,
                  network: val.network,
                  price: val.price,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
