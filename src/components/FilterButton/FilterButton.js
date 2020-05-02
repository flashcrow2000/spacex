import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import classes from "./styles.module.css";

const WhiteSelect = withStyles((theme) => ({
  icon: {
    color: "white",
  },
  select: {
    "&:focus": {
      background: "#215184",
    },
  },
}))(Select);

const BootstrapInput = withStyles((theme) => ({
  input: {
    position: "relative",
    backgroundColor: "#215184",
    color: "white",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Brandon Grotesque"].join(","),
  },
}))(InputBase);

const FilterButton = ({ years, selectedYears, setSelectedYears }) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  //const [selectedYears, setSelectedYears] = React.useState([]);
  const handleChange = (event) => {
    setSelectedYears(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <WhiteSelect
          className={classes.select}
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          displayEmpty
          value={selectedYears}
          onChange={handleChange}
          input={<BootstrapInput />}
          renderValue={() => "Filter by year"}
          MenuProps={MenuProps}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              <Checkbox checked={selectedYears.indexOf(year) > -1} />
              <ListItemText primary={year} />
            </MenuItem>
          ))}
        </WhiteSelect>
      </FormControl>
    </div>
  );
};

export default FilterButton;
