import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import BgImg from '../../assets/bg3.jpg'

import './style.module.css'

import POKEMONS from "../../assets/POKEMONS";


const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page)
    }
    return (
        <>
            <Header
                title="pokemon"
                descr="game"
                onClickButton={handleClickButton}
            />
            <Layout
                id="1"
                title="pokemonLayout1"
                urlBg={BgImg}
            >
            </Layout>
            <Layout
                id="2"
                title="pokemonLayout2"
                hideBackground
            >
                <div className="flex">
                    {
                        POKEMONS.map((item) => <PokemonCard key={item.id} {...item}/>)
                    }
                </div>
            </Layout>
            <Layout
                id="3"
                title="pokemonLayout3"
                urlBg={BgImg}
            >
            </Layout>
            <Footer />
        </>
    )
};

export default HomePage;