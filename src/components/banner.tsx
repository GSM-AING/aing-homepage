import styled from "styled-components";
import videos from "../assets/aing-banner.mp4";
export const Banner = () => {
  return (
    <>
      <div>
        <Rootbanner>
          <BannerSection>
            <video
              src={videos}
              className="video"
              muted
              autoPlay
              loop
              width={1000}
            />
          </BannerSection>
        </Rootbanner>
      </div>
    </>
  );
};

const Rootbanner = styled.div`
  align-items: center;
  display: flex;
  height: 60vh;
  overflow: hidden;
  position: relative;
`;

const BannerSection = styled.div`
  background-color: #000000;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 700px;
  /* @media (max-width: 800px) {
    & > .video {
      display: none;
    }
    grid-template-columns: 400px;
  } */
`;

const Maintext = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  overflow: visible;
  bottom: 78px;
  left: 60px;
  position: absolute;
  @media (max-width: 800px) {
    left: 300px;
  }
`;

const Gradation = styled.div`
  background-image: linear-gradient(to right, #6a83fa, #00e0ff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 40px;
`;
