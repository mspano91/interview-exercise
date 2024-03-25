import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ticker_by_date } from "../../utils/fetchData";
import { setSelected } from "../../redux/slice";
import { useDispatch } from "react-redux";

export default function StyledDatePicker(selectedName) {
  const dispatch = useDispatch();

  const [fromDate, setFromDate] = React.useState(dayjs("2023-01-01"));
  const [toDate, setToDate] = React.useState(dayjs("2023-01-12"));

  const handleToDateChange = (newValue) => {
    setToDate(newValue);
  };

  const formatDate = (date) => {
    return date.format("YYYY-MM-DD");
  };

  const handleSubmit = async () => {
    const dateRange = {
      from: formatDate(fromDate),
      to: formatDate(toDate),
    };
    alert(
      "the api free serial alow just date range between january to december 2023"
    );

    const response = await ticker_by_date(selectedName, dateRange);
    dispatch(setSelected(response));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            className="bg-slate-500 opacity-90 rounded-md"
            label="From"
            defaultValue={fromDate}
            onChange={(newValue) => setFromDate(newValue)}
          />
          <DatePicker
            className="bg-slate-500 opacity-90 rounded-md"
            label="To"
            value={toDate}
            onChange={handleToDateChange}
          />
          <button
            className="rounded flex jusify-center items-center  border  p-2  hover:bg-[#359EA4]  cursor-pointer text-white hover:text-white "
            onClick={handleSubmit}
          >
            Show range
          </button>
        </DemoContainer>
      </div>
    </LocalizationProvider>
  );
}
