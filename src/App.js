import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import EyeIcon from "./components/icons/eye";
import MobileIcon from "./components/icons/mobile";

const cardMenu = [
  {
    title: "Create New Service",
    icon: <MobileIcon></MobileIcon>,
  },
  {
    title: "Create New Service 2",
    icon: <MobileIcon></MobileIcon>,
  },
  {
    title: "Create New Service 3",
    icon: <MobileIcon></MobileIcon>,
  },
  {
    title: "Create New Service 4",
    icon: <MobileIcon></MobileIcon>,
  },
  {
    title: "Create New Service 5",
    icon: <MobileIcon></MobileIcon>,
  },
  {
    title: "Create New Service",
    icon: <MobileIcon></MobileIcon>,
  },
];

function App() {
  return (
    <>
      <div
        className="flex"
        style={{ width: "auto", gap: "8px", flexDirection: "row" }}
      >
        {cardMenu.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            button={<Button></Button>}
          ></Card>
        ))}
      </div>
      <div
        className="flex"
        style={{ width: "990px", gap: "8px", marginTop: "8px" }}
      >
        <Card
          title={"Create New Service"}
          icon={<MobileIcon></MobileIcon>}
          button={<Button></Button>}
        ></Card>
        <Card
          title={"Create New Service"}
          icon={<EyeIcon />}
          button={<Button></Button>}
        ></Card>
        <Card
          title={"Create New Service"}
          icon={<MobileIcon></MobileIcon>}
          button={<Button></Button>}
        ></Card>
        <Card
          title={"Create New Service"}
          icon={<EyeIcon />}
          button={<Button></Button>}
        ></Card>
        <Card
          title={"Create New Service"}
          icon={<MobileIcon></MobileIcon>}
          button={<Button></Button>}
        ></Card>
        <Card
          title={"Create New Service"}
          icon={<EyeIcon />}
          button={<Button></Button>}
        ></Card>
      </div>
    </>
  );
}

export default App;
