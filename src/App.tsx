import "./App.css";
import Categories from "./components/Categories";
import RichTextEditor from "react-rte";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  return (
    <>
      <div className="row">
        <div className="column-left">
          <Categories />
        </div>
        <div className="column-mid">
          <RichTextEditor value={value}></RichTextEditor>
        </div>
        <div className=".column-right">Placeholder</div>
      </div>
    </>
  );
}
export default App;
