import React from 'react';
import CareerCard from './Careercard';


interface CareerCardProps {
    icon: string;
    title: string;
    description: string;
    type: string;
    iconAlt: string;
    timeIcon: string;
}
const careerCards: CareerCardProps[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/914b935c070e758e2c51b075b6f5d92e39f6be3d1d80e4b2716debc2cd12c819?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76",
    title: "Experienced",
    description: "Having experience having knowledge or skill from observation or participation.",
    type: "Full Time",
    iconAlt: "Experience icon",
    timeIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00d9835accdf66e5c4289e5f5bc9cf4d5681a70dfc60418560b60533aa4e9f03?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba82f8401a4af2523a384adc15aacb0def78ff357924f5adbf58027620d96157?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76",
    title: "Early Bird",
    description: "Students who have just started their first year at university or college",
    type: "Full Time",
    iconAlt: "Early bird icon",
    timeIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea48ad60af32d1d4cc10aa925c1fbb00013ba31c40bf21f6e02fa3062aa000d?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fa66fc1d06bbe5d791ef058f7001bbf2e5669ddea7b3da1cdf9bc902af8f8e2?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76",
    title: "Internship",
    description: "A program that offers industry experience to students and sometimes",
    type: "Full Time",
    iconAlt: "Internship icon",
    timeIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/adb8fc9c1d3bbf6a1cf05567105c17b462152e8cae790f8ace74f743279fdad9?placeholderIfAbsent=true&apiKey=96b83855ebaf4805906bae67b4a2ea76"
  }
];

const CareersSection: React.FC = () => {
  return (
    <div className="Career-container">
      <div className="Career-header">
        <div className="Career-title-header">
          We're more than just a workplace.{" "}
          <span className="Career-highlightedText">We're a family.</span>
        </div>
        <div className="Career-subtitle">
          <span className="Career-subtitleBold">
            Want to set the Progressive and Stress-free career?
          </span>
          <br />
          You have landed to the right space. Engage with us and we will nurture you !!!
        </div>
      </div>
      <div className="Career-cardsContainer">
        {careerCards.map((card, index) => (
          <CareerCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CareersSection;