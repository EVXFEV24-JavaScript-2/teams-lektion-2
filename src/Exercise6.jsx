class Country {
  constructor(name, continent, population) {
    this.name = name;
    this.continent = continent;
    this.population = population;
  }
}

export function CountryExercise() {
  const countries = [
    new Country("France", "Europe", 64766868),
    new Country("Sweden", "Europe", 10617537),
    new Country("Japan", "Asia", 123235518),
    new Country("China", "Asia", 1425627628),
    new Country("Spain", "Europe", 47515521),
    new Country("Brazil", "South America", 216529995),
    new Country("Canada", "North America", 38810093),
  ];

  const trElements = countries
    // Smart lösning på sort
    .sort((a, b) => b.population - a.population)
    // En annan lösning på sort
    /*.sort((a, b) => {
      if (a.population > b.population) {
        return -1;
      } else {
        return 1;
      }
    })*/
    .map((country) => (
      <tr>
        <td>{country.name}</td>
        <td>{country.continent}</td>
        <td>{country.population}</td>
      </tr>
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
