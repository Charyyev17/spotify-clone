import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Icon from './Icon'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex gap-x-2 items-center justify-center rounded-3xl bg-black/70 py-[2px] pb-[3px] px-[2.5px] hover:bg-neutral-800 transition-all">
          <div className="flex items-center justify-center rounded-full w-7 h-7 px-[5.5px] bg-[#535353]">
              <Icon className="w-full h-full" name="profile"/>
          </div>
          <p className="text-center text-[13px] font-semibold">nathan</p>
          <button className="pr-1.5"><Icon name="dropdown"/></button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[200px] origin-top-right divide-y divide-zinc-700 rounded bg-[#282828] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 px-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-footer-bg-hover text-white' : 'text-white',
                    'flex justify-between rounded px-3 py-2.5 text-[13px]'
                  )}
                >
                  Account
                  <Icon name="direction-link"/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-footer-bg-hover text-white' : 'text-white',
                    'block rounded px-3 py-2.5 text-[13px]'
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-footer-bg-hover text-white' : 'text-white',
                    'flex justify-between rounded px-3 py-2.5 text-[13px]'
                  )}
                >
                  Upgrade to Premium
                  <Icon name="direction-link"/>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-footer-bg-hover text-white' : 'text-white',
                    'block rounded px-3 py-2.5 text-[13px]'
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1 px-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-footer-bg-hover text-white' : 'text-white',
                    'block rounded px-3 py-2.5 text-[13px]'
                  )}
                >
                  Login
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
