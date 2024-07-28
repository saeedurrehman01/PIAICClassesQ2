import { director } from "../interfaces/commonTypes";

export default function About() {
  const listOfDirectors: director[] = [
    {
      name: "Saeed",
      age: 26,
      intro: "Web Developer",
    },
    {
      name: "Zain",
      age: 25,
      intro: "Blockchain Developer",
    },
    {
      name: "Naveed",
      age: 24,
      intro: "Manager",
    },
  ];
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">About Our Directors</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Intro</th>
            </tr>
          </thead>
          <tbody>
            {listOfDirectors.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.age}</td>
                <td className="py-3 px-4">{item.intro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
