import React from 'react'
import {  add,
    differenceInDays,
    endOfMonth,
    format,
    setDate,
    startOfMonth,
    sub,} from "date-fns";
import Cell from './Cell';

const Calendar = ({value, onChange}) => {
    const currentDate=format(value, "dd/MM/yyyy");
    const currentYear=format(value, 'yyyy');
    const currentMonth=format(value, 'MMMM');
    const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const prevMonth = () => {  onChange(sub(value, { months: 1 }));}
    const nextMonth = () => onChange(add(value, { months: 1 }));
    const prevYear = () => onChange(sub(value, { years: 1 }));
    const nextYear = () => onChange(add(value, { years: 1 }));

  return (
    <div className='calendar'>
        <div className='calendarHeader'> 
        <Cell onClick={prevYear}>{"<<"}</Cell>
        <Cell onClick={prevMonth}>{"<"}</Cell>
        
        <Cell className="col-span-3">{format(value, "LLLL yyyy")}</Cell>
          
          <Cell onClick={nextMonth}>{">"}</Cell>
        <Cell onClick={nextYear}>{">>"}</Cell>
          </div>
        <div className="calendarBody">
        {weeks.map((week) => (
          <div className="text-xs font-bold uppercase">{week}</div>
        ))}
{Array.from({ length: prefixDays }).map((_, index) => (
            <Cell  key={index} ></Cell>
        ))}
{Array.from({ length: numDays }).map((_, index) => {
        const date = index + 1;
        const isCurrentDate = date === value.getDate();
        return (
            <Cell 
              key={date}
              isActive={isCurrentDate}
             // onClick={() => handleClickDate(date)}
            >
              {date}
            </Cell>
          );
        
})}

{Array.from({ length: suffixDays }).map((_, index) => (
              <Cell  key={index} ></Cell>
        ))}
        </div>
    </div>
  )
}

export default Calendar