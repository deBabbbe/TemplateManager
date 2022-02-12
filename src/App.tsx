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

  function addEntry(value: string, parentId: string | null) {
    if (!value) return;
    if (!(ent as []).map((e) => e.label).includes(value)) {
      setEntryValue("");
      setEnt([
        ...ent,
        {
          label: value,
          id: value,
          parentId,
        },
      ]);
    }
  }

  const handleKeyDown = (event: any) => {
    event.persist();
    if (event.key === "Enter") {
      const nodeId = nodeSelected ? nodeSelected : null;
      addEntry(event.target.value, nodeId);
    }
  };

  const [nodeSelected, setNodeSelected] = useState("");

  const onSelectNode = (nodes) => {
    if (nodes.length > 0) {
      setNodeSelected(nodes[0]);
    }
  };
  return (
    <>
      <input
        value={entryValue}
        onChange={(e) => setEntryValue(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      <Add onClick={() => addEntry(entryValue, null)}>Hinzufügen</Add>
      <Tree
        noIcons={true}
        onSelect={onSelectNode}
        animations={true}
        nodes={ent}
      ></Tree>
    </>
  );
}
export default App;
