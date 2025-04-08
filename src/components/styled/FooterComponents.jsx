import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: #0A2B59;
  color: #FFF;
  display: flex;
  justify-content: center;
  width: 100%; /* Ensure it occupies the full horizontal space */
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  gap: 50px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;

  h4 {
    margin-bottom: 26px;
  }

  p {
    margin: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Support = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h4 {
    margin-bottom: 16px;
  }

  .support-images {
    display: flex;

    img {
      height: 50px;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  p {
    display: flex;
    align-items: center;
    gap: 8px; /* Add space between icon and text */
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const IconLink = styled.a`
  color: white;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #9AB5D9;
  }
`;
