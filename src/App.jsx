import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/Card";

const perros = [
  {
    nombre: "Toby",
    desc: "Energético y amigable. Busca un hogar activo que adore aventuras y abrazos peludos.",
    image: "https://placedog.net/300/200/?id=5",
    color: "primary",
    texto: "Husky",
  },
  {
    nombre: "Rocky",
    desc: "Dulce y leal, perfecto para familias. Siempre listo para jugar y llenar tu vida de amor.",
    image: "https://placedog.net/300/200/?id=3",
    color: "success",
    texto: "Golden Retriever",
  },
  {
    nombre: "Max",
    desc: "Pequeño, valiente y lleno de personalidad. Ideal para un dueño cariñoso y divertido.",
    image: "https://placedog.net/300/200/?id=14",
    color: "warning",
    texto: "Corgi",
  },
  {
    nombre: "Luna",
    desc: "Inteligente y protector, busca un hogar con espacio y amor para dar. Compañero leal para toda la vida.",
    image: "https://placedog.net/300/200/?id=35",
    color: "info",
    texto: "Pastor Alemán",
  },
];

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <div className="containerCards">
        {perros.map((perro) => (
          <MyCard
            key={perro.nombre}
            nombre={perro.nombre}
            desc={perro.desc}
            image={perro.image}
            color={perro.color}
            texto={perro.texto}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
