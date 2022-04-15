import React from "react";
import { Card, Typography } from "antd";
import "./InfoBox.css";

// const { Title, Paragraph, Text, Link } = Typography;

const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <Typography className="infoBox__title" color="textSecondary">
        {title}
      </Typography>

      <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
        {cases}
      </h2>

      <Typography className="infoBox__total" color="textSecondary">
        {total} Total
      </Typography>
    </Card>
  );
};

export default InfoBox;
