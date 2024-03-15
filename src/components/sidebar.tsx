import { HiX } from 'react-icons/hi';
import Links from 'components/Links';
import {
  MdDashboard,
  MdOutlinePeopleAlt,
  MdAttachMoney,
  MdOutlineSettings,
} from 'react-icons/md';

function Sidebar(props: { [x: string]: any }) {
  const { open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-background-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={`mx-[48px] mt-[50px] flex items-center`}>
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[32px] font-bold uppercase text-navy-700 dark:text-white">
          Cloud <span className="font-medium text-brand-300">SAGE</span>
        </div>
      </div>
      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />

      {/* Nav item */}
      <ul className="mb-auto pt-1 text-xl">
        <Links active={true} href="#" name="DashBoard" icon={<MdDashboard />} />
        <Links
          active={false}
          href="#"
          name="Pricing"
          icon={<MdAttachMoney />}
        />
        <Links
          active={false}
          href="#"
          name="Team"
          icon={<MdOutlinePeopleAlt />}
        />
        <Links
          active={false}
          href="#"
          name="Settings"
          icon={<MdOutlineSettings />}
        />
      </ul>
      {/* Nav item end */}
    </div>
  );
}

export default Sidebar;
