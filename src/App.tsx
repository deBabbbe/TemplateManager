import "./App.css";
import Add from "@mui/icons-material/Add";
import Tree from "@naisutech/react-tree";
import { useState } from "react";

function App() {
  const entries = [
    {
      id: "AutoResponse",
      label: "Auto Response",
      parentId: null,
    },
    {
      id: "Static",
      label: "Static",
      parentId: "AutoResponse",
    },
    {
      id: "Dynamic",
      label: "Dynamic",
      parentId: "AutoResponse",
    },
    {
      label: "Anfrage",
      id: "Anfrage",
      parentId: null,
    },
    {
      label: "Auftrag",
      id: "Auftrag",
      parentId: null,
    },
    {
      label: "Beschwerde",
      id: "Beschwerde",
      parentId: null,
    },
    {
      label: "Kündigung",
      id: "Kündigung",
      parentId: null,
    },
  ];

  const [ent, setEnt] = useState(entries);
  const [entryValue, setEntryValue] = useState("");

  const handleKeyDown = (event: any) => {
    event.persist();
    if (event.key === "Enter") {
      addEntry(event.target.value);
    }
  };

  return (
    <>
      <input
        value={entryValue}
        onChange={(e) => setEntryValue(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <Add onClick={() => addEntry(entryValue)}>Hinzufügen</Add>
      <Tree noIcons={true} animations={true} nodes={ent}></Tree>
    </>
  );

  function addEntry(value: string) {
    setEntryValue("");
    setEnt([
      ...ent,
      {
        label: value,
        id: value,
        parentId: null,
      },
    ]);
  }
}
export default App;
