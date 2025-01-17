import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  id: string;
  titulo: string;
  descricao: string;
  rota: string;
  BotaoIcon: ReactElement;
  DescricaoIcon: ReactElement
  acao: string;
}

const ItemLista = ({ id, titulo, descricao, rota, BotaoIcon, DescricaoIcon, acao }: ItemProps) => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  
  return (
    <div
      key={id}
      className="lg:flex lg:items-center lg:justify-between mt-10 border-b border-gray-900/10 pb-7"
    >
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight font-inter">
          {titulo}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <div>{DescricaoIcon}</div>
            {descricao}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="ml-3 hidden sm:block">
          <Link
            to={`/${rota}/${id}`}
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <div>{BotaoIcon}</div>
            {acao}
          </Link>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default ItemLista;
