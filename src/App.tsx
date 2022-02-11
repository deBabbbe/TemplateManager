import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Tree from '@naisutech/react-tree'

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
      label: "Anfrage", id: "Anfrage", parentId: null
    },
    {
      label: "Auftrag", id: "Auftrag", parentId: null
    },
    {
      label: "Beschwerde", id: "Beschwerde", parentId: null
    },
    {
      label: "Kündigung", id: "Kündigung", parentId: null
    }
  ]

  const [ent, setEnt] = useState(entries);
  const [entryValue, setEntryValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.persist();
    if (event.key === "Enter") {
      setEntryValue("");
      console.warn(event.target.value)
      setEnt([...ent, {
        label: event.target.value, id: event.target.value, parentId: null
      }])
    }
  };

  return (
    <>
      <input value={entryValue} onChange={(e) => setEntryValue(e.target.value)} onKeyDown={handleKeyDown}></input>
      <Tree animations={true} nodes={ent}></Tree>
    </>
  )
}
export default App
