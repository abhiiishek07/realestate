import React from "react";
import styled from "styled-components";
import BedIcon from "@mui/icons-material/Bed";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Card(props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={props.image} alt="house" />
      </ImageWrapper>
      <PropertiesWrapper>
        <PriceWrapper>
          <span>
            <span className="price">RS {props.price}</span>
            <span className="month">/month</span>
          </span>
          <FavoriteBorderIcon style={{ cursor: "pointer", color: "#7065ef" }} />
        </PriceWrapper>
        <AddressWrapper>
          <span className="place">{props.locality}</span>
          <span className="street">{props.street}</span>
          <hr />
        </AddressWrapper>
        <FeatureWrapper>
          <>
            <BedIcon style={{ color: "#7065ef", fontSize: 20 }} />{" "}
            <span className="feature">{props.bed} Beds</span>
          </>
          <>
            <KitchenIcon style={{ color: "#7065ef", fontSize: 20 }} />
            <span className="feature">{props.kitchen} Kitchen</span>
          </>
          <>
            <WorkspacesIcon style={{ color: "#7065ef", fontSize: 20 }} />
            <span className="feature">{props.area} sqm</span>
          </>
        </FeatureWrapper>
      </PropertiesWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 23.5%;
  height: 48vh;
  margin: 2rem 1.21rem 0rem 0rem;

  box-shadow: 0 2px 5px gray;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.07);
  }
  border-radius: 0.5rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  img {
    height: 99999px;
    max-height: 100%;
    min-width: 100%;
    display: block;
    object-fit: fill;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
`;
const PropertiesWrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PriceWrapper = styled.div`
  height: 7vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .price {
    font-size: large;
    font-weight: bold;
    color: #7065ef;
  }
  .month {
    color: #acabae;
  }
`;
const AddressWrapper = styled.div`
  height: 8vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  .place {
    font-size: large;
    font-weight: bold;
  }
  .street {
    color: #acabae;
    padding: 0.2rem 0;
  }
  hr {
    width: 97%;
    background-color: #e3e2e8;
  }
`;
const FeatureWrapper = styled.div`
  height: 8vh;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .feature {
    font-size: smaller;
  }
`;

export default Card;
