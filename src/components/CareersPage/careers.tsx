import '../CareersPage/careers.css'
import Card from './widgets/cardComponent'
import {card1, card2, card3} from '../../utils/constants'
const Careers = () => {
  return (
    <>
    <div className="careers-body">
      <div>{headerText()}</div>
        <div className="card-grid">
          <Card imgSrc={card1} title="Experienced" subtitle="Experience is the mastery gained through hands-on participation and keen observation." type="Full time" level="Expertise"/>
          <Card imgSrc={card2} title="Early Bird" subtitle="OpprotuniiStudent who are diving into the exciting freshman of the university!" type="Part time" level="EarlyBird"/>
          <Card imgSrc={card3} title="Internship" subtitle="An internship program that unlocks real-world industry experience for students!" type="Part time" level="Fresher"/>
      </div>
    </div>
    </>
    
    
  );
};
const headerText = () => {
    return (
      <>
        <p className="careers-header">Career</p>
        <p className="careers-subheader">
          we're more than just a workplace
        </p>
        <p className="careers-subheader">
          we're a family.
        </p>
        <br/>
        <p className="careers-content">
          Want to set the Progressive and Stress-free career? You have landed to
          the
        </p>
        <p className="careers-content">
          right place. Engage with us and we will nurture you !!!
        </p>
      </>
    );
  };

  export default Careers