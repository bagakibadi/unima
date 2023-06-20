import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export const LiSidebar = ({ data, dataContent }) => {
  const clickContent = (e, items) => {
    e.preventDefault();
    callContent(items);
  };

  const callContent = (items) => {
    if (items.children && items.children.length > 0) return;

    dataContent(items.id);
  };

  return data.map((items) => (
    <>
      <li className="parent-sidebar">
        <Link onClick={(e) => clickContent(e, items)} href="#">
          {items.title}
        </Link>
        {items.children && items.children.length > 0
          ? items.children.map((obj) => (
              <ul className="hidden-child-sidebar">
                <Link onClick={(e) => clickContent(e, obj)} href="#">
                  {obj.title}
                </Link>
              </ul>
            ))
          : ''}
      </li>
    </>
  ));
};
