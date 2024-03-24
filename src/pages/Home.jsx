import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const people = [
  { name: "Choose a UF webpage to check" },
  { name: "Office of Admissions" },
  { name: "College of Ag. and Life Sciences" },
  { name: "UF ADA Compliance" },
  { name: "ACIS – Advanced Computing and Infor..." },
];



function Home({ sites }) {
  const [selected, setSelected] = useState(people[0]);

  const handleButtonClick = () => {
    if (selected.name !== "Choose a UF webpage to check") {
      let url;
      if (selected.name == "Office of Admissions") {
         url = '/page/100'
      }
      else if (selected.name == "College of Ag. and Life Sciences") {
           url = '/page/108'
      }
      else if (selected.name == "UF ADA Compliance") {
           url = '/page/118'
      }
      else if (selected.name == "ACIS – Advanced Computing and Infor...") {
           url = '/page/102'
      }
      window.location.href = url;
    }
  };

  return (
    <div className="bg-white">
      <div className="relative px-6 isolate lg:px-8">
        <div
          className="absolute inset-x-0 overflow-hidden -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-2xl py-24 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Access For All
            </h1>
            <p className="mt-6 leading-8 text-[1.05rem] text-gray-600">
              Many websites lack proper accessiblity features, creating barriers
              for people with disabilities to access essential information and
              services provided by the University of Florida. This app aims to
              highlight and rectify accessability issues on UF websites.
            </p>

            <div className="flex items-center justify-center">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative mt-5 w-[20rem] cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronUpDownIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <div className="flex items-center justify-center gap-x-6">
                <div
                  
                  onClick={handleButtonClick}
                  className="rounded-md bg-indigo-600 ml-3 mt-5 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {"Search"}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <span className="font-bold">Other tools</span>
              <Link
                to={"/forum"}
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 underline decoration-sky-500 decoration-2"
              >
                View forum
              </Link>
              <Link
                to={"/sites"}
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 underline decoration-sky-500 decoration-2"
              >
                View all sites
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-6 -mt-4">
        <h1 className="text-3xl font-bold text-gray-900 underline decoration-purple-500 decoration-4">
          Least Accessible Sites
        </h1>
      </div>

      <div className="flex items-center justify-center mb-8 gap-x-4">
        {sites
          .slice()
          .sort((a, b) => b.aria_count - a.aria_count)
          .slice(0, 3)
          .map((site) => (
            <Card site={site} key={site.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
