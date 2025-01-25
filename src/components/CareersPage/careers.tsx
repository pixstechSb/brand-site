import '../CareersPage/careers.css'
import Card from './widgets/cardComponent'
const Careers = () => {
  return (
    <>
    <div className="careers-body">
      <div>{headerText()}</div>
        <div className="card-grid">
          <Card imgSrc="src/assets/card1.png" title="Experienced" subtitle="Experience is the mastery gained through hands-on participation and keen observation." type="Full time"/>
          <Card imgSrc="src/assets/card2.png" title="Early Bird" subtitle="OpprotuniiStudent who are diving into the exciting freshman of the university!" type="Part time"/>
          <Card imgSrc="src/assets/card3.png" title="Internship" subtitle="An internship program that unlocks real-world industry experience for students!" type="Part time"/>
      </div>
    </div>
    </>
    
    
  );
};
const headerText = () => {
    return (
      <>
        <p className="careers-header">Career</p>
        <br />
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