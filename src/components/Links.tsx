import React from 'react';
import NavLink from 'components/NavLink';

export const SidebarLinks = (props: {
  active: boolean;
  name: string;
  icon: any;
  href: string;
}): JSX.Element => {
  const { active, name, icon, href } = props;

  return (
    <NavLink href={href}>
      <div className="relative mb-3 flex hover:cursor-pointer">
        <li className="my-[3px] flex cursor-pointer items-center px-8">
          <span
            className={`${
              active === true
                ? 'font-bold text-brand-500 dark:text-white'
                : 'font-medium text-gray-600'
            }`}
          >
            {icon}{' '}
          </span>
          <p
            className={`leading-1 ml-4 flex ${
              active === true
                ? 'font-bold text-navy-700 dark:text-white'
                : 'font-medium text-gray-600'
            }`}
          >
            {name}
          </p>
        </li>
        {active ? (
          <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
        ) : null}
      </div>
    </NavLink>
  );
};

export default SidebarLinks;
