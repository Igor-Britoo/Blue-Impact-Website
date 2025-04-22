import React, { useEffect, useState } from "react";
import StaticHeader from "../components/StaticHeader";
import Footer from "../components/Footer";
import { ServiceSection, ServicesContainer, Box, BoxTitle, HorizontalLine, BoxText, Title } from "../components/styled/ServiceComponents";
import { fetchData } from "../utils/api";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await fetchData('/services/');
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StaticHeader />
      <Title>SERVIÇOS</Title>
      <ServiceSection>
        <ServicesContainer>
          {services.map((service, index) => (
            <Box key={index}>
              <BoxTitle>{service.title}</BoxTitle>
              <HorizontalLine />
              <BoxText>{service.descricao}</BoxText>
            </Box>
          ))}
        </ServicesContainer>
      </ServiceSection>
      <Footer />
    </>
  );
};

export default Services;
