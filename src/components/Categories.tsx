import { useState } from "react";
import Add from "@mui/icons-material/Add";
import Tree, { NodeId } from "@naisutech/react-tree";

export default function Categories() {
  const entries: any = [
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
    if (!ent.map((e: any) => e.label).includes(value)) {
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

  const onSelectNode = (id: Array<NodeId>): void => {
    if (id.length > 0) {
      setNodeSelected(id[0] as any);
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
      />
    </>
  );
}
