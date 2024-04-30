const About = () => {
  return (
    <div className="mx-5 md:container md:mx-auto py-8 grid grid-cols-1 md:grid-cols-2 h-screen place-content-center">
      <div className="w-full md:w-2/4 mx-auto">
        <img
          src="https://static.pokemonpets.com/images/monsters-images-800-800/8-Wartortle.png"
          alt="Bulbasaur"
          className="w-full rounded-lg"
        />
      </div>
      <div className="detail">
        <div className="flex justify-start items-center">
          <h1 className="text-3xl font-semibold">About PokeBook</h1>
          <img
            src="https://www.animaatjes.nl/games/games/pokemon/animaatjes-pokemon-414321.gif"
            alt="Charizard"
            className="w-20"
          />
        </div>
        <p className="mb-4">
          PokeBook merupakan sumber informasi mengenai Pokémon. Kami menyediakan
          data lengkap tentang berbagai Pokémon, termasuk detail tentang jenis
          dan kemampuan.
        </p>
        <p className="mb-4">
          Tim kami berkomitmen untuk memberikan informasi yang akurat dan
          terbaru kepada para penggemar Pokémon di seluruh dunia.
        </p>
      </div>
    </div>
  );
};

export default About;
