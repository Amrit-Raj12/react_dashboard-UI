import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import "./Cases.css";
import { Card, Form, Select } from "antd";

const { Option } = Select;

const gridStyle = {
  textAlign: "center",
  margin: "0",
  padding: "0",
  marginRight: "10px",
  height: "100%",
};

const Cases = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("deaths");

  //   Fetching Covid cases data
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //   Fetching Covid cases data  by Country
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  //   Change data using select
  const onCountryChange = async (value) => {
    const countryCode = value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  console.log("Country Info >>>>>>>", countryInfo);

  // const selectStyle = {
  //   padding: "8px 12px",
  //   color: "#333333",
  //   backgroundColor: "#eeeeee",
  //   border: "1px solid #dddddd",
  //   cursor: "pointer",
  //   boderRadius: "5px",
  // };

  // const changeColor = () => {
  //   console.log("cases");
  //   setCasesType("cases");
  // };

  return (
    <div>
      <div className="app__left">
        <div className="app__header">
          <h1>Live COVID-19 Worldwide Cases</h1>
          {/* Dropdown Select by Country */}
          <Form className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <Option value="worldwide">Worldwide</Option>
              {countries.map((country) => (
                <Option key={country.id} value={country.value}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </Form>
        </div>

        {/* Card-View of Live Cases  */}
        <div className="app__stats">
          <Card.Grid style={gridStyle}>
            <InfoBox
              isRed
              active={casesType === "cases"}
              onClick={(e) => setCasesType("cases")}
              title="Coronavirus Active cases and Total Cases"
              cases={prettyPrintStat(countryInfo.active)}
              total={prettyPrintStat(countryInfo.cases)}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <InfoBox
              active={casesType === "recovered"}
              onClick={(e) => setCasesType("recovered")}
              title="Total Tested & Total Recovered"
              cases={prettyPrintStat(countryInfo.tests)}
              total={prettyPrintStat(countryInfo.recovered)}
            />
          </Card.Grid>

          <Card.Grid style={gridStyle}>
            <InfoBox
              isRed
              active={casesType === "deaths"}
              onClick={(e) => setCasesType("deaths")}
              title="Total critical & Total Deaths"
              cases={prettyPrintStat(countryInfo.critical)}
              total={prettyPrintStat(countryInfo.deaths)}
            />
          </Card.Grid>
        </div>

        {/* World-Map of live cases */}
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <br />

      {/*  Live Cases by Country in tabular */}
      <Card className="app__right">
        <h3>Live Cases by Country</h3>
        <Table countries={tableData} />
      </Card>
      <br />
      {/*  Line Graph of live cases */}
      <Card>
        <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
        <LineGraph className="app__graph" casesType={casesType} />
      </Card>
    </div>
  );
};

export default Cases;
