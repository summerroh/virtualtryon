import Image from "next/image";
import React from "react";

const tableData = [
  {
    header: "",
    items: ["", "Jano", "Jano", "Hostgator", "GoDaddy"],
  },
  {
    header: "Unlimited Email",
    items: [true, true, false, false],
  },
  {
    header: "Hosting",
    items: [true, true, true, true],
  },
  {
    header: "Unlimited Website & Domain",
    items: [true, false, true, false],
  },
  {
    header: "Email & Live chat",
    items: [true, true, false, false],
  },
  {
    header: "Backling",
    items: [true, false, false, false],
  },
  {
    header: "Unlimited Domain",
    items: [true, false, true, true],
  },
  {
    header: "Discount Program",
    items: [false, true, false, true],
  },
  {
    header: "Lowest Price",
    items: [true, false, false, false],
  },
  {
    header: "24x7 Support",
    items: [true, true, true, true],
  },
  {
    header: "Affiliate Program",
    items: [true, false, false, true],
  },
  {
    header: "Custom WordPress",
    items: [true, true, false, true],
  },
  {
    header: "FTP Transfer",
    items: [true, true, true, true],
  },
];

const CompareTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          {tableData[0].items.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{row.header}</th>
            {row.items.map((item, colIndex) => (
              <td key={colIndex}>
                {item && (
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon_166.svg"
                    alt="icon"
                    className="lazy-img m-auto"
                  />
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompareTable;
