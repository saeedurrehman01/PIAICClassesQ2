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
    }
  ];
  return (
    <div>
      <h1>List of Directors</h1>

      {listOfDirectors.map((item, index)=>{
        return(
            <div>
                <h2>Name: {item.name}</h2>
                <h2>Age: {item.age}</h2>
                <h2>Intro: {item.intro}</h2>
            </div>
        )
      })}

      {/* {listOfDirectors.map((item, index) => {
        return (
          <h2>
            {index + 1} - {item}
          </h2>
        );
      })} */}
    </div>
  );
}
