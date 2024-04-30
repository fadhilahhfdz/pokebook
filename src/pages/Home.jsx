import ReactSelect from "react-select";
import wave from "../assets/wave.svg";
import FlipCard from "../components/FlipCard";
import { MdElectricBolt } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Modal from "../components/Modal";
import { IoIosWater } from "react-icons/io";
import { SiGhostery } from "react-icons/si";

const Home = () => {
  const [pokemonOption, setPokemonOption] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({});

  const fetchData = async (search, currentPage) => {
    try {
      let url = search
        ? `https://pokeapi.co/api/v2/pokemon/${search}`
        : "https://pokeapi.co/api/v2/pokemon?limit=6&offset=" +
          (currentPage - 1) * 6;

      const res = await axios.get(url);

      if (!search) {
        const pokemonList = res.data.results;
        const pokemonDetails = await Promise.all(
          pokemonList.map(async (item) => {
            try {
              const pokeRes = await axios.get(item.url);
              return {
                ...pokeRes.data,
                name: item.name,
                image:
                  pokeRes.data.sprites.other["official-artwork"].front_default,
                url: item.url,
                abilities: pokeRes.data.abilities,
                types: pokeRes.data.types,
              };
            } catch (error) {
              console.log(error);
            }
          })
        );
        setPokemonData(pokemonDetails.filter((pokemon) => pokemon !== null));
      } else {
        setPokemonData(
          res.data.name && [
            {
              ...res.data,
              name: res.data.name,
              image: res.data.sprites.other["official-artwork"].front_default,
              url: res.data.url,
              abilities: res.data.abilities,
              types: res.data.types,
            },
          ]
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOptions = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      setPokemonOption(
        res.data.results.map((item) => ({
          value: item.name,
          label: item.name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchChange = (selectedOptions) => {
    if (selectedOptions) {
      setSearchTerm(selectedOptions.value.toLowerCase());
    } else {
      setSearchTerm("");
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleDetail = async (data) => {
    setModalOpen(true);
    try {
      const res = await axios.get(data.url);
      setPokemonDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(searchTerm, currentPage);
    fetchOptions();
  }, [searchTerm, currentPage]);

  useEffect(() => {
    setPokemonDetail(pokemonData[0]);
  }, [pokemonData]);

  return (
    <>
      <div className="w-full">
        <div className="w-full relative">
          <img
            src="https://wallpapercave.com/wp/wp1864294.jpg"
            alt="PokeBook"
            className="w-full object-cover object-center h-[25rem] md:h-[40rem]"
          />
        </div>
        <div className="relative w-full">
          <img
            src={wave}
            alt="wave"
            className="absolute bottom-0 left-0 w-full max-w-full"
          />
        </div>

        <div className="h-auto">
          <h1 className="text-xl md:text-4xl text-center font-semibold font-kodeMono flex items-center justify-center z-10 ">
          Pokémon Teratas
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center align-middle mt-5 mb-14 w-full">
            <FlipCard
              img="https://pngimg.com/uploads/pokemon/pokemon_PNG146.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-purple-500 w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <MdElectricBolt className="w-24 h-24" color="yellow" />
                    <h1 className="text-center font-kodeMono">Pikachu</h1>
                  </div>
                </div>
              }
            />
            <FlipCard
              img="https://i.pinimg.com/originals/fb/b0/54/fbb054808110b869fa62e3db0cb14e4b.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-green-400 w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%",
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <IoIosWater
                      className="w-24 h-24"
                      color="blue"
                    />
                    <h1 className="text-center font-kodeMono">Greninja</h1>
                  </div>
                </div>
              }
            />
            <FlipCard
              img="https://i.pinimg.com/originals/96/79/85/967985ca22b2b00b485eca2bd47295d2.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-black w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%",
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <SiGhostery
                      className="w-24 h-24"
                      color="white"
                    />
                    <h1 className="text-center font-kodeMono">Gengar</h1>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <h1 className="text-xl md:text-4xl text-center font-semibold font-kodeMono flex items-center justify-center z-10">
          Cari Pokémon Anda
        </h1>
        <div className="input-container flex justify-center my-5 mb-[5rem]">
          <ReactSelect
            onChange={handleSearchChange}
            className="w-full md:w-1/2 p-2 rounded-md font-kodeMono"
            placeholder="Cari Pokémon"
            isClearable={true}
            name="pokeData"
            options={pokemonOption}
          />
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {pokemonData.map((pokemon, index) => (
            <div key={index} className="w-full">
              <Card
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                abilities={pokemon.abilities}
                handleDetail={() => handleDetail(pokemon)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center container mx-auto my-5">
          <button
            className="mx-2 px-4 py-2 bg-cyan-600 rounded-md text-white disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            <FaAngleLeft />
          </button>
          <span className="mx-2 px-4 py-2">{currentPage}</span>
          <button
            className="mx-2 px-4 py-2 bg-cyan-600 rounded-md text-white disabled:opacity-50"
            disabled={pokemonData.length === 1}
            onClick={handleNextPage}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <Modal
        modalOpen={modalOpen}
        toggleModal={() => {
          setModalOpen(!modalOpen);
        }}
        data={pokemonDetail}
      />
    </>
  );
};

export default Home;
