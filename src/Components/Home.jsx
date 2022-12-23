import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import IconButton from "@mui/material/IconButton";
import Card from "./Card";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Data from "../Data/Data.json";

function Home() {
  const [propertyType, setPropertyType] = useState("select");
  const [price, setPrice] = useState("select");
  const [location, setLocation] = useState("select");
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [houses, setHouses] = useState(Data);

  const handleSearch = () => {
    let ind = price.indexOf("-"); // finding min and max of the user's selected price
    let minPrice = price.substring(0, ind);
    let maxPrice = price.substring(ind + 1);
    parseInt(minPrice);
    parseInt(maxPrice);

    let updatedHouses = Data.filter(
      (house) =>
        (location === "select" || house.location === location) &&
        (propertyType === "select" || house.type === propertyType) &&
        (price === "select" ||
          (parseInt(house.price) >= minPrice &&
            parseInt(house.price) <= maxPrice)) &&
        new Date(house.moveIn).getTime() >= selectedDate.getTime()
    );
    setHouses(updatedHouses);
  };

  const handleClear = () => {
    setPropertyType("select");
    setPrice("select");
    setLocation("select");
    setSelectedDate(new Date());
    setHouses(Data);
  };

  // Modal Box
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    boxShadow: 0,
  };

  return (
    <Container>
      <Wrapper>
        <h2 style={{ fontSize: "2.5rem" }}>Search properties to rent</h2>

        <SearchWrapper>
          <Type>
            <Heading>
              <Title>Location</Title>
            </Heading>
            <Heading>
              <h3>{location}</h3>

              <select
                id="location"
                name="location"
                defaultValue={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>select</option>
                <option>Bangalore</option>
                <option>Gurugram</option>
              </select>
            </Heading>
          </Type>
          <Type>
            {" "}
            <Heading>
              <Title>when</Title>
            </Heading>
            <Heading>
              <h3 style={{ fontSize: "1rem" }}>
                {selectedDate.toDateString()}
              </h3>
              <IconButton onClick={handleOpen}>
                <CalendarMonthIcon style={{ color: "#7065ef" }} />
              </IconButton>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Calendar
                    minDate={new Date()}
                    value={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setOpen(false);
                    }}
                  />
                </Box>
              </Modal>
            </Heading>
          </Type>
          <Type>
            {" "}
            <Heading>
              <Title>Price</Title>
            </Heading>
            <Heading>
              <h4>{price}</h4>

              <select
                id="price"
                name="priceTag"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option>select</option>
                <option>0-10000</option>
                <option>10001-20000</option>
                <option>20001-40000</option>
              </select>
            </Heading>
          </Type>
          <Type>
            {" "}
            <Heading>
              <Title>Property Type</Title>
            </Heading>
            <Heading>
              <h3>{propertyType}</h3>
              <select
                id="propertyType"
                name="propertyType"
                defaultValue={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option>select</option>
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </Heading>
          </Type>
          <Type btn={true}>
            {" "}
            <BtnWrapper>
              <Button
                variant="text"
                size="large"
                style={{
                  backgroundColor: "#7065ef",
                  color: "#ffffff",
                  width: "7rem",
                  height: "7vh",
                }}
                onClick={handleSearch}
              >
                Search
              </Button>
              <Button
                variant="outlined"
                color="error"
                size="large"
                style={{
                  width: "7rem",
                  height: "7vh",
                }}
                onClick={handleClear}
              >
                Clear
              </Button>
            </BtnWrapper>
          </Type>
        </SearchWrapper>

        <CardWrapper>
          {houses.map((house, index) => {
            return (
              <Card
                index={index}
                image={house.image}
                price={house.price}
                locality={house.locality}
                street={house.street}
                bed={house.bed}
                kitchen={house.kitchen}
                area={house.area}
              />
            );
          })}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  color: #c8c7ce;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 85%;
  font-family: "Montserrat", sans-serif;
  flex-direction: row;
`;
const SearchWrapper = styled.div`
  background-color: #ffffff;
  height: 10vh;
  width: 96.5%;
  padding: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const Type = styled.div`
  width: 20%;
  height: 8vh;
  display: flex;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: ${(props) => (props.btn ? "0" : "3px solid #f7f7f7")};
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
const Heading = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 0.5rem;
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default Home;
