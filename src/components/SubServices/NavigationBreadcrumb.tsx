import React from 'react';
import '../../style.css';
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
            </span>{/*Rightarrow svg*/}
            {index < items.length - 1 && (    
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="chevron-right 1">
              <path id="Vector" d="M7.5 15.5L12.5 10.5L7.5 5.5" stroke="#494E6B" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default NavigationBreadcrumb;