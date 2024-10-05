import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers";

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <label htmlFor="albumDate" className="text-lg">
        Data do Álbum
      </label>
      <MobileDatePicker
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "transparent",
            color: "white", // Text color
            height: "5.3rem",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Border color
          },
          "& .MuiInputLabel-root": {
            color: "gray", // Placeholder color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white", // Placeholder color when focused
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white", // Color of the placeholder text itself
          },
        }}
      />
    </LocalizationProvider>
  );
}
