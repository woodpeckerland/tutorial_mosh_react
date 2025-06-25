import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibilty] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibilty(false)}>
            Hier steht deine Information
          </Alert>
        )}
        <Button color="info" onClick={() => setAlertVisibilty(true)}>
          Info
        </Button>
      </div>
    </>
  );
}

export default App;
