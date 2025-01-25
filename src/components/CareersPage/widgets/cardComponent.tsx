import '../widgets/cardComponent.css'
import { useNavigate } from "react-router-dom";
const Card = ({imgSrc,title,subtitle,type}: any) => {
  const navigate = useNavigate();
  return (
        <div className="widget-card" onClick={() => navigate("/careerlisting")}>
          <div className="widget-icon-outer">
            <div className="widget-icon-inner">
              <div className="widget-icon">
                <img className='card-image' src={imgSrc} />
              </div>
            </div>
          </div>
          <div className="widget-triangle">
          </div>
          <div className="widget-text" >
            <p className="widget-title">{title}</p>
            <p className="widget-description">{subtitle}</p>
            <p className="widget-type">
           {type}</p>
          </div>
        </div>
  );
};

export default Card;