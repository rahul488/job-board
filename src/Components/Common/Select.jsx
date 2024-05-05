import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, ListSubheader } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFilter } from "../../Redux/features/FilterSlice";

export default function AppSelect({
  label,
  options,
  multiple = false,
  isCategory = false,
  filterType,
}) {
  const [selectedArr, setSelectedArr] = React.useState(!multiple ? "" : []);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedArr(value);
    dispatch(addFilter({ type: filterType, value: value }));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple={multiple}
          value={selectedArr}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
        >
          {isCategory
            ? options.map((option) => [
                <ListSubheader key={option.category}>
                  {option.category}
                </ListSubheader>,
                option.options.map((op) => (
                  <MenuItem key={op?.id} value={op?.value}>
                    {op?.label}
                  </MenuItem>
                )),
              ])
            : options.map((option) => (
                <MenuItem key={option?.id} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
  );
}
