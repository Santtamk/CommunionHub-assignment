import React from "react";
import { Card } from "antd";
import { FaCalendarAlt } from "react-icons/fa";

const { Meta } = Card;
const CardCom = ({ title, date, location, category }) => (
  <Card
    style={{
      width: 300,
      height: 380,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    className=""
  >
    <div>
      <div className="bg-gray-300 w-min rounded px-2 my-2">FREE</div>
      <div className="text-gray-900 font-bold text-xl">{title}</div>
      <p className="text-gray-600">{category}</p>
      <div className="text-gray-600 my-2 flex items-center gap-1">
        <span className="">
          <FaCalendarAlt />
        </span>
        <span className="text-base font-medium">{date} (time)</span>
      </div>
      <div className="font-semibold text-gray-600">{location}</div>
    </div>
  </Card> 
);
export default CardCom;
