import Link from 'next/link';
import React from 'react';
import CustomDate from '../CustomDate';

const AgendaInfoCard = ({ data }) => {
  const startDate = new Date(data.start_date);
  const endDate = new Date(data.end_date);
  const formatStart = startDate.toISOString();
  const formatEnd = endDate.toISOString();
  const startFormat = formatStart.replace(/[-:.\s]/g, '');
  const endFormat = formatEnd.replace(/[-:.\s]/g, '');

  const linkCalendar = `https://calendar.google.com/calendar/u/2/r/eventedit?text=${data.title}&dates=${startFormat}/${endFormat}&output=xml&pli=1`;
  console.log(linkCalendar);
  return (
    <div className="col-md-3 mb-4">
      <div className="card-agenda-info">
        <div className="row-info">
          <i className="fa fa-calendar"></i>
          <span>
            <CustomDate
              dateTime={data.start_date}
              formatPattern="dd MMM hh:mm"
            />{' '}
            -{' '}
            <CustomDate dateTime={data.end_date} formatPattern="dd MMM hh:mm" />
          </span>
        </div>
        {/* <div className="row-info">
          <i className="fa fa-clock-o"></i>
          <span>10:00 - 11:00</span>
        </div> */}
        <div className="row-info">
          <i className="fa fa-map-marker"></i>
          <span>{data.location}</span>
        </div>
        <div className="row-button">
          {data.link ? (
            <div className="join-btn">
              <Link
                href={data.link}
                target="_blank"
                className="btn btn-blue w-100"
              >
                Join
              </Link>
            </div>
          ) : (
            ''
          )}
          <div className="calendar-btn">
            <Link
              href={linkCalendar}
              target="_blank"
              className="btn btn-calendar w-100"
            >
              Add to Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaInfoCard;
