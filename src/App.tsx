import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
let items = [ 'Zagreb', 'Split', 'Osijek', 'Rijeka', 'Varaždin' ];

const handleSelectItem = (item: string) => {
  console.log(item);
}

function App (){
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Some sample alert.</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>Show Alert!</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </>
  )
}

export default App;