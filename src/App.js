import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const App = () => {
  return (
      <>
        <Header title="pokemon" descr="game"
        />
        <Layout
            id="1"
            title="pokemonLayout1"
            descr="pokemon1"
        />
        <Layout
            id="2"
            title="pokemonLayout2"
            descr="pokemon2"
            hideBackground
        />
        <Layout
            id="3"
            title="pokemonLayout3"
            descr="pokemon3"/>
        <Footer />
      </>
  )
};

export default App;
