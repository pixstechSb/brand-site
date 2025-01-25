import React from 'react';
import '../../style.css';
import rightarrow from '../../assets/rightarrow.png';

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface NavigationBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const NavigationBreadcrumb: React.FC<NavigationBreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className="breadcrumbItem">
            <span className={item.isActive ? 'activeLink' : ''}>
              {item.label}
            </span>
            {index < items.length - 1 && (
            <img src={rightarrow} alt="Rightarrow" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default NavigationBreadcrumb;