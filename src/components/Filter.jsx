/* eslint-disable react/prop-types */
import { Autocomplete, Chip, TextField } from "@mui/material";

const Filters = ({ data, label, value, setValue }) => {
  return (
    <>
      <Autocomplete
        sx={{ height: "100px" }}
        multiple
        id="fixed-tags-demo"
        value={value[label] || []}
        onChange={(event, newValue) => {
          setValue((prevFilters) => ({
            ...prevFilters,
            [label]: newValue || [],
          }));
        }}
        options={data}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              key={`${label}-${index}`}
              label={option.title}
              {...getTagProps({ index })}
            />
          ))
        }
        style={{ minwidth: 200 }}
        renderInput={(params) => (
          <TextField {...params} label={label} size="small" />
        )}
      />
    </>
  );
};

export default Filters;
