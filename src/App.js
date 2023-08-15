import "./App.scss";
import Card from "./components/Card/Card";

const fakeResponse = [
    {
        id: 0,
        imgBase: "./headphones.jpg",
        price: 100,
        title: "Zebronics head phone",
        desc: "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
    },
];

function App() {
    return (
        <div className="App">
            {fakeResponse.map((item) => {
                return <Card key={item.id} imgBase={item.imgBase} price={item.price} title={item.title} desc={item.desc} />;
            })}
        </div>
    );
}

export default App;
