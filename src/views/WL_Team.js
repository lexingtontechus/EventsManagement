/* eslint-disable no-unused-vars */
const people = [
  {
    name: "Adrianne Phillips",
    title: "CEO",
    linkedin: "https://linkedin.com/",
    email: "admin@travelersq.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/images%2Ftq_adriannephillips.jpg?alt=media&token=aee1482c-1c6d-4b7a-b42e-d3014070ce34"
  },
  {
    name: "Kristen Ramos",
    title: "Head of Marketing",
    linkedin: "https://linkedin.com/",
    email: "kristen.ramos@travelersq.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Ted Fox",
    title: "Head of Customer Service",
    linkedin: "https://linkedin.com/",
    email: "ted.fox@travelersq.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Mary Page",
    title: "Head of Customer Service",
    linkedin: "https://linkedin.com/",
    email: "mary.page@travelersq.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/images%2Fteam3-800x800.jpg?alt=media&token=445ee35b-ccea-4a1c-829c-37b2ae3523dd"
  }
];

{
  /*
export default function Team() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        
        <li key={person.email} className="py-4 flex">
          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
*/
}

export default function Team() {
  return (
    <div className="flex flex-wrap">
      {people.map((person) => (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
          <div className="px-6">
            <div key={person.email} className="pt-6 text-center">
              <img
                className="shadow-lg rounded-full mx-auto max-w-120-px"
                src={person.image}
                alt=""
              />
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    {person.email}
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </button>
                    <button
                      className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-dribbble"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
/* eslint-enable no-unused-vars */
