import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export const LiSidebar = ({ data, dataContent }) => {
  const openContent = (e, items) => {
    e.preventDefault();
    if (items.children && items.children.length > 0) return;

    fetchGetContent(items.id);
  };

  const fetchGetContent = async (id) => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_SIDEBAR + 'about/' + id
    );
    dataContent(response.data.data);
  };
  return data.map((items) => (
    <>
      <li className="parent-sidebar">
        <Link onClick={(e) => openContent(e, items)} href="#">
          {items.title}
        </Link>
        {items.children.length > 0
          ? items.children.map((obj) => (
              <ul className="hidden-child-sidebar">
                <Link onClick={(e) => openContent(e, obj)} href="#">
                  {obj.title}
                </Link>
              </ul>
            ))
          : ''}
      </li>
    </>
  ));
};
