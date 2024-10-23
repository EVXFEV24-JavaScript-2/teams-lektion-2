class Country {
  constructor(name, continent, population) {
    this.name = name;
    this.continent = continent;
    this.population = population;
  }
}

// DESTRUCTURING EXAMPLE
const country = new Country("Sweden", "Europe", 4389);
// Vanligt
console.log(country.name);
console.log(country.continent);
console.log(country.population);

// Destructuring
const { name, continent, population } = country;
console.log(name);
console.log(continent);
console.log(population);
// ----------------------------

// Utan destructuring
/*function MyButton(props) {
    return (
      <div className={props.hej}>
        <button>{props.title}</button>
      </div>
    );
  }*/

// Med destructuring
function MyButton({ hej, title, run }) {
  run();

  return (
    <div className={hej}>
      <button>{title}</button>
    </div>
  );
}

export function PropsExample() {
  return (
    <div>
      <MyButton hej="något" title="Pannkaka" run={() => console.log("HEJ!")} />
      <MyButton title="Exit" />
      <MyButton />
      <MyButton />

      <CountryTable />
    </div>
  );
}

function CountryRow(props) {
  return (
    <tr>
      <td>{props.country.name}</td>
      <td>{props.country.continent}</td>
      <td>{props.country.population}</td>
    </tr>
  );
}

function CountryTable() {
  const countries = [
    new Country("France", "Europe", 64766868),
    new Country("Sweden", "Europe", 10617537),
    new Country("Japan", "Asia", 123235518),
    new Country("China", "Asia", 1425627628),
    new Country("Spain", "Europe", 47515521),
    new Country("Brazil", "South America", 216529995),
    new Country("Canada", "North America", 38810093),
  ];

  const trElements = countries.map((country) => (
    <CountryRow country={country} />
  ));

  return (
    <div>
      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
          <th>Population</th>
        </tr>
        {trElements}
      </table>
    </div>
  );
}
