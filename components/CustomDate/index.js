import { format } from 'date-fns';

const CustomDate = ({ dateTime, formatPattern }) => {
  const formattedDate = format(new Date(dateTime), formatPattern);

  return <>{formattedDate}</>;
};

export default CustomDate;
