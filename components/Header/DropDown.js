import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
  }
  

const DropDown = ({address, disconnectWallet}) => {
  return (
	<div className='w-full h-8 flex justify-between items-center px-8 text-white'>
	  <ul className='flex items-center'>
	<Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-black text-sm font-medium text-white-700 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
		{ address.slice(0, 6).concat("...").concat(address.slice(-4)) }
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? ' text-gray-900' : 'text-gray-700',
                    'block px-2 py-2 text-sm'
                  )}
				  onClick={disconnectWallet}
                >
                  Disconect Wallet
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

	  </ul>
	</div>
  );
}

export default DropDown;