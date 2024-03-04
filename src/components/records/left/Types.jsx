import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Types() {
  return (
    <div className="w-[109px] h-36 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-gray-800 text-base font-semibold  leading-normal">
        Types
      </div>
      <div className="text-gray-800 text-base font-normal  leading-normal">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="All" />
            <FormControlLabel value="male" control={<Radio />} label="Income" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Expense"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
