import React, { useState } from 'react';
import NavigationBreadcrumb from './NavigationBreadcrumb';
import '../../style.css';
import Navigationbar from '../Navigationbar';

const breadcrumbItems = [
  { label: 'Home' },
  { label: 'Services' },
  { label: 'Testing', isActive: true }
];

const services = [
  {
    svg: <svg width="380" height="280" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Frame 1321322413">
    <g id="pexels-artempodrez-5716008 1">
    <rect x="3.5" y="117.811" width="373" height="154" rx="10" fill="white"/>
    <rect x="3.5" y="117.811" width="373" height="154" rx="10" fill="url(#paint0_linear_724_16187)"/>
    </g>
    <g id="Group 2610722">
    <g id="Group 2610659">
    <path id="Vector" d="M201.944 140.797H37.5425C31.1676 140.797 26 135.629 26 129.256V19.5413C26 13.1664 31.1676 8 37.5425 8H201.944C208.319 8 213.485 13.1677 213.485 19.5413V129.256C213.485 135.629 208.317 140.797 201.944 140.797Z" fill="#24285B" stroke="#262E45" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="Group">
    <g id="Group_2">
    <g id="Group_3">
    <path id="Vector_2" d="M65.6833 61.998H51.2056V121.794H65.6833V61.998Z" fill="#C6C9DB"/>
    <path id="Vector_3" d="M87.8273 78.7661H73.3496V121.794H87.8273V78.7661Z" fill="#6D74A1"/>
    <path id="Vector_4" d="M109.97 68.3325H95.4912V121.794H109.97V68.3325Z" fill="#C6C9DB"/>
    <path id="Vector_5" d="M132.112 89.9458H117.635V121.796H132.112V89.9458Z" fill="#6D74A1"/>
    <path id="Vector_6" d="M154.256 69.4521H139.779V121.797H154.256V69.4521Z" fill="#C6C9DB"/>
    <path id="Vector_7" d="M176.402 55.6641H161.923V121.795H176.402V55.6641Z" fill="#6D74A1"/>
    <path id="Vector_8" d="M198.543 47.0938H184.064V121.794H198.543V47.0938Z" fill="#C6C9DB"/>
    </g>
    </g>
    <g id="Group_4">
    <path id="Vector_9" d="M39.2861 31.1938H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_10" d="M39.2861 38.3042H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_11" d="M39.2861 45.4155H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_12" d="M39.2861 52.5254H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_13" d="M39.2861 59.6357H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_14" d="M39.2861 66.7461H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_15" d="M39.2861 73.8574H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_16" d="M39.2861 80.9678H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_17" d="M39.2861 88.0791H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_18" d="M39.2861 95.188H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_19" d="M39.2861 102.299H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_20" d="M39.2861 109.41H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_21" d="M39.2861 116.521H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_22" d="M39.2861 123.631H44.2296" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g id="Group_5">
    <path id="Vector_23" d="M198.951 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_24" d="M187.143 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_25" d="M175.338 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_26" d="M163.53 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_27" d="M151.725 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_28" d="M139.919 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_29" d="M128.111 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_30" d="M116.306 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_31" d="M104.499 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_32" d="M92.6929 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_33" d="M80.8853 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_34" d="M69.0801 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_35" d="M57.2725 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_36" d="M45.4668 125.665V130.608" stroke="#6D74A1" stroke-width="1.15021" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <path id="Vector_37" d="M135.677 17.8477H102.558V23.2857H135.677V17.8477Z" fill="#6D74A1"/>
    </g>
    </g>
    <g id="Frame 1321322395">
    <rect x="33.5" y="154.5" width="254" height="95" rx="10.5" fill="#6D74A1"/>
    <rect x="33.5" y="154.5" width="254" height="95" rx="10.5" stroke="#262E45" stroke-width="5"/>
    <g id="Group_6">
    <g id="Group_7">
    <path id="Vector_38" d="M135.996 242.528C113.646 242.528 95.4615 224.345 95.4615 201.995C95.4615 182.818 108.993 166.202 127.702 162.311L129.473 171.339C115.066 174.387 104.661 187.205 104.661 201.996C104.661 219.273 118.717 233.33 135.996 233.33C139.289 233.33 142.526 232.824 145.623 231.825L148.577 240.538C144.528 241.858 140.298 242.528 135.996 242.528Z" fill="#262E45" stroke="#263238" stroke-width="0.922989"/>
    </g>
    <g id="Group_8">
    <path id="Vector_39" d="M173.967 187.775L165.314 190.904C160.723 178.777 149.002 170.662 135.998 170.662C134.111 170.662 132.223 170.83 130.38 171.163L128.611 162.133C131.035 161.688 133.518 161.461 135.998 161.461C152.862 161.461 168.062 172.016 173.967 187.775Z" fill="#24285B" stroke="#263238" stroke-width="0.922989"/>
    </g>
    <g id="Group_9">
    <path id="Vector_40" d="M165.626 191.77L174.277 188.643C175.772 192.926 176.529 197.416 176.529 201.995C176.53 219.231 165.668 234.54 149.45 240.241L146.498 231.528C158.979 227.094 167.33 215.283 167.33 201.995C167.33 198.488 166.758 195.05 165.626 191.77Z" fill="#FFC727" stroke="#263238" stroke-width="0.922989"/>
    </g>
    <path id="Vector_41" d="M191.203 170.858H201.659V181.315H191.203V170.858Z" fill="#24285B" stroke="#263238" stroke-width="0.922989"/>
    <path id="Vector_42" d="M191.203 198.709H201.659V209.165H191.203V198.709Z" fill="#262E45" stroke="#263238" stroke-width="0.922989"/>
    <path id="Vector_43" d="M191.203 226.556H201.659V237.013H191.203V226.556Z" fill="#A8A8A8" stroke="#263238" stroke-width="0.922989"/>
    <path id="Vector_44" d="M208.109 176.387H227.274" stroke="#263238" stroke-width="0.922989" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_45" d="M208.109 203.339H227.274" stroke="#263238" stroke-width="0.922989" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_46" d="M125.462 202.738H144.627" stroke="#263238" stroke-width="0.922989" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_47" d="M208.109 231.485H227.274" stroke="#263238" stroke-width="0.922989" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <linearGradient id="paint0_linear_724_16187" x1="126.5" y1="1.31056" x2="479.727" y2="104.802" gradientUnits="userSpaceOnUse">
    <stop stop-color="#492AB8" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
    </linearGradient>
    </defs>
    </svg>
    
     ,
    title: 'Automation Testing',
    description: 'Our triend and testing methodologies that will help you save both time and cost'
 },
  {
    svg: <svg width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Frame 1321322415">
    <g id="Group 2610995">
    <g id="Frame 1321321416">
    <g id="pexels-rdne-7947842 1">
    <rect x="4" y="118.605" width="373" height="154" rx="10" fill="white"/>
    <rect x="4" y="118.605" width="373" height="154" rx="10" fill="url(#paint0_linear_663_5257)"/>
    </g>
    </g>
    <g id="Group 2610976">
    <rect id="Rectangle 161148" x="116.414" y="61.606" width="123.864" height="207.816" rx="23.2705" stroke="#6D74A1" stroke-width="6"/>
    <g id="Frame 1321322393">
    <rect x="198.324" y="104.166" width="88.5934" height="124.011" rx="5.97056" fill="#6D74A1"/>
    <rect x="198.324" y="104.166" width="88.5934" height="124.011" rx="5.97056" stroke="#262E45" stroke-width="7.16468"/>
    <rect id="Rectangle 161147" x="221.037" y="125.27" width="42.5704" height="13.9117" rx="3.97056" fill="#6D74A1" stroke="#24285B" stroke-width="4"/>
    <g id="Group 2610975">
    <circle id="Ellipse 1951" cx="240.994" cy="179.089" r="17.9117" stroke="#24285B" stroke-width="7.16468"/>
    <line id="Line 525" x1="243.104" y1="181.755" x2="268.18" y2="206.831" stroke="#24285B" stroke-width="5.97056"/>
    </g>
    </g>
    <path id="Rectangle 161135" d="M175.417 104.166V228.177H71.0823V135.908L95.499 104.166H175.417Z" fill="#24285B" stroke="#262E45" stroke-width="7.16468"/>
    <g id="Group 2610974">
    <path id="Vector 2900" d="M75.3691 152.835H89.3297L96.0308 146.693H106.641" stroke="#6D74A1" stroke-width="3.58234"/>
    <path id="Vector 2901" d="M75.3691 163.447H95.4723M75.3691 174.057H91.005L97.706 180.2H109.991" stroke="#6D74A1" stroke-width="3.58234"/>
    <circle id="Ellipse 1948" cx="110.564" cy="146.271" r="4.42874" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <circle id="Ellipse 1949" cx="99.3832" cy="162.888" r="4.42874" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <circle id="Ellipse 1950" cx="113.899" cy="179.641" r="4.42874" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    </g>
    <rect id="Rectangle 161136" x="89.5756" y="200.052" width="31.9271" height="16.1861" rx="3.6872" fill="#FFC727" stroke="#262E45" stroke-width="2.1785"/>
    <rect id="Rectangle 161137" x="123.135" y="207.378" width="5.46953" height="2.84602" fill="#6D74A1" stroke="#262E45" stroke-width="1.08925"/>
    <rect id="Rectangle 161138" x="82.4733" y="207.378" width="5.46953" height="2.84602" fill="#6D74A1" stroke="#262E45" stroke-width="1.08925"/>
    <rect id="Rectangle 161140" x="129.75" y="141.843" width="5.36466" height="2.74115" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <rect id="Rectangle 161141" x="161.228" y="141.843" width="5.36466" height="2.74115" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <rect id="Rectangle 161139" x="137.504" y="133.856" width="21.341" height="18.7175" rx="2.98528" fill="#24285B" stroke="#6D74A1" stroke-width="3.58234"/>
    <rect id="Rectangle 161142" x="146.803" y="153.65" width="2.74115" height="6.67642" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <rect id="Rectangle 161143" x="146.803" y="126.101" width="2.74115" height="6.67642" fill="#6D74A1" stroke="#6D74A1" stroke-width="1.19411"/>
    <path id="Rectangle 161144" d="M146.206 208.801C146.206 207.714 147.087 206.833 148.174 206.833V206.833C149.26 206.833 150.141 207.714 150.141 208.801V223.886H146.206V208.801Z" fill="#6D74A1"/>
    <path id="Rectangle 161145" d="M152.764 208.801C152.764 207.714 153.645 206.833 154.731 206.833V206.833C155.818 206.833 156.699 207.714 156.699 208.801V223.886H152.764V208.801Z" fill="#6D74A1"/>
    <path id="Rectangle 161146" d="M159.322 208.801C159.322 207.714 160.203 206.833 161.29 206.833V206.833C162.377 206.833 163.258 207.714 163.258 208.801V223.886H159.322V208.801Z" fill="#6D74A1"/>
    </g>
    </g>
    </g>
    <defs>
    <linearGradient id="paint0_linear_663_5257" x1="127" y1="2.10512" x2="480.227" y2="105.596" gradientUnits="userSpaceOnUse">
    <stop stop-color="#492AB8" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
    </linearGradient>
    </defs>
    </svg>
    ,
    title: 'Functional Testing',
    description: 'Attain release readiness and a seamless user experience with robust functional testing.'  },
  {
    svg: <svg width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Frame 1321322414">
    <g id="Group 2610740">
    <g id="Group 2610668">
    <g id="pexels-pixabay-270488 1">
    <path d="M4 128.416C4 122.893 8.47715 118.416 14 118.416H190.5H367C372.523 118.416 377 122.893 377 128.416V262.416C377 267.939 372.523 272.416 367 272.416H14C8.47715 272.416 4 267.939 4 262.416V128.416Z" fill="white"/>
    <path d="M4 128.416C4 122.893 8.47715 118.416 14 118.416H190.5H367C372.523 118.416 377 122.893 377 128.416V262.416C377 267.939 372.523 272.416 367 272.416H14C8.47715 272.416 4 267.939 4 262.416V128.416Z" fill="url(#paint0_linear_663_5290)"/>
    </g>
    </g>
    <g id="Group 2610973">
    <g id="Frame 1321322388">
    <rect x="67.2731" y="31.3776" width="97.7732" height="195.884" rx="4.13721" fill="#282C5C"/>
    <rect x="67.2731" y="31.3776" width="97.7732" height="195.884" rx="4.13721" stroke="#263238" stroke-width="3.54618"/>
    <g id="Group">
    <path id="Vector" d="M106.671 101.203L88.8027 91.1822V88.1407L106.671 78.8438V83.8263L94.4561 89.7449L106.671 96.2413V101.203Z" fill="#FFC727"/>
    <path id="Vector_2" d="M124.266 76.3929L115.032 105.702L110.246 105.541L119.602 76.0417L124.266 76.3929Z" fill="#FFC727"/>
    <path id="Vector_3" d="M127.604 97.2126L138.759 92.1514L127.604 85.154V80.3145L143.684 91.2165V94.0346L127.604 102.032V97.2126Z" fill="#FFC727"/>
    </g>
    <rect id="Rectangle 161133" x="89.2259" y="129.826" width="54.037" height="12.8338" fill="#6D74A1" stroke="black" stroke-width="0.844328"/>
    <rect id="Rectangle 161134" x="95.6419" y="197.371" width="41.0343" height="7.26122" fill="#6D74A1" stroke="black" stroke-width="0.844328"/>
    </g>
    <g id="Frame 1321322390">
    <rect x="178.893" y="53.6675" width="97.7732" height="195.884" rx="4.13721" fill="#282C5C"/>
    <rect x="178.893" y="53.6675" width="97.7732" height="195.884" rx="4.13721" stroke="#263238" stroke-width="3.54618"/>
    <circle id="Ellipse 1944" cx="227.695" cy="115.303" r="15.6201" fill="#6D74A1"/>
    <g id="Frame 1321322391">
    <rect id="Rectangle 161133_2" x="200.845" y="152.117" width="54.037" height="8.44328" fill="#6D74A1" stroke="black" stroke-width="0.844328"/>
    <rect id="Rectangle 161134_2" x="207.346" y="173.563" width="41.0343" height="4.72824" fill="#6D74A1" stroke="black" stroke-width="0.844328"/>
    </g>
    </g>
    <g id="panel_2">
    <path id="Vector_4" d="M248.465 91.1558H332.555V125.04H248.465V91.1558Z" fill="#6D74A1" stroke="black" stroke-width="0.844328"/>
    <path id="Vector_5" d="M267.343 117.421C272.693 117.421 277.031 113.083 277.031 107.733C277.031 102.382 272.693 98.0444 267.343 98.0444C261.992 98.0444 257.654 102.382 257.654 107.733C257.654 113.083 261.992 117.421 267.343 117.421Z" fill="white"/>
    <path id="Vector_6" opacity="0.61" d="M317.488 100.756H287.404V105.723H317.488V100.756Z" fill="white"/>
    <path id="Vector_7" opacity="0.21" d="M317.488 110.147H287.404V115.114H317.488V110.147Z" fill="white"/>
    </g>
    <g id="panel_1">
    <path id="Vector_8" d="M262.988 133.88H347.078V167.765H262.988V133.88Z" fill="#24285B" stroke="black" stroke-width="0.844328"/>
    <path id="Vector_9" opacity="0.61" d="M333.206 142.112H303.123V147.079H333.206V142.112Z" fill="white"/>
    <path id="Vector_10" opacity="0.21" d="M333.206 151.5H303.123V156.467H333.206V151.5Z" fill="white"/>
    <path id="Vector_11" d="M271.686 160.056L276.715 147.92C277.131 146.911 278.533 146.839 279.051 147.8L283.375 155.777C283.844 156.644 285.077 156.689 285.609 155.858L288.592 151.177C289.128 150.337 290.37 150.39 290.835 151.275L295.368 159.954C295.819 160.816 295.194 161.848 294.22 161.848H272.883C271.958 161.848 271.333 160.91 271.686 160.056Z" fill="white"/>
    <path id="Vector_12" d="M284.43 146.715C285.602 146.715 286.552 145.765 286.552 144.593C286.552 143.421 285.602 142.471 284.43 142.471C283.259 142.471 282.309 143.421 282.309 144.593C282.309 145.765 283.259 146.715 284.43 146.715Z" fill="white"/>
    </g>
    </g>
    </g>
    </g>
    <defs>
    <linearGradient id="paint0_linear_663_5290" x1="127" y1="1.91603" x2="480.227" y2="105.407" gradientUnits="userSpaceOnUse">
    <stop stop-color="#492AB8" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
    </linearGradient>
    </defs>
    </svg>
    ,
    title: 'UI/UX Testing',
    description: 'Let’s evaluate the user experience and interface of your app. shall we?'
  },
  {
svg: <svg width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 1321322417">
<g id="Group 2610742">
<g id="Frame 1321321416">
<g id="pexels-rdne-7947842 1">
<rect x="4" y="118.403" width="373" height="154" rx="10" fill="white"/>
<rect x="4" y="118.403" width="373" height="154" rx="10" fill="url(#paint0_linear_663_5322)"/>
</g>
</g>
</g>
<g id="Group 2610972">
<g id="Frame 1321322386">
<g clip-path="url(#clip0_663_5322)">
<rect x="83.5" y="0.605225" width="160.196" height="257.57" rx="10.4703" fill="#24285B"/>
<rect id="Rectangle 161123" x="83.501" y="0.605225" width="160.196" height="34.5521" fill="#6D74A1"/>
<g id="Group 2610962">
<rect id="Rectangle 161110" x="103.929" y="141.922" width="104.68" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161112" x="103.929" y="165.525" width="94.9687" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161111" x="103.929" y="152.961" width="84.1778" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161114" x="103.929" y="190.655" width="85.2569" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161113" x="103.929" y="178.09" width="80.9406" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
</g>
<g id="Group 2610963">
<rect id="Rectangle 161110_2" x="103.929" y="69.1976" width="104.68" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161112_2" x="103.929" y="92.8003" width="94.9687" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161111_2" x="103.929" y="80.2366" width="84.1778" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161114_2" x="103.929" y="117.93" width="85.2569" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
<rect id="Rectangle 161113_2" x="103.929" y="105.365" width="80.9406" height="6.38431" rx="3.19215" fill="#6D74A1" stroke="#262E45" stroke-width="1.06994"/>
</g>
<rect id="Rectangle 161132" x="83.501" y="220.483" width="160.196" height="37.6932" fill="#6D74A1"/>
</g>
<rect x="85.0706" y="2.17578" width="157.055" height="254.429" rx="8.89979" stroke="black" stroke-width="3.1411"/>
</g>
<g id="Group 2610841">
<rect id="Rectangle 160915" x="200.905" y="92.7577" width="155.703" height="56.8047" rx="9.8171" fill="#6D74A1" stroke="black" stroke-width="2.80489"/>
<g id="Group">
<path id="Vector" d="M268.563 133.474L248.274 122.096V118.643L268.563 108.086V113.744L254.693 120.464L268.563 127.84V133.474Z" fill="white"/>
<path id="Vector_2" d="M288.541 105.302L278.056 138.581L272.622 138.398L283.246 104.904L288.541 105.302Z" fill="white"/>
<path id="Vector_3" d="M292.332 128.941L304.998 123.194L292.332 115.249V109.754L310.59 122.133V125.333L292.332 134.413V128.941Z" fill="white"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_663_5322" x1="127" y1="1.90309" x2="480.227" y2="105.394" gradientUnits="userSpaceOnUse">
<stop stop-color="#492AB8" stop-opacity="0.5"/>
<stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
</linearGradient>
<clipPath id="clip0_663_5322">
<rect x="83.5" y="0.605225" width="160.196" height="257.57" rx="10.4703" fill="white"/>
</clipPath>
</defs>
</svg>
,
  
    title: 'Mobile app Testing',
    description: 'Let’s evaluate the user experience and interface of your app. shall we?'
  },
  {
svg: <svg width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 1321322417">
<g id="Group 2610742">
<g id="Frame 1321321416">
<g id="pexels-rdne-7947842 1">
<rect x="4" y="118.403" width="373" height="154" rx="10" fill="white"/>
<rect x="4" y="118.403" width="373" height="154" rx="10" fill="url(#paint0_linear_663_5352)"/>
</g>
</g>
</g>
<g id="Group 2611005">
<g id="Group 2611002">
<g id="Group 2611001">
<g id="Ellipse 1970">
<mask id="path-2-inside-1_663_5352" fill="white">
<path d="M287.78 227.503C299.163 216.651 308.297 203.663 314.661 189.281C321.025 174.899 324.494 159.404 324.869 143.682C325.245 127.959 322.52 112.317 316.851 97.6471C311.181 82.9775 302.678 69.5683 291.826 58.1851L254.187 94.0671C260.327 100.508 265.138 108.094 268.345 116.394C271.553 124.694 273.095 133.544 272.882 142.44C272.67 151.335 270.707 160.102 267.107 168.239C263.506 176.376 258.338 183.724 251.898 189.864L287.78 227.503Z"/>
</mask>
<path d="M287.78 227.503C299.163 216.651 308.297 203.663 314.661 189.281C321.025 174.899 324.494 159.404 324.869 143.682C325.245 127.959 322.52 112.317 316.851 97.6471C311.181 82.9775 302.678 69.5683 291.826 58.1851L254.187 94.0671C260.327 100.508 265.138 108.094 268.345 116.394C271.553 124.694 273.095 133.544 272.882 142.44C272.67 151.335 270.707 160.102 267.107 168.239C263.506 176.376 258.338 183.724 251.898 189.864L287.78 227.503Z" fill="#6D74A1" stroke="black" stroke-width="2.82728" mask="url(#path-2-inside-1_663_5352)"/>
</g>
<path id="Polygon 86" d="M240.694 240.396L241.158 174.533L306.528 242.389L240.694 240.396Z" fill="#6D74A1"/>
</g>
<g id="Group 2610998">
<g id="Ellipse 1970_2">
<mask id="path-4-inside-2_663_5352" fill="white">
<path d="M286.993 55.4242C275.873 44.3035 262.671 35.4821 248.141 29.4636C233.611 23.4451 218.038 20.3474 202.311 20.3474C186.583 20.3474 171.01 23.4451 156.48 29.4636C141.951 35.4821 128.748 44.3035 117.628 55.4243L154.399 92.1952C160.69 85.9033 168.16 80.9123 176.381 77.5071C184.602 74.102 193.412 72.3494 202.311 72.3494C211.209 72.3494 220.02 74.102 228.24 77.5071C236.461 80.9123 243.931 85.9033 250.223 92.1952L286.993 55.4242Z"/>
</mask>
<path d="M286.993 55.4242C275.873 44.3035 262.671 35.4821 248.141 29.4636C233.611 23.4451 218.038 20.3474 202.311 20.3474C186.583 20.3474 171.01 23.4451 156.48 29.4636C141.951 35.4821 128.748 44.3035 117.628 55.4243L154.399 92.1952C160.69 85.9033 168.16 80.9123 176.381 77.5071C184.602 74.102 193.412 72.3494 202.311 72.3494C211.209 72.3494 220.02 74.102 228.24 77.5071C236.461 80.9123 243.931 85.9033 250.223 92.1952L286.993 55.4242Z" fill="#282C5C" stroke="black" stroke-width="2.82728" mask="url(#path-4-inside-2_663_5352)"/>
</g>
<path id="Polygon 86_2" d="M301.005 102.188L235.15 103.298L301.424 36.3251L301.005 102.188Z" fill="#282C5C"/>
</g>
<g id="Group 2610999">
<g id="Ellipse 1970_3">
<mask id="path-6-inside-3_663_5352" fill="white">
<path d="M123.346 54.9743C111.55 65.3758 101.918 77.9989 95.0002 92.1229C88.0824 106.247 84.0143 121.595 83.0281 137.291C82.042 152.987 84.157 168.724 89.2526 183.603C94.3481 198.481 102.324 212.211 112.726 224.007L151.73 189.614C145.845 182.94 141.332 175.172 138.449 166.754C135.566 158.336 134.37 149.432 134.928 140.552C135.486 131.671 137.787 122.988 141.701 114.997C145.615 107.006 151.065 99.8636 157.739 93.9786L123.346 54.9743Z"/>
</mask>
<path d="M123.346 54.9743C111.55 65.3758 101.918 77.9989 95.0002 92.1229C88.0824 106.247 84.0143 121.595 83.0281 137.291C82.042 152.987 84.157 168.724 89.2526 183.603C94.3481 198.481 102.324 212.211 112.726 224.007L151.73 189.614C145.845 182.94 141.332 175.172 138.449 166.754C135.566 158.336 134.37 149.432 134.928 140.552C135.486 131.671 137.787 122.988 141.701 114.997C145.615 107.006 151.065 99.8636 157.739 93.9786L123.346 54.9743Z" fill="#6D74A1" stroke="black" stroke-width="2.82728" mask="url(#path-6-inside-3_663_5352)"/>
</g>
<path id="Polygon 86_3" d="M170.893 43.9265L167.871 109.722L105.186 39.3779L170.893 43.9265Z" fill="#6D74A1"/>
</g>
<g id="Group 2611000">
<g id="Ellipse 1970_4">
<mask id="path-8-inside-4_663_5352" fill="white">
<path d="M120.042 219.165C130.472 230.936 143.118 240.537 157.259 247.421C171.4 254.304 186.758 258.335 202.456 259.283C218.155 260.231 233.886 258.077 248.752 252.946C263.619 247.814 277.329 239.804 289.099 229.374L254.612 190.454C247.952 196.355 240.195 200.886 231.784 203.79C223.373 206.693 214.473 207.912 205.591 207.375C196.709 206.839 188.02 204.558 180.019 200.664C172.018 196.769 164.863 191.337 158.962 184.677L120.042 219.165Z"/>
</mask>
<path d="M120.042 219.165C130.472 230.936 143.118 240.537 157.259 247.421C171.4 254.304 186.758 258.335 202.456 259.283C218.155 260.231 233.886 258.077 248.752 252.946C263.619 247.814 277.329 239.804 289.099 229.374L254.612 190.454C247.952 196.355 240.195 200.886 231.784 203.79C223.373 206.693 214.473 207.912 205.591 207.375C196.709 206.839 188.02 204.558 180.019 200.664C172.018 196.769 164.863 191.337 158.962 184.677L120.042 219.165Z" fill="#282C5C" stroke="black" stroke-width="2.82728" mask="url(#path-8-inside-4_663_5352)"/>
</g>
<path id="Polygon 86_4" d="M108.875 171.645L174.678 174.508L104.487 237.363L108.875 171.645Z" fill="#282C5C"/>
</g>
</g>
<g id="Group 2611004">
<circle id="Ellipse 1971" cx="205.847" cy="115.615" r="10.3838" fill="#FFC727"/>
<g id="Group 2611003">
<path id="Ellipse 1972" d="M225.671 147.713C225.671 145.11 225.158 142.532 224.162 140.127C223.165 137.721 221.705 135.536 219.864 133.695C218.024 131.855 215.838 130.394 213.433 129.398C211.028 128.402 208.45 127.889 205.847 127.889C203.244 127.889 200.666 128.402 198.261 129.398C195.856 130.394 193.67 131.855 191.83 133.695C189.989 135.536 188.529 137.721 187.532 140.127C186.536 142.532 186.023 145.11 186.023 147.713L205.847 147.713H225.671Z" fill="#FFC727"/>
<rect id="Rectangle 161182" x="197.352" y="144.884" width="15.1037" height="30.2074" fill="#FFC727"/>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_663_5352" x1="127" y1="1.90309" x2="480.227" y2="105.394" gradientUnits="userSpaceOnUse">
<stop stop-color="#492AB8" stop-opacity="0.5"/>
<stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
</linearGradient>
</defs>
</svg>
 ,
  title: 'UAT/Release Auditing',
  description: 'Developing custom solutions to address unique business challenges by enhancing SAP functionalities'
  },
  {
  svg: <svg width="381" height="281" viewBox="0 0 381 281" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Frame 1321322417">
  <g id="Group 2610742">
  <g id="Frame 1321321416">
  <g id="pexels-rdne-7947842 1">
  <rect x="4" y="118.403" width="373" height="154" rx="10" fill="white"/>
  <rect x="4" y="118.403" width="373" height="154" rx="10" fill="url(#paint0_linear_663_5379)"/>
  </g>
  <g id="Group">
  <path id="Vector" d="M188.062 88.6413C150.132 89.9683 115.903 105.782 90.6735 130.692C89.0062 132.338 89.0511 135.047 90.7683 136.641L151.598 193.157C153.121 194.572 155.48 194.651 157.05 193.289C165.851 185.652 177.189 181.044 189.514 179.904C191.621 179.709 193.252 177.979 193.252 175.863V93.675C193.252 90.8354 190.9 88.5415 188.062 88.6413Z" fill="#282C5C"/>
  <path id="Vector_2" d="M47.6234 239.272H131.481C133.672 239.272 135.458 237.553 135.589 235.366C136.386 222.171 139.811 212.048 147.582 202.667C148.961 201.003 148.762 198.538 147.176 197.068L86.933 141.215C85.2478 139.652 82.6077 139.771 81.0672 141.478C58.5778 166.394 44.5294 199.075 43.5017 235.033C43.4358 237.352 45.3026 239.272 47.6234 239.272Z" fill="#6D74A1"/>
  <path id="Vector_3" d="M198.464 92.7296V175.823C198.464 177.963 200.107 179.717 202.237 179.923C214.782 181.143 225.576 185.776 234.689 193.429C236.272 194.758 238.611 194.66 240.125 193.253L301.003 136.693C302.719 135.098 302.765 132.39 301.099 130.744C275.655 105.596 241.045 89.7044 202.711 88.6079C200.389 88.542 198.464 90.4069 198.464 92.7296Z" fill="#6D74A1"/>
  <path id="Vector_4" d="M347.637 235.007C346.611 199.079 332.585 166.423 310.128 141.515C308.588 139.805 305.944 139.687 304.259 141.253L244.041 197.2C242.486 198.645 242.28 201.046 243.582 202.723C251.51 212.939 254.205 221.201 255.665 235.552C255.878 237.649 257.65 239.246 259.758 239.246H343.516C345.837 239.247 347.704 237.327 347.637 235.007Z" fill="#282C5C"/>
  <path id="Vector_5" d="M195.405 184.33C166.562 184.33 142.911 206.554 140.638 234.811C140.444 237.214 142.336 239.276 144.746 239.276H246.064C248.474 239.276 250.366 237.214 250.173 234.811C247.9 206.553 224.248 184.33 195.405 184.33Z" fill="#FFC727"/>
  <path id="Vector_6" d="M201.501 210.23C199.61 207.105 196.205 205.464 192.796 205.665L165.167 156.997C165.034 156.762 164.877 156.54 164.7 156.336L142.486 130.656C142.104 130.213 141.397 130.645 141.615 131.187L154.207 162.496C154.303 162.732 154.419 162.96 154.556 163.175L184.928 210.785C183.457 213.63 183.447 217.146 185.228 220.086C187.95 224.58 193.799 226.017 198.293 223.296C202.786 220.574 204.222 214.724 201.501 210.23Z" fill="#6D74A1"/>
  </g>
  </g>
  </g>
  </g>
  <defs>
  <linearGradient id="paint0_linear_663_5379" x1="127" y1="1.90309" x2="480.227" y2="105.394" gradientUnits="userSpaceOnUse">
  <stop stop-color="#492AB8" stop-opacity="0.5"/>
  <stop offset="1" stop-color="#6F0C48" stop-opacity="0.6"/>
  </linearGradient>
  </defs>
  </svg>
   ,
  title: 'Performance testing',
  description: 'Performance and load testing services ensure that your software can handle the demands of real-world usage, no matter, how complex the tasks they’re performance' 
}
    

];

export const Testing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.min(0, services.length - 3));
  const [initialServices, setInitialServices] = useState(services.slice(0, 3));

  // Navigate to next service
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(newIndex);
    setInitialServices(services.slice(newIndex, newIndex + 3));
  };

  // Navigate to previous service
  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    setCurrentIndex(newIndex);
    setInitialServices(services.slice(newIndex, newIndex + 3));
  };
  const progressWidth = ((currentIndex + 1) / services.length) * 100;
  return (
    <main>
      <Navigationbar />
      <div className="Main-Container">
        <NavigationBreadcrumb items={breadcrumbItems} />
        <div className="Text-Container">
          <div className="Text">
            <h1 className="Sap-Text1">
            Systems, Applications and Products in Data Processing
            </h1>
            <p className="Sap-Text2">
            Systems, Applications, and Products in Data Processing.
            </p>
          </div>
          <div className="Subservices">
          <svg width="642" height="428" viewBox="0 0 642 428" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Testing 1">
<path id="Vector" d="M43.416 392.262L112.812 392.057L182.208 391.98L321 391.834L459.792 391.98L529.187 392.057L598.583 392.262L529.187 392.476L459.792 392.553L321 392.69L182.208 392.544L112.812 392.476L43.416 392.262Z" fill="#263238"/>
<path id="Vector_2" d="M522.914 55.0332H119.096V329.621H522.914V55.0332Z" fill="#263238"/>
<path id="Vector_3" d="M522.914 289.115H119.096V329.621H522.914V289.115Z" fill="#263238"/>
<path id="Vector_4" d="M399.684 379.115H242.309V392.263H399.684V379.115Z" fill="#263238"/>
<path id="Vector_5" d="M380.946 379.124H261.055L264.093 356.303L264.248 355.224L264.53 353.084L264.667 352.005L264.967 349.865L265.001 349.532L265.104 348.787L265.395 346.647L265.532 345.568L267.663 329.621H374.329L376.341 344.67L376.443 345.389L376.777 347.88L376.863 348.607L377 349.532L377.205 351.098L377.299 351.826L377.633 354.334L377.727 355.044L380.946 379.124Z" fill="#263238"/>
<path id="Vector_6" d="M327.575 306.637C327.577 307.961 327.186 309.256 326.451 310.358C325.717 311.46 324.672 312.319 323.449 312.827C322.226 313.335 320.88 313.469 319.581 313.211C318.282 312.954 317.088 312.317 316.151 311.381C315.214 310.446 314.576 309.253 314.317 307.954C314.058 306.655 314.19 305.309 314.696 304.085C315.203 302.862 316.061 301.816 317.162 301.08C318.263 300.344 319.557 299.951 320.881 299.951C322.655 299.951 324.357 300.655 325.612 301.909C326.867 303.162 327.573 304.863 327.575 306.637Z" fill="#37474F"/>
<path id="Vector_7" d="M377 349.532L265.531 345.568L267.663 329.621H374.329L377 349.532Z" fill="#1F292E"/>
<path id="Vector_8" d="M504.278 72.8809H137.73V270.06H504.278V72.8809Z" fill="#1B2429"/>
<path id="Vector_9" d="M504.278 72.8809H137.73V81.8089H504.278V72.8809Z" fill="black"/>
<path id="Vector_10" d="M146.137 77.3487C146.137 77.6873 146.036 78.0183 145.848 78.2999C145.66 78.5814 145.393 78.8008 145.08 78.9304C144.767 79.06 144.423 79.0939 144.091 79.0278C143.759 78.9618 143.454 78.7987 143.214 78.5593C142.975 78.3199 142.812 78.0148 142.746 77.6827C142.68 77.3506 142.714 77.0064 142.843 76.6936C142.973 76.3807 143.192 76.1134 143.474 75.9252C143.755 75.7371 144.086 75.6367 144.425 75.6367C144.879 75.6367 145.314 75.8171 145.635 76.1382C145.957 76.4592 146.137 76.8947 146.137 77.3487Z" fill="#AC1B1B"/>
<path id="Vector_11" d="M153.035 77.3487C153.035 77.6873 152.935 78.0183 152.747 78.2999C152.559 78.5814 152.291 78.8008 151.978 78.9304C151.666 79.06 151.321 79.0939 150.989 79.0278C150.657 78.9618 150.352 78.7987 150.113 78.5593C149.873 78.3199 149.71 78.0148 149.644 77.6827C149.578 77.3506 149.612 77.0064 149.742 76.6936C149.871 76.3807 150.091 76.1134 150.372 75.9252C150.654 75.7371 150.985 75.6367 151.323 75.6367C151.777 75.6367 152.213 75.8171 152.534 76.1382C152.855 76.4592 153.035 76.8947 153.035 77.3487Z" fill="#BA852A"/>
<path id="Vector_12" d="M159.936 77.3487C159.936 77.6873 159.835 78.0183 159.647 78.2999C159.459 78.5814 159.192 78.8008 158.879 78.9304C158.566 79.06 158.222 79.0939 157.89 79.0278C157.558 78.9618 157.253 78.7987 157.013 78.5593C156.774 78.3199 156.611 78.0148 156.545 77.6827C156.479 77.3506 156.512 77.0064 156.642 76.6936C156.772 76.3807 156.991 76.1134 157.273 75.9252C157.554 75.7371 157.885 75.6367 158.224 75.6367C158.678 75.6367 159.113 75.8171 159.434 76.1382C159.755 76.4592 159.936 76.8947 159.936 77.3487Z" fill="#43A72A"/>
<path id="Vector_13" d="M169.573 121.492H161.15V123.144H169.573V121.492Z" fill="#45545C"/>
<path id="Vector_14" d="M366.189 121.492H179.504V123.144H366.189V121.492Z" fill="#45545C"/>
<path id="Vector_15" d="M387.366 121.492H371.367V123.144H387.366V121.492Z" fill="#45545C"/>
<path id="Vector_16" d="M450.967 160.432H396.971V162.084H450.967V160.432Z" fill="#45545C"/>
<path id="Vector_17" d="M470.107 121.492H390.842V123.144H470.107V121.492Z" fill="#45545C"/>
<path id="Vector_18" d="M169.573 129.283H161.15V130.935H169.573V129.283Z" fill="#45545C"/>
<path id="Vector_19" d="M251.116 129.283H187.721V130.935H251.116V129.283Z" fill="#45545C"/>
<path id="Vector_20" d="M393.171 160.432H369.186V162.084H393.171V160.432Z" fill="#45545C"/>
<path id="Vector_21" d="M240.057 152.652H179.504V154.304H240.057V152.652Z" fill="#45545C"/>
<path id="Vector_22" d="M230.204 137.072H187.721V138.724H230.204V137.072Z" fill="#45545C"/>
<path id="Vector_23" d="M462.549 144.861H382.068V146.513H462.549V144.861Z" fill="#45545C"/>
<path id="Vector_24" d="M366.198 183.082H285.717V184.734H366.198V183.082Z" fill="#45545C"/>
<path id="Vector_25" d="M392.827 137.072H234.912V138.724H392.827V137.072Z" fill="#45545C"/>
<path id="Vector_26" d="M387.367 152.652H243.49V154.304H387.367V152.652Z" fill="#45545C"/>
<path id="Vector_27" d="M363.698 160.432H179.504V162.084H363.698V160.432Z" fill="#45545C"/>
<path id="Vector_28" d="M385.578 129.283H255.098V130.935H385.578V129.283Z" fill="#45545C"/>
<path id="Vector_29" d="M426.897 137.072H399.582V138.724H426.897V137.072Z" fill="#45545C"/>
<path id="Vector_30" d="M169.573 137.072H161.15V138.724H169.573V137.072Z" fill="#45545C"/>
<path id="Vector_31" d="M169.573 144.861H161.15V146.513H169.573V144.861Z" fill="#45545C"/>
<path id="Vector_32" d="M229.28 144.861H179.504V146.513H229.28V144.861Z" fill="#45545C"/>
<path id="Vector_33" d="M237.497 168.223H187.721V169.875H237.497V168.223Z" fill="#45545C"/>
<path id="Vector_34" d="M440.096 176.012H370.605V177.664H440.096V176.012Z" fill="#45545C"/>
<path id="Vector_35" d="M366.258 176.012H232.73V177.664H366.258V176.012Z" fill="#45545C"/>
<path id="Vector_36" d="M225.136 176.012H187.721V177.664H225.136V176.012Z" fill="#45545C"/>
<path id="Vector_37" d="M476.681 152.652H390.842V154.304H476.681V152.652Z" fill="#45545C"/>
<path id="Vector_38" d="M378.148 144.861H234.34V146.513H378.148V144.861Z" fill="#45545C"/>
<path id="Vector_39" d="M169.573 152.652H161.15V154.304H169.573V152.652Z" fill="#45545C"/>
<path id="Vector_40" d="M169.573 160.432H161.15V162.084H169.573V160.432Z" fill="#45545C"/>
<path id="Vector_41" d="M169.573 168.223H161.15V169.875H169.573V168.223Z" fill="#45545C"/>
<path id="Vector_42" d="M169.573 176.012H161.15V177.664H169.573V176.012Z" fill="#45545C"/>
<path id="Vector_43" d="M169.573 183.082H161.15V184.734H169.573V183.082Z" fill="#45545C"/>
<path id="Vector_44" d="M278.252 183.082H179.504V184.734H278.252V183.082Z" fill="#45545C"/>
<path id="Vector_45" d="M169.573 190.871H161.15V192.523H169.573V190.871Z" fill="#45545C"/>
<path id="Vector_46" d="M251.116 190.871H187.721V192.523H251.116V190.871Z" fill="#45545C"/>
<path id="Vector_47" d="M240.057 214.24H179.504V215.892H240.057V214.24Z" fill="#45545C"/>
<path id="Vector_48" d="M327.489 229.82H285.006V231.472H327.489V229.82Z" fill="#45545C"/>
<path id="Vector_49" d="M363.698 222.029H179.504V223.681H363.698V222.029Z" fill="#45545C"/>
<path id="Vector_50" d="M385.578 190.871H255.098V192.523H385.578V190.871Z" fill="#45545C"/>
<path id="Vector_51" d="M413.209 206.451H385.945V208.103H413.209V206.451Z" fill="#45545C"/>
<path id="Vector_52" d="M169.573 206.451H161.15V208.103H169.573V206.451Z" fill="#45545C"/>
<path id="Vector_53" d="M251.118 237.609H187.723V239.261H251.118V237.609Z" fill="#45545C"/>
<path id="Vector_54" d="M229.28 206.451H179.504V208.103H229.28V206.451Z" fill="#45545C"/>
<path id="Vector_55" d="M387.367 214.24H243.49V215.892H387.367V214.24Z" fill="#45545C"/>
<path id="Vector_56" d="M378.148 206.451H234.34V208.103H378.148V206.451Z" fill="#45545C"/>
<path id="Vector_57" d="M169.573 214.24H161.15V215.892H169.573V214.24Z" fill="#45545C"/>
<path id="Vector_58" d="M169.573 229.82H161.15V231.472H169.573V229.82Z" fill="#45545C"/>
<path id="Vector_59" d="M278.252 229.82H179.504V231.472H278.252V229.82Z" fill="#45545C"/>
<path id="Vector_60" d="M169.573 237.609H161.15V239.261H169.573V237.609Z" fill="#45545C"/>
<path id="Vector_61" d="M165.208 106.676C165.266 106.731 165.313 106.797 165.344 106.871C165.376 106.945 165.392 107.024 165.392 107.104C165.392 107.184 165.376 107.263 165.344 107.337C165.313 107.41 165.266 107.477 165.208 107.532C165.098 107.633 164.956 107.691 164.806 107.695C164.651 107.693 164.502 107.635 164.387 107.532L161.819 104.964C161.806 104.962 161.794 104.956 161.784 104.947C161.775 104.938 161.769 104.926 161.767 104.913C161.762 104.887 161.762 104.861 161.767 104.835C161.767 104.835 161.767 104.835 161.767 104.784V104.716C161.767 104.716 161.767 104.716 161.767 104.664C161.767 104.613 161.767 104.664 161.767 104.613V104.433C161.767 104.433 161.767 104.433 161.767 104.356C161.766 104.33 161.766 104.305 161.767 104.279C161.772 104.264 161.78 104.25 161.79 104.238C161.8 104.227 161.813 104.217 161.827 104.211L164.395 101.643C164.45 101.585 164.517 101.538 164.59 101.507C164.664 101.475 164.743 101.459 164.823 101.459C164.903 101.459 164.983 101.475 165.056 101.507C165.13 101.538 165.196 101.585 165.251 101.643C165.31 101.697 165.358 101.763 165.39 101.837C165.422 101.911 165.439 101.99 165.439 102.071C165.439 102.151 165.422 102.231 165.39 102.304C165.358 102.378 165.31 102.444 165.251 102.499L163.103 104.673L165.208 106.676Z" fill="#E6089D"/>
<path id="Vector_62" d="M167.545 107.002L169.77 101.712C169.796 101.651 169.833 101.595 169.88 101.548C169.927 101.502 169.983 101.465 170.044 101.44C170.105 101.415 170.171 101.403 170.237 101.404C170.304 101.405 170.369 101.42 170.429 101.446C170.489 101.472 170.542 101.508 170.587 101.554C170.632 101.6 170.667 101.654 170.691 101.714C170.715 101.774 170.727 101.837 170.726 101.902C170.725 101.966 170.712 102.029 170.686 102.088L168.461 107.396C168.42 107.484 168.355 107.56 168.273 107.613C168.191 107.666 168.096 107.694 167.998 107.695C167.939 107.707 167.878 107.707 167.819 107.695C167.752 107.671 167.692 107.634 167.641 107.584C167.59 107.535 167.551 107.476 167.525 107.41C167.499 107.345 167.487 107.274 167.491 107.204C167.494 107.134 167.513 107.065 167.545 107.002Z" fill="#E6089D"/>
<path id="Vector_63" d="M175.078 104.836C175.059 104.86 175.035 104.881 175.009 104.896L172.441 107.464C172.333 107.568 172.189 107.626 172.039 107.627C171.887 107.624 171.74 107.567 171.628 107.464C171.568 107.41 171.519 107.344 171.486 107.271C171.453 107.197 171.436 107.117 171.436 107.036C171.436 106.955 171.453 106.875 171.486 106.802C171.519 106.728 171.568 106.662 171.628 106.608L173.776 104.442L171.628 102.268C171.566 102.215 171.517 102.149 171.483 102.076C171.449 102.002 171.432 101.921 171.432 101.84C171.432 101.759 171.449 101.679 171.483 101.605C171.517 101.531 171.566 101.465 171.628 101.412C171.682 101.353 171.749 101.306 171.822 101.274C171.896 101.241 171.975 101.225 172.056 101.225C172.136 101.225 172.216 101.241 172.289 101.274C172.363 101.306 172.429 101.353 172.484 101.412L175.052 103.98C175.081 103.996 175.105 104.02 175.12 104.049C175.136 104.074 175.15 104.099 175.163 104.126C175.159 104.154 175.159 104.183 175.163 104.211V104.434C175.163 104.434 175.163 104.434 175.163 104.485V104.562C175.162 104.588 175.162 104.614 175.163 104.639L175.078 104.836Z" fill="#E6089D"/>
<path id="Vector_64" d="M444.264 391.886C446.224 392.52 502.069 391.792 504.184 390.414C504.988 389.9 505.356 381.76 505.519 371.907C505.519 371.804 505.519 371.702 505.519 371.599C505.519 369.562 505.579 367.473 505.579 365.359C505.579 365.059 505.579 364.768 505.579 364.503L502.874 335.553L465.518 335.921L469.199 364.622V365.761L469.43 371.702V372.318C469.43 372.318 448.176 382.153 446.018 383.917C443.861 385.68 442.286 391.261 444.264 391.886Z" fill="#D3766A"/>
<path id="Vector_65" d="M444.264 391.885C446.224 392.519 502.07 391.791 504.184 390.413C504.988 389.899 505.357 381.759 505.519 371.906C505.519 371.804 505.519 371.701 505.519 371.598C505.519 369.561 505.579 367.472 505.579 365.358C505.579 365.058 505.579 364.767 505.579 364.502L469.191 364.605V365.743L469.422 371.684V372.3C469.422 372.3 448.167 382.136 446.01 383.899C443.853 385.662 442.286 391.261 444.264 391.885Z" fill="#EBEBEB"/>
<path id="Vector_66" d="M444.263 391.876C445.273 392.202 460.45 392.167 475.276 391.876C478.263 391.816 481.225 391.748 484.05 391.671C494.63 391.38 503.37 390.943 504.183 390.421C504.996 389.899 505.356 381.99 505.518 372.325C505.518 372.188 505.518 372.051 505.518 371.914C505.518 371.777 505.518 371.7 505.518 371.598L469.566 371.666V372.282C469.566 372.282 448.303 382.109 446.155 383.873C444.006 385.636 442.285 391.251 444.263 391.876Z" fill="#7C9FA3"/>
<path id="Vector_67" d="M444.846 389.711C454.262 389.351 492.26 388.855 501.59 389.188C501.659 389.188 501.659 389.24 501.59 389.24C492.268 389.796 454.27 390.027 444.854 389.865C444.649 389.856 444.649 389.719 444.846 389.711Z" fill="#263238"/>
<path id="Vector_68" d="M465.458 371.812C469.156 371.076 473.693 371.581 476.586 374.191C476.698 374.286 476.586 374.448 476.432 374.405C472.878 373.31 469.216 372.598 465.51 372.283C465.453 372.28 465.398 372.257 465.357 372.218C465.315 372.179 465.289 372.126 465.283 372.069C465.276 372.012 465.291 371.955 465.323 371.908C465.355 371.861 465.403 371.827 465.458 371.812Z" fill="#263238"/>
<path id="Vector_69" d="M462.805 373.464C466.502 372.719 471.039 373.233 473.933 375.835C474.044 375.938 473.933 376.092 473.778 376.058C470.224 374.96 466.562 374.245 462.856 373.926C462.795 373.933 462.733 373.915 462.685 373.877C462.637 373.838 462.606 373.782 462.599 373.721C462.592 373.66 462.61 373.598 462.649 373.55C462.687 373.502 462.743 373.471 462.805 373.464Z" fill="#263238"/>
<path id="Vector_70" d="M460.15 375.107C463.848 374.371 468.385 374.876 471.278 377.478C471.389 377.581 471.278 377.735 471.124 377.701C467.569 376.605 463.907 375.893 460.201 375.578C460.144 375.575 460.09 375.552 460.048 375.513C460.007 375.474 459.98 375.421 459.974 375.364C459.968 375.307 459.982 375.25 460.014 375.203C460.047 375.156 460.095 375.122 460.15 375.107Z" fill="#263238"/>
<path id="Vector_71" opacity="0.2" d="M475.25 391.868C478.237 391.809 481.199 391.74 484.024 391.663C494.604 391.372 503.344 390.935 504.157 390.413C504.97 389.891 505.33 381.982 505.492 372.317C505.492 372.18 505.492 372.044 505.492 371.907C505.492 371.77 505.492 371.693 505.492 371.59C500.536 375.048 483.159 386.613 475.25 391.868Z" fill="black"/>
<path id="Vector_72" d="M467.015 371.786H507.247C507.247 371.786 499.15 277.84 499.466 276.197C499.869 274.091 502.24 264.589 505.407 252.16C506.4 248.274 507.461 244.105 508.574 239.783C511.57 228.098 514.883 215.318 517.759 204.207C522.039 187.558 525.463 174.615 525.463 174.615H491.343C491.343 174.615 487.371 187.216 482.363 203.599C474.223 230.264 463.317 266.883 462.239 275.794C460.527 290.184 467.015 371.786 467.015 371.786Z" fill="#37474F"/>
<path id="Vector_73" d="M468.797 364.922C474.943 364.794 473.179 364.742 479.325 364.682C482.33 364.682 502.086 364.485 504.894 364.948C504.954 364.948 504.954 365.067 504.894 365.076C502.086 365.538 482.33 365.367 479.325 365.341C473.179 365.281 474.943 365.23 468.797 365.102C468.777 365.096 468.761 365.084 468.749 365.068C468.737 365.051 468.73 365.032 468.73 365.012C468.73 364.992 468.737 364.972 468.749 364.956C468.761 364.94 468.777 364.928 468.797 364.922Z" fill="#263238"/>
<path id="Vector_74" d="M491.892 270.496C493.21 264.684 495.179 258.983 496.899 253.274C500.38 241.683 503.887 230.093 507.42 218.503C509.177 212.716 510.946 206.927 512.727 201.135C513.623 198.219 514.527 195.297 515.44 192.369C516.296 189.519 517.349 186.685 518.154 183.809C518.488 182.637 518.667 183.279 518.248 184.768C517.392 187.764 516.536 190.76 515.68 193.765C513.968 199.688 512.222 205.612 510.441 211.535C506.954 223.314 503.439 235.089 499.895 246.862C498.12 252.763 496.346 258.664 494.571 264.564C493.671 267.37 492.945 270.229 492.397 273.124C491.922 276.153 491.801 279.227 492.037 282.283C492.422 288.438 493.141 294.584 493.706 300.722C494.271 306.859 494.845 313.031 495.418 319.177C496.56 331.424 497.681 343.67 498.782 355.917C498.928 357.466 499.056 359.024 499.176 360.573C499.219 361.095 498.851 361.155 498.8 360.659C497.473 348.546 496.035 336.297 494.905 324.176C493.775 312.055 492.636 300.037 491.481 287.976C491.198 284.946 490.882 281.907 490.873 278.868C490.899 276.048 491.24 273.24 491.892 270.496Z" fill="#263238"/>
<path id="Vector_75" d="M495.229 174.623C497.591 192.933 502.077 227.267 505.398 252.168C513.102 221.994 525.445 174.623 525.445 174.623H495.229Z" fill="#263238"/>
<path id="Vector_76" d="M486.857 392.425C488.809 393.058 544.663 392.545 546.777 391.166C547.633 390.661 547.984 382.521 548.189 372.668V372.36C548.232 370.323 548.267 368.234 548.284 366.12C548.284 365.82 548.284 365.529 548.284 365.264C548.421 351.046 547.428 336.297 547.428 336.297L510.919 336.528L511.887 365.213V366.351L512.092 372.292V372.899C512.092 372.899 490.803 382.666 488.638 384.413C486.472 386.159 484.897 391.791 486.857 392.425Z" fill="#D3766A"/>
<path id="Vector_77" d="M486.857 392.425C488.809 393.058 544.663 392.544 546.777 391.166C547.633 390.661 547.984 382.521 548.189 372.668V372.36C548.232 370.323 548.266 368.234 548.283 366.12C548.283 365.82 548.283 365.529 548.283 365.264H511.903V366.402L512.109 372.343V372.951C512.109 372.951 490.82 382.718 488.654 384.464C486.489 386.21 484.897 391.791 486.857 392.425Z" fill="#EBEBEB"/>
<path id="Vector_78" d="M486.858 392.424C488.81 393.058 544.664 392.544 546.778 391.166C547.634 390.661 547.985 382.52 548.191 372.668V372.359L512.153 372.291V372.899C512.153 372.899 490.865 382.666 488.699 384.412C486.533 386.158 484.898 391.791 486.858 392.424Z" fill="#7C9FA3"/>
<path id="Vector_79" d="M487.466 390.251C496.882 389.934 534.88 389.532 544.21 389.934C544.279 389.934 544.279 389.986 544.21 389.994C534.88 390.517 496.882 390.602 487.466 390.405C487.269 390.397 487.269 390.26 487.466 390.251Z" fill="#263238"/>
<path id="Vector_80" d="M508.147 372.429C511.845 371.701 516.382 372.232 519.275 374.843C519.386 374.946 519.275 375.1 519.121 375.065C515.571 373.955 511.912 373.229 508.207 372.9C508.149 372.899 508.094 372.877 508.051 372.839C508.008 372.8 507.98 372.748 507.973 372.69C507.965 372.633 507.979 372.575 508.011 372.527C508.043 372.479 508.091 372.444 508.147 372.429Z" fill="#263238"/>
<path id="Vector_81" d="M505.484 374.072C509.182 373.353 513.719 373.875 516.612 376.486C516.723 376.588 516.612 376.742 516.458 376.708C512.905 375.598 509.243 374.872 505.535 374.543C505.478 374.54 505.424 374.517 505.382 374.478C505.341 374.439 505.314 374.386 505.308 374.329C505.302 374.272 505.316 374.215 505.348 374.168C505.381 374.121 505.429 374.087 505.484 374.072Z" fill="#263238"/>
<path id="Vector_82" d="M502.822 375.708C506.52 374.98 511.057 375.502 513.95 378.122C514.062 378.216 513.95 378.378 513.796 378.336C510.245 377.23 506.587 376.504 502.882 376.17C502.821 376.178 502.759 376.161 502.71 376.123C502.661 376.086 502.629 376.03 502.621 375.969C502.613 375.907 502.63 375.845 502.668 375.796C502.705 375.748 502.761 375.716 502.822 375.708Z" fill="#263238"/>
<path id="Vector_83" d="M492.465 174.623C492.465 174.623 493.244 190.938 496.985 203.855C497.284 204.925 497.601 205.978 497.952 206.98C501.374 208.36 504.664 210.051 507.779 212.03C507.779 212.03 508.172 225.153 508.566 239.79C509.003 256.148 509.422 274.398 509.362 278.268C509.02 292.751 511.168 372.428 511.168 372.428L551.4 372.59C551.4 372.59 544.124 283.66 544.176 278.353C544.253 269.793 542.233 232.129 540.666 204.66C540.108 194.599 538.852 184.588 536.908 174.7L492.465 174.623Z" fill="#37474F"/>
<path id="Vector_84" d="M512.546 365.222C518.692 365.119 516.929 365.059 523.075 365.025C526.08 365.025 545.836 364.922 548.644 365.402C548.704 365.402 548.704 365.513 548.644 365.53C545.836 365.984 526.08 365.727 523.067 365.684C516.929 365.598 518.692 365.556 512.546 365.402C512.435 365.393 512.435 365.222 512.546 365.222Z" fill="#263238"/>
<path id="Vector_85" d="M535.53 180.444C536.275 202.88 537.063 225.325 538.098 247.752C539.134 270.179 544.39 350.806 545.742 363.312C545.742 363.389 545.623 363.423 545.614 363.312C542.678 341.056 541.052 308.108 539.622 285.715C538.193 263.322 537.2 240.887 536.438 218.459C536.01 205.774 535.676 193.088 535.299 180.402C535.248 180.248 535.53 180.265 535.53 180.444Z" fill="#263238"/>
<path id="Vector_86" d="M496.283 206.006C500.282 207.665 504.128 209.67 507.779 211.998C507.924 212.092 507.779 212.314 507.659 212.237C503.781 210.354 499.818 208.539 496.052 206.442C496.011 206.404 495.985 206.353 495.976 206.298C495.967 206.243 495.976 206.186 496.002 206.137C496.029 206.087 496.07 206.048 496.121 206.024C496.171 206.001 496.228 205.994 496.283 206.006Z" fill="#263238"/>
<path id="Vector_87" d="M496.059 192.163C496.325 193.592 496.667 195.004 496.975 196.443C497.283 197.881 497.48 199.139 497.831 200.457C498.122 201.733 498.769 202.899 499.697 203.821C500.228 204.309 500.802 204.737 501.358 205.182C501.658 205.422 501.983 205.653 502.299 205.893C502.299 205.704 502.222 205.516 502.188 205.319C502.094 204.78 502 204.232 501.914 203.693C501.709 202.486 501.512 201.279 501.332 200.072C500.973 197.701 500.63 195.304 500.142 192.959C500.142 192.864 500.262 192.83 500.288 192.959C500.879 195.287 501.529 197.581 502 199.935C502.257 201.082 503.155 206.783 503.198 207.168C503.241 207.553 503.275 208.024 503.284 208.418C503.34 208.841 503.34 209.27 503.284 209.693C503.284 209.796 503.138 209.779 503.096 209.693C502.923 209.3 502.802 208.885 502.736 208.461C502.633 208.058 502.539 207.605 502.462 207.228C502.462 207.083 502.462 206.928 502.402 206.774C501.837 206.441 501.315 205.987 500.793 205.61C500.271 205.234 499.654 204.806 499.081 204.352C498.095 203.52 497.382 202.41 497.035 201.168C496.694 199.829 496.47 198.462 496.367 197.085C496.188 195.467 496.059 193.84 495.828 192.24C495.897 192.103 496.042 192.068 496.059 192.163Z" fill="#263238"/>
<path id="Vector_88" d="M499.047 133.219C499.534 151.409 497.985 169.916 495.528 173.186C491.719 178.262 467.606 188.491 459.576 190.22C456.94 190.785 451.693 173.203 453.524 170.977C455.356 168.751 481.567 159.678 482.911 158.531C483.621 157.923 487.944 143.123 491.471 133.15C494.767 123.863 498.858 127.689 499.047 133.219Z" fill="#D3766A"/>
<path id="Vector_89" d="M468.591 188.226L461.666 166.064C461.666 166.064 480.061 158.625 482.21 157.504C483.134 157.042 488.579 138.774 491.344 130.882C493.158 125.686 498.234 123.272 499.698 133.801C500.554 139.964 500.34 169.625 496.206 174.384C492.953 178.219 468.591 188.226 468.591 188.226Z" fill="#6E5EFF"/>
<path id="Vector_90" d="M496.283 147.37C495.895 148.182 495.63 149.048 495.496 149.938C496.069 149.259 496.542 148.5 496.899 147.686C497.288 146.874 497.553 146.009 497.687 145.118C497.113 145.798 496.64 146.556 496.283 147.37ZM469.225 184.041C468.531 183.714 467.801 183.47 467.051 183.313L467.145 183.621C467.708 184.022 468.307 184.369 468.934 184.657C469.746 185.045 470.612 185.311 471.502 185.445C470.814 184.87 470.047 184.397 469.225 184.041ZM489.024 161.091C488.21 160.711 487.345 160.448 486.456 160.312C487.158 160.884 487.94 161.352 488.776 161.699C489.591 162.08 490.456 162.345 491.344 162.487C490.643 161.906 489.862 161.431 489.024 161.074V161.091ZM498.012 129.967C497.712 129.128 497.294 128.335 496.771 127.613C496.851 128.493 497.053 129.357 497.37 130.181C497.666 131.021 498.081 131.814 498.603 132.535C498.531 131.65 498.332 130.779 498.012 129.95V129.967ZM478.145 172.202C477.849 171.365 477.434 170.575 476.912 169.857C476.986 170.737 477.185 171.601 477.503 172.425C477.799 173.263 478.218 174.053 478.744 174.77C478.669 173.884 478.467 173.014 478.145 172.185V172.202ZM496.121 172.596C496.522 172.572 496.92 172.511 497.31 172.416C497.387 172.211 497.464 171.988 497.541 171.757C497.044 171.978 496.573 172.253 496.138 172.579L496.121 172.596Z" fill="white"/>
<path id="Vector_91" d="M473.101 184.991C472.904 183.33 470.978 176.67 470.481 175.018C469.985 173.366 467.759 166.809 467.246 165.114C467.246 165.02 467.075 165.029 467.1 165.114C467.588 166.826 469.3 173.546 469.78 175.207C470.259 176.867 472.262 183.476 473.015 185.008C473.016 185.013 473.019 185.019 473.022 185.023C473.025 185.028 473.029 185.032 473.034 185.036C473.039 185.039 473.044 185.041 473.05 185.042C473.055 185.043 473.061 185.043 473.067 185.042C473.072 185.041 473.078 185.039 473.082 185.035C473.087 185.032 473.091 185.028 473.094 185.023C473.098 185.019 473.1 185.013 473.101 185.008C473.102 185.002 473.102 184.996 473.101 184.991Z" fill="#263238"/>
<path id="Vector_92" opacity="0.1" d="M480.395 183.183C486.755 180.298 494.39 176.575 496.231 174.452C500.374 169.692 500.596 140.032 499.732 133.869C498.79 127.106 496.359 125.686 494.262 126.918L480.395 183.183Z" fill="#020100"/>
<path id="Vector_93" d="M487.577 190.22L541.317 184.288C541.317 184.288 527.048 138.517 507.077 123.323C504.612 121.44 497.661 120.918 493.886 126.491C487.612 135.83 487.432 190.032 487.577 190.22Z" fill="#6E5EFF"/>
<path id="Vector_94" d="M509.465 137.868C508.628 138.163 507.838 138.578 507.12 139.1C508.894 138.931 510.593 138.302 512.05 137.277C511.165 137.349 510.294 137.548 509.465 137.868ZM498.483 171.346C497.646 171.643 496.856 172.058 496.137 172.579C497.017 172.504 497.881 172.305 498.705 171.988C499.542 171.692 500.332 171.277 501.051 170.755C500.171 170.83 499.306 171.028 498.483 171.346ZM522.16 170.43C521.322 170.731 520.53 171.145 519.806 171.663C521.582 171.492 523.284 170.864 524.745 169.839C523.859 169.911 522.988 170.11 522.16 170.43ZM508.892 158.805C508.588 157.968 508.17 157.175 507.65 156.451C507.815 158.231 508.447 159.934 509.482 161.391C509.411 160.505 509.212 159.634 508.892 158.805ZM498.012 129.95C497.712 129.11 497.294 128.318 496.771 127.596C496.851 128.475 497.053 129.339 497.37 130.164C497.665 131.004 498.08 131.796 498.602 132.518C498.529 131.638 498.33 130.773 498.012 129.95ZM535.796 179.024C535.494 178.188 535.076 177.399 534.554 176.679C534.721 178.455 535.353 180.155 536.386 181.609C536.315 180.724 536.116 179.853 535.796 179.024ZM489.024 161.048L488.382 160.783C488.382 161.014 488.382 161.245 488.382 161.476L488.767 161.673C489.582 162.053 490.447 162.318 491.335 162.461C490.635 161.89 489.857 161.423 489.024 161.074V161.048ZM521.013 153.961C520.198 153.58 519.333 153.317 518.445 153.182C519.122 153.753 519.877 154.226 520.687 154.585C521.5 154.973 522.365 155.239 523.255 155.373C522.574 154.811 521.82 154.344 521.013 153.986V153.961ZM509.029 180C508.638 180.811 508.372 181.677 508.241 182.568C509.379 181.193 510.135 179.543 510.432 177.783C509.847 178.457 509.363 179.213 508.994 180.026L509.029 180ZM488.733 182.388C488.352 183.204 488.087 184.068 487.945 184.956C488.525 184.28 489 183.521 489.358 182.705C489.739 181.89 490.004 181.026 490.145 180.137C489.555 180.821 489.067 181.589 488.699 182.414L488.733 182.388ZM496.317 147.344C495.929 148.156 495.663 149.021 495.529 149.912C496.103 149.233 496.576 148.474 496.933 147.66C497.321 146.848 497.587 145.983 497.721 145.092C497.133 145.777 496.648 146.544 496.283 147.369L496.317 147.344Z" fill="white"/>
<path id="Vector_95" d="M512.521 130.839C521.672 142.661 533.202 163.453 531.67 167.938C527.827 179.186 516.519 192.129 511.023 196.666C507.813 199.311 493.047 183.073 495.735 180.582C500.015 176.644 510.964 163.727 512.248 162.015C512.932 161.108 507.908 145.905 505.528 135.684C502.951 124.565 508.062 125.07 512.521 130.839Z" fill="#D3766A"/>
<path id="Vector_96" d="M488.545 192.403C489.101 191.085 488.408 190.776 486.182 192.018C483.956 193.259 476.193 200.03 474.053 197.154C471.913 194.278 483.015 184.836 486.893 183.064C490.77 181.292 497.618 179.76 497.618 179.76C495.829 182.011 492.003 187.917 488.545 192.403Z" fill="#D3766A"/>
<path id="Vector_97" d="M477.61 191.179L483.33 185.043L452.205 156.028L446.485 162.164L477.61 191.179Z" fill="#C7C7C7"/>
<path id="Vector_98" d="M496.762 211.953L505.407 202.674L480.412 179.365L471.758 188.644L496.762 211.953Z" fill="#263238"/>
<path id="Vector_99" d="M408.748 175.694C398.225 174.562 388.275 170.335 380.155 163.547C372.035 156.759 366.111 147.717 363.13 137.562C360.15 127.407 360.248 116.597 363.412 106.497C366.575 96.3983 372.663 87.4641 380.904 80.8246C389.145 74.1851 399.17 70.1386 409.711 69.1967C420.252 68.2549 430.836 70.46 440.124 75.5332C449.412 80.6064 456.987 88.3198 461.891 97.6981C466.795 107.076 468.807 117.698 467.675 128.221C466.14 142.324 459.075 155.242 448.027 164.142C436.98 173.042 422.854 177.197 408.748 175.694ZM409.407 169.6C418.722 170.602 428.125 168.82 436.427 164.478C444.729 160.137 451.558 153.431 456.049 145.209C460.54 136.986 462.492 127.617 461.659 118.285C460.825 108.954 457.243 100.079 451.365 92.7827C445.488 85.4868 437.579 80.0975 428.639 77.2963C419.698 74.4952 410.128 74.408 401.138 77.0457C392.148 79.6835 384.143 84.9278 378.133 92.1155C372.124 99.3032 368.381 108.111 367.377 117.426C366.047 129.915 369.726 142.422 377.605 152.203C385.484 161.983 396.921 168.24 409.407 169.6Z" fill="#37474F"/>
<path id="Vector_100" d="M460.835 106.7C458.975 101.288 456.186 96.2423 452.592 91.7888C444.933 82.3361 434.011 76.0953 421.978 74.2962C409.946 72.4971 397.676 75.2703 387.587 82.0692C377.498 88.8681 370.322 99.1995 367.472 111.027C364.623 122.855 366.307 135.321 372.193 145.969C378.079 156.616 387.74 164.673 399.272 168.55C410.803 172.428 423.369 171.846 434.493 166.918C445.616 161.99 454.49 153.075 459.366 141.928C464.242 130.782 464.766 118.214 460.835 106.7ZM459.979 127.398C458.855 137.946 454.108 147.778 446.546 155.217C438.985 162.657 429.077 167.243 418.512 168.195C407.947 169.147 397.379 166.405 388.61 160.438C379.84 154.47 373.412 145.645 370.42 135.468C367.429 125.291 368.06 114.391 372.205 104.627C376.351 94.8633 383.754 86.8392 393.154 81.9229C402.553 77.0066 413.367 75.5024 423.751 77.6667C434.136 79.831 443.448 85.5298 450.101 93.7918C457.717 103.243 461.272 115.329 459.988 127.398H459.979ZM460.835 106.7C458.975 101.288 456.186 96.2423 452.592 91.7888C444.933 82.3361 434.011 76.0953 421.978 74.2962C409.946 72.4971 397.676 75.2703 387.587 82.0692C377.498 88.8681 370.322 99.1995 367.472 111.027C364.623 122.855 366.307 135.321 372.193 145.969C378.079 156.616 387.74 164.673 399.272 168.55C410.803 172.428 423.369 171.846 434.493 166.918C445.616 161.99 454.49 153.075 459.366 141.928C464.242 130.782 464.766 118.214 460.835 106.7ZM459.979 127.398C458.855 137.946 454.108 147.778 446.546 155.217C438.985 162.657 429.077 167.243 418.512 168.195C407.947 169.147 397.379 166.405 388.61 160.438C379.84 154.47 373.412 145.645 370.42 135.468C367.429 125.291 368.06 114.391 372.205 104.627C376.351 94.8633 383.754 86.8392 393.154 81.9229C402.553 77.0066 413.367 75.5024 423.751 77.6667C434.136 79.831 443.448 85.5298 450.101 93.7918C457.717 103.243 461.272 115.329 459.988 127.398H459.979ZM466.63 104.723C462.252 91.8792 453.286 81.1039 441.453 74.4634C429.619 67.823 415.751 65.7848 402.507 68.74C389.263 71.6951 377.576 79.4353 369.688 90.4764C361.8 101.517 358.265 115.082 359.762 128.569C361.259 142.055 367.682 154.515 377.799 163.557C387.917 172.6 401.016 177.589 414.586 177.568C428.155 177.547 441.239 172.518 451.329 163.444C461.418 154.37 467.803 141.891 469.258 128.4C470.123 120.411 469.229 112.33 466.639 104.723H466.63ZM466.083 128.057C464.721 140.781 458.708 152.554 449.199 161.117C439.69 169.68 427.354 174.43 414.558 174.456C401.762 174.482 389.407 169.782 379.863 161.257C370.319 152.733 364.259 140.985 362.845 128.267C361.432 115.549 364.764 102.757 372.203 92.3452C379.642 81.9333 390.663 74.6349 403.153 71.8503C415.643 69.0657 428.721 70.9909 439.878 77.2567C451.035 83.5225 459.486 93.6875 463.609 105.801C466.056 112.949 466.903 120.547 466.091 128.057H466.083ZM452.583 91.7888C444.924 82.3361 434.002 76.0953 421.97 74.2962C409.937 72.4971 397.668 75.2703 387.579 82.0692C377.489 88.8681 370.313 99.1995 367.464 111.027C364.614 122.855 366.298 135.321 372.184 145.969C378.071 156.616 387.731 164.673 399.263 168.55C410.795 172.428 423.361 171.846 434.484 166.918C445.608 161.99 454.482 153.075 459.358 141.928C464.234 130.782 464.758 118.214 460.827 106.7C458.969 101.289 456.183 96.2429 452.592 91.7888H452.583ZM459.979 127.398C458.855 137.946 454.108 147.778 446.546 155.217C438.985 162.657 429.077 167.243 418.512 168.195C407.947 169.147 397.379 166.405 388.61 160.438C379.84 154.47 373.412 145.645 370.42 135.468C367.429 125.291 368.06 114.391 372.205 104.627C376.351 94.8633 383.754 86.8392 393.154 81.9229C402.553 77.0066 413.367 75.5024 423.751 77.6667C434.136 79.831 443.448 85.5298 450.101 93.7918C457.717 103.243 461.272 115.329 459.988 127.398H459.979Z" fill="#37474F"/>
<path id="Vector_101" d="M383.779 144.663C380.827 140.744 378.728 136.251 377.616 131.472C377.022 129.051 376.672 126.576 376.571 124.085C376.482 121.562 376.637 119.037 377.034 116.544C377.898 111.528 379.796 106.748 382.606 102.505C385.373 98.3323 388.891 94.7098 392.981 91.8223C389.83 95.5058 387.054 99.4946 384.695 103.729C383.583 105.812 382.635 107.978 381.861 110.209C381.08 112.411 380.507 114.68 380.149 116.989C379.389 121.609 379.352 126.319 380.038 130.95C380.73 135.655 381.986 140.259 383.779 144.663Z" fill="white"/>
<path id="Vector_102" d="M449.141 111.674C450.906 116.248 451.696 121.14 451.461 126.038C451.366 128.53 451.028 131.007 450.451 133.433C449.843 135.88 449.006 138.265 447.952 140.555C445.749 145.145 442.615 149.227 438.75 152.539C434.947 155.795 430.573 158.317 425.85 159.978C429.889 157.3 433.649 154.223 437.072 150.793C438.714 149.096 440.217 147.27 441.566 145.332C442.932 143.435 444.113 141.411 445.092 139.288C447.086 135.053 448.409 130.534 449.013 125.892C449.625 121.175 449.669 116.401 449.141 111.674Z" fill="white"/>
<path id="Vector_103" d="M512.743 194.697C507.462 200.885 501.264 208.915 492.584 211.911C491.63 212.265 490.584 212.289 489.614 211.979C485.745 213.392 483.922 211.979 483.922 211.979C479.915 212.193 478.246 210.507 478.246 210.507C478.246 210.507 473.684 212.116 472.254 209.522C470.645 206.621 477.39 204.926 480.48 201.741C487.645 194.431 495.777 182.053 497.6 179.742L512.743 194.697Z" fill="#D3766A"/>
<path id="Vector_104" d="M493.354 199.363C491.287 201.527 489.073 203.546 486.729 205.406C484.036 207.278 481.21 208.949 478.271 210.405C478.252 210.413 478.237 210.428 478.229 210.448C478.221 210.467 478.221 210.489 478.229 210.508C478.237 210.527 478.252 210.543 478.271 210.551C478.29 210.559 478.312 210.559 478.331 210.551C484.294 208.307 489.524 204.466 493.448 199.448C493.542 199.346 493.465 199.26 493.354 199.363Z" fill="#263238"/>
<path id="Vector_105" d="M498.388 203.043C496.188 204.978 492.293 208.351 483.836 211.903C483.836 211.903 483.836 211.963 483.836 211.954C489.425 210.432 494.479 207.382 498.431 203.146C498.611 203.018 498.542 202.915 498.388 203.043Z" fill="#263238"/>
<path id="Vector_106" d="M501.058 205.071C497.189 208.221 494.347 209.711 489.613 211.919C489.613 211.919 489.613 211.979 489.613 211.97C495.263 209.993 497.086 208.632 501.169 205.122C501.323 205.071 501.212 204.951 501.058 205.071Z" fill="#263238"/>
<path id="Vector_107" d="M515.817 196.879L496.643 177.688L511.195 161.86C508.772 153.574 503.944 137.036 503.14 131.044C502.189 124.025 507 122.904 511.768 128.313C522.691 140.683 535.197 164.265 535.205 168.434C535.197 174.341 515.817 196.879 515.817 196.879Z" fill="#6E5EFF"/>
<path id="Vector_108" d="M508.995 180.025C508.604 180.836 508.338 181.702 508.207 182.593C509.345 181.218 510.101 179.568 510.398 177.808C509.827 178.476 509.355 179.223 508.995 180.025ZM520.979 153.985C520.164 153.604 519.299 153.342 518.411 153.206C519.088 153.778 519.843 154.251 520.653 154.61C521.466 154.998 522.331 155.264 523.221 155.398C522.553 154.829 521.81 154.354 521.013 153.985H520.979ZM519.352 188.97C519.941 189.474 520.595 189.897 521.295 190.228L521.723 189.689C520.982 189.342 520.195 189.099 519.386 188.97H519.352ZM522.16 170.429C521.322 170.73 520.53 171.145 519.806 171.662C521.582 171.491 523.284 170.863 524.745 169.839C523.859 169.91 522.989 170.109 522.16 170.429ZM509.457 137.901C508.62 138.197 507.83 138.612 507.111 139.134C508.885 138.964 510.584 138.336 512.042 137.311C511.161 137.372 510.293 137.559 509.465 137.867L509.457 137.901Z" fill="white"/>
<path id="Vector_109" d="M516.578 191.402C515.619 189.998 510.74 184.939 509.516 183.698C508.292 182.456 503.19 177.62 501.923 176.345C501.855 176.276 501.735 176.345 501.812 176.422C503.036 177.706 507.761 182.944 508.977 184.203C510.192 185.461 515.114 190.443 516.51 191.462C516.561 191.496 516.612 191.444 516.578 191.402Z" fill="#263238"/>
<path id="Vector_110" d="M523.357 187.661C527.474 182.02 532.037 176.465 534.656 169.942C535.341 168.102 534.408 166.313 533.757 164.584C533.269 163.411 532.739 162.255 532.174 161.108C527.517 151.983 522.013 143.329 516.766 134.572C521.288 140.807 525.474 147.279 529.306 153.961C530.564 156.195 531.771 158.472 532.884 160.809C534.105 163.108 534.971 165.578 535.452 168.136C535.511 168.816 535.415 169.502 535.17 170.139C532.448 176.679 527.705 182.174 523.382 187.696L523.357 187.661Z" fill="#263238"/>
<path id="Vector_111" d="M519.01 137.91C518.594 137.12 518.242 136.299 517.957 135.453C518.502 136.175 518.863 137.018 519.01 137.91Z" fill="#263238"/>
<path id="Vector_112" d="M505.75 142.027C507.462 147.591 509.517 154.011 511.066 159.652C511.254 160.371 511.451 161.048 511.58 161.801C511.596 161.939 511.562 162.079 511.485 162.195C508.198 166.286 504.064 170.233 500.417 174.008L496.66 177.688V177.637L497.13 178.193L496.6 177.688C496.6 177.688 496.6 177.688 496.6 177.637L500.109 173.716C503.533 169.847 507.574 165.747 510.775 161.784C510.768 161.826 510.768 161.87 510.775 161.912C510.775 161.664 510.664 161.416 510.595 161.142C508.986 154.91 506.974 148.353 505.767 142.036L505.75 142.027Z" fill="#263238"/>
<path id="Vector_113" d="M505.406 143.277C505.909 144.133 506.363 145.016 506.767 145.922C506.112 145.16 505.646 144.254 505.406 143.277Z" fill="#263238"/>
<path id="Vector_114" d="M475.799 180.993C475.431 178.22 472.375 180.248 472.375 180.248C472.375 180.248 476.055 176.276 474.566 173.571C473.077 170.867 469.533 173.571 469.276 173.726C469.464 173.512 472.76 169.779 470.988 167.22C469.216 164.661 465.98 167.759 465.775 167.965C465.895 167.708 467.418 164.284 465.629 162.64C462.548 159.824 457.369 169.249 454.142 170.233L449.006 166.578C449.761 168.013 450.079 169.638 449.922 171.252C449.776 173.58 449.665 175.138 450.247 176.482C450.487 177.094 450.918 177.613 451.476 177.96C452.035 178.307 452.691 178.464 453.346 178.408C453.346 178.408 451.737 180.89 453.063 182.953C453.757 184.006 456.059 183.852 456.059 183.852C455.722 184.432 455.551 185.094 455.566 185.764C455.581 186.435 455.782 187.089 456.145 187.653C457.181 189.057 459.329 188.68 459.329 188.68C459.329 188.68 459.081 191.179 460.596 192.275C463.678 194.492 476.595 186.917 475.799 180.993Z" fill="#D3766A"/>
<path id="Vector_115" d="M452.823 169.573L449.091 166.662C448.928 166.594 448.766 166.508 448.603 166.448C443.022 164.137 436.225 167.861 439.589 170.6C442.157 172.689 447.464 170.951 449.776 173.468L452.823 169.573Z" fill="#D3766A"/>
<path id="Vector_116" d="M459.671 188.67C459.62 188.67 459.671 188.756 459.671 188.747C464.719 187.259 469.196 184.274 472.511 180.187C472.614 180.059 472.443 179.836 472.306 179.956C468.537 183.456 464.282 186.391 459.671 188.67Z" fill="#263238"/>
<path id="Vector_117" d="M456.015 183.912C455.964 183.912 456.015 184.023 456.067 184.006C461.624 182.296 466.386 178.652 469.489 173.734C469.6 173.554 469.489 173.298 469.378 173.486C467.118 176.756 460.381 181.832 456.015 183.912Z" fill="#263238"/>
<path id="Vector_118" d="M465.86 167.537C462.778 172.305 458.473 175.6 453.568 178.357C453.499 178.357 453.568 178.477 453.619 178.468C456.393 177.775 459.337 175.695 461.486 173.88C463.516 172.233 465.083 170.085 466.031 167.648C466.065 167.545 465.929 167.434 465.86 167.537Z" fill="#263238"/>
<path id="Vector_119" d="M498.097 132.612C501.11 132.407 504.594 126.62 505.416 122.546C505.467 122.272 504.32 119.875 503.07 116.887C502.317 115.081 501.512 113.044 500.922 111.135C500.802 110.741 489.854 117.769 489.854 117.769C491.272 119.945 492.421 122.285 493.278 124.737C493.359 125.002 493.413 125.274 493.44 125.55C493.438 125.596 493.438 125.641 493.44 125.687C493.688 127.254 495.178 132.818 498.097 132.612Z" fill="#D3766A"/>
<path id="Vector_120" d="M501.923 114.011C499.612 121.784 494.039 122.982 492.721 123.162C491.923 121.285 490.964 119.48 489.854 117.769C489.854 117.769 500.802 110.741 500.922 111.135C501.221 112.077 501.564 113.053 501.923 114.011Z" fill="#263238"/>
<path id="Vector_121" d="M499.534 95.4611C501.768 99.5356 502.102 112.581 499.534 116.005C495.896 121.004 488.62 122.922 484.049 118.248C479.607 113.711 479.495 96.6852 482.423 93.4238C486.78 88.6473 496.239 89.4348 499.534 95.4611Z" fill="#D3766A"/>
<path id="Vector_122" d="M489.014 106.367C489.014 106.367 489.083 106.367 489.083 106.444C489.083 107.3 489.228 108.336 490.033 108.601V108.653C489.057 108.541 488.869 107.206 489.014 106.367Z" fill="#263238"/>
<path id="Vector_123" d="M489.776 105.425C491.188 105.28 491.377 108.113 490.076 108.25C488.775 108.387 488.595 105.554 489.776 105.425Z" fill="#263238"/>
<path id="Vector_124" d="M483.862 106.537C483.862 106.537 483.794 106.588 483.794 106.623C483.888 107.479 483.837 108.514 483.066 108.857C483.066 108.857 483.066 108.917 483.066 108.908C484.034 108.711 484.085 107.359 483.862 106.537Z" fill="#263238"/>
<path id="Vector_125" d="M483.014 105.674C481.593 105.674 481.679 108.507 483.014 108.516C484.35 108.524 484.204 105.682 483.014 105.674Z" fill="#263238"/>
<path id="Vector_126" d="M491.07 104.817C490.684 104.912 490.308 104.937 489.923 104.997C489.528 105.13 489.101 105.13 488.707 104.997C488.595 104.927 488.508 104.822 488.462 104.698C488.416 104.575 488.411 104.439 488.45 104.312C488.564 104.072 488.74 103.866 488.96 103.716C489.179 103.565 489.435 103.476 489.7 103.456C490.231 103.341 490.786 103.426 491.258 103.696C491.351 103.767 491.423 103.862 491.466 103.971C491.51 104.08 491.522 104.198 491.503 104.314C491.483 104.429 491.433 104.537 491.356 104.626C491.28 104.715 491.181 104.781 491.07 104.817Z" fill="#263238"/>
<path id="Vector_127" d="M481.713 104.005C482.107 104.005 482.475 103.911 482.869 103.859C483.281 103.867 483.685 103.738 484.016 103.491C484.105 103.392 484.16 103.267 484.173 103.134C484.185 103.002 484.154 102.869 484.084 102.755C483.907 102.557 483.681 102.41 483.428 102.327C483.176 102.245 482.906 102.23 482.646 102.284C482.104 102.319 481.595 102.554 481.217 102.943C481.136 103.037 481.084 103.152 481.067 103.275C481.05 103.398 481.069 103.523 481.121 103.635C481.174 103.747 481.257 103.842 481.362 103.907C481.467 103.973 481.589 104.007 481.713 104.005Z" fill="#263238"/>
<path id="Vector_128" d="M489.435 111.536C489.233 111.897 488.959 112.213 488.631 112.465C488.303 112.716 487.927 112.898 487.526 113C487.177 113.092 486.816 113.132 486.456 113.12C486.388 113.128 486.319 113.128 486.25 113.12H486.054C486.007 113.115 485.963 113.095 485.929 113.062C485.895 113.03 485.872 112.987 485.865 112.94V112.846V112.769C485.797 112.101 485.797 111.057 485.797 111.057C485.557 111.203 484.333 111.853 484.333 111.494C484.201 108.444 484.381 105.39 484.872 102.377C484.878 102.36 484.889 102.345 484.903 102.335C484.918 102.324 484.936 102.318 484.954 102.318C484.972 102.318 484.989 102.324 485.004 102.335C485.018 102.345 485.029 102.36 485.035 102.377C485.172 105.193 484.804 108.018 484.898 110.852C485.333 110.613 485.8 110.437 486.285 110.329C486.379 110.329 486.285 112.324 486.285 112.624C486.841 112.642 487.396 112.547 487.915 112.346C488.434 112.144 488.908 111.84 489.306 111.451C489.409 111.408 489.478 111.459 489.435 111.536Z" fill="#263238"/>
<path id="Vector_129" d="M486.832 112.751C487.233 113.209 487.746 113.554 488.321 113.753C488.639 113.855 488.98 113.855 489.297 113.753C489.991 113.522 489.956 112.897 489.794 112.34C489.704 112.042 489.581 111.755 489.426 111.484C488.719 112.173 487.81 112.617 486.832 112.751Z" fill="#263238"/>
<path id="Vector_130" d="M488.322 113.754C488.639 113.857 488.981 113.857 489.298 113.754C489.991 113.523 489.957 112.898 489.795 112.342C489.427 112.378 489.081 112.537 488.814 112.794C488.547 113.05 488.374 113.388 488.322 113.754Z" fill="#FF9ABB"/>
<path id="Vector_131" d="M500.52 108.139C498.157 108.054 497.524 102.147 497.524 102.147C497.524 102.147 494.51 101.351 493.055 96.0867C493.055 96.0867 491.6 101.557 481.824 101.351C481.345 99.6615 481.414 97.8631 482.021 96.2151C481.234 97.9773 480.593 99.801 480.104 101.668C480.104 101.668 476.997 93.8611 483.528 90.343C486.139 88.9477 490.316 88.7594 496.924 91.2503C496.924 91.2503 497.78 87.347 498.534 87.775C499.287 88.203 498.268 91.8667 498.268 91.8667C498.268 91.8667 500.948 90.7282 501.47 91.2675C501.992 91.8067 499.321 92.6884 499.321 92.6884C500.605 93.0067 501.731 93.7758 502.495 94.8553C503.258 95.9348 503.608 97.2529 503.481 98.5691C503.327 103.166 501.684 108.173 500.52 108.139Z" fill="#263238"/>
<path id="Vector_132" d="M498.593 92.7469C499.81 92.5855 501.045 92.8739 502.064 93.5579C503.084 94.2419 503.819 95.2745 504.131 96.4619C504.411 97.8822 504.353 99.3485 503.96 100.742C503.592 102.189 503.037 103.582 502.308 104.885C502.308 104.962 502.163 104.885 502.205 104.816C502.825 103.596 503.255 102.289 503.481 100.939C503.764 99.658 503.839 98.34 503.703 97.0354C503.523 95.8298 502.894 94.737 501.941 93.9765C500.988 93.216 499.783 92.844 498.568 92.9352C498.525 92.8924 498.516 92.7554 498.593 92.7469Z" fill="#263238"/>
<path id="Vector_133" d="M488.954 88.5104C490.637 88.7168 492.286 89.1427 493.859 89.7773C495.379 90.3127 496.798 91.1029 498.053 92.1142C498.063 92.1252 498.069 92.139 498.07 92.1535C498.071 92.168 498.068 92.1826 498.06 92.195C498.052 92.2074 498.041 92.217 498.027 92.2225C498.014 92.228 497.999 92.229 497.985 92.2255C495.297 90.7063 492.356 89.6883 489.305 89.2209C486.506 88.7159 483.313 89.0326 481.43 91.4551H481.361C482.979 88.9042 486.155 88.168 488.954 88.5104Z" fill="#263238"/>
<path id="Vector_134" d="M482.184 111.28C480.728 111.28 479.53 109.517 479.504 107.317C479.479 105.117 480.651 103.319 482.072 103.311C483.493 103.302 484.726 105.074 484.752 107.274C484.777 109.474 483.639 111.28 482.184 111.28ZM482.115 103.841C480.951 103.841 480.026 105.408 480.044 107.317C480.061 109.226 481.019 110.741 482.175 110.741C483.331 110.741 484.264 109.174 484.247 107.265C484.229 105.356 483.271 103.833 482.115 103.841Z" fill="#37474F"/>
<path id="Vector_135" d="M491.12 111.194C490.32 111.256 489.52 111.076 488.824 110.677C488.128 110.278 487.568 109.679 487.217 108.958C486.866 108.236 486.741 107.426 486.856 106.632C486.972 105.839 487.324 105.098 487.866 104.507C488.408 103.915 489.115 103.501 489.896 103.317C490.677 103.133 491.495 103.189 492.244 103.476C492.993 103.764 493.638 104.27 494.096 104.929C494.553 105.587 494.802 106.369 494.809 107.171C494.832 107.678 494.755 108.184 494.582 108.66C494.409 109.137 494.143 109.575 493.8 109.949C493.457 110.323 493.044 110.625 492.584 110.839C492.124 111.052 491.627 111.173 491.12 111.194ZM491.051 103.755C490.367 103.714 489.686 103.88 489.097 104.23C488.507 104.58 488.036 105.1 487.746 105.721C487.455 106.341 487.357 107.035 487.465 107.713C487.573 108.39 487.882 109.019 488.351 109.518C488.821 110.018 489.43 110.365 490.099 110.515C490.768 110.664 491.467 110.61 492.104 110.358C492.742 110.106 493.289 109.668 493.676 109.101C494.062 108.535 494.269 107.865 494.27 107.179C494.293 106.3 493.968 105.446 493.365 104.805C492.762 104.164 491.931 103.787 491.051 103.755Z" fill="#37474F"/>
<path id="Vector_136" d="M487.534 106.888C485.531 106.203 484.641 106.888 484.633 106.888L484.299 106.469C484.342 106.469 485.403 105.613 487.723 106.392L487.534 106.888Z" fill="#37474F"/>
<path id="Vector_137" d="M494.536 106.829L494.434 106.307C494.785 106.239 500.117 104.963 501.008 104.912C501.898 104.86 504.124 106.042 504.372 106.179L504.115 106.649C503.173 106.087 502.147 105.68 501.076 105.443C500.357 105.485 497.455 106.264 494.536 106.829Z" fill="#37474F"/>
<path id="Vector_138" d="M498.346 107.856C498.346 107.856 500.434 103.242 502.48 103.91C504.526 104.577 503.482 110.903 501.462 112.119C501.213 112.293 500.932 112.416 500.635 112.479C500.338 112.541 500.032 112.543 499.734 112.484C499.436 112.425 499.154 112.306 498.903 112.134C498.653 111.962 498.44 111.742 498.277 111.485L498.346 107.856Z" fill="#D3766A"/>
<path id="Vector_139" d="M502.137 105.674C502.137 105.674 502.188 105.674 502.137 105.734C500.725 106.59 500.185 108.199 499.894 109.774C499.955 109.605 500.052 109.45 500.178 109.322C500.304 109.193 500.457 109.093 500.625 109.029C500.793 108.965 500.973 108.938 501.153 108.949C501.333 108.961 501.508 109.012 501.666 109.098V109.183C501.382 109.149 501.094 109.203 500.841 109.337C500.589 109.472 500.383 109.681 500.254 109.937C500.043 110.369 499.88 110.822 499.766 111.289C499.715 111.435 499.458 111.409 499.483 111.238C499.047 109.269 500.083 106.264 502.137 105.674Z" fill="#263238"/>
<path id="Vector_140" d="M493.347 124.975L497.301 131.275L505.005 121.346L507.428 124.273C507.428 124.273 500.845 138.423 500.759 137.815L497.233 132.568L493.697 136.993L492.756 127.141L493.347 124.975Z" fill="#5446D6"/>
<path id="Vector_141" d="M492.9 132.175C492.806 130.54 492.66 128.896 492.635 127.261C492.635 127.201 492.729 127.167 492.755 127.261C493.294 128.776 493.611 135.025 493.833 136.506C493.987 136.318 497.137 132.585 497.18 132.637C497.908 133.493 500.484 137.268 500.673 137.627C501.717 135.376 506.194 126.456 507.521 124.291C507.521 124.222 507.658 124.291 507.632 124.334C506.776 126.679 500.998 138.432 500.895 138.415C499.562 136.629 498.327 134.772 497.197 132.851C496.684 133.647 493.551 137.798 493.508 137.559C493.209 135.776 493.006 133.979 492.9 132.175Z" fill="#263238"/>
<path id="Vector_142" d="M285.098 398.04C283.061 398.828 223.997 399.898 221.686 398.58C221.438 398.425 221.506 395.823 220.642 389.078C220.59 388.761 219.246 387.503 217.141 385.74C209.248 379.123 190.682 365.196 190.682 365.196L220.162 339.584L248.718 367.661L256.149 374.962C256.149 374.962 280.279 387.991 282.685 389.711C285.09 391.432 287.127 397.261 285.098 398.04Z" fill="#DD6A57"/>
<path id="Vector_143" d="M285.1 398.039C283.062 398.827 223.998 399.897 221.687 398.579C221.439 398.433 221.507 395.822 220.634 389.077C220.634 388.76 219.248 387.511 217.142 385.739C214.394 383.436 213.093 382.383 209.01 379.207L246.477 365.426L248.728 367.634L256.15 374.936C256.15 374.936 280.28 387.964 282.686 389.685C285.091 391.405 287.128 397.26 285.1 398.039Z" fill="#EBEBEB"/>
<path id="Vector_144" d="M289.166 398.896C287.111 399.615 224.187 400.299 221.918 398.896C221.388 398.57 220.9 394.915 220.515 389.908C220.463 389.283 214.086 384.19 213.213 383.239L251.733 370.254L256.604 374.834C256.604 374.834 284.98 388.042 287.3 389.839C289.619 391.637 291.22 398.142 289.166 398.896Z" fill="#7C81A3"/>
<path id="Vector_145" d="M288.292 396.508C278.406 396.379 234.553 396.799 224.769 397.423C224.692 397.423 224.692 397.483 224.769 397.492C234.57 397.826 278.414 397.081 288.292 396.636C288.472 396.662 288.472 396.508 288.292 396.508Z" fill="#263238"/>
<path id="Vector_146" d="M259.788 375.22C255.893 374.543 251.142 375.22 248.206 377.993C248.086 378.104 248.249 378.267 248.369 378.224C252.073 376.985 255.898 376.141 259.779 375.708C259.836 375.698 259.888 375.669 259.926 375.625C259.964 375.581 259.985 375.525 259.986 375.467C259.987 375.409 259.968 375.353 259.932 375.308C259.895 375.262 259.844 375.231 259.788 375.22Z" fill="#263238"/>
<path id="Vector_147" d="M262.621 376.879C258.717 376.195 253.967 376.879 251.03 379.653C250.919 379.764 251.073 379.927 251.202 379.884C254.904 378.639 258.73 377.795 262.612 377.367C262.669 377.358 262.721 377.328 262.759 377.284C262.797 377.24 262.818 377.185 262.819 377.127C262.82 377.069 262.801 377.013 262.765 376.967C262.728 376.922 262.677 376.891 262.621 376.879Z" fill="#263238"/>
<path id="Vector_148" d="M265.445 378.54C261.55 377.855 256.799 378.54 253.855 381.313C253.743 381.424 253.898 381.587 254.026 381.544C257.729 380.3 261.554 379.456 265.436 379.027C265.493 379.018 265.545 378.988 265.583 378.945C265.621 378.901 265.642 378.845 265.643 378.787C265.644 378.729 265.625 378.673 265.589 378.627C265.553 378.582 265.502 378.551 265.445 378.54Z" fill="#263238"/>
<path id="Vector_149" d="M268.271 380.192C264.376 379.516 259.625 380.192 256.689 382.974C256.569 383.085 256.689 383.239 256.852 383.205C260.553 381.957 264.379 381.113 268.262 380.689C268.328 380.69 268.392 380.665 268.439 380.619C268.487 380.573 268.514 380.51 268.515 380.445C268.516 380.379 268.491 380.315 268.445 380.268C268.399 380.22 268.337 380.193 268.271 380.192Z" fill="#263238"/>
<path id="Vector_150" d="M266.866 366.137C265.316 364.057 262.483 365.033 260.874 366.42C258.158 368.846 256.127 371.942 254.984 375.399C254.979 375.415 254.977 375.431 254.979 375.447C254.982 375.463 254.987 375.478 254.997 375.492C255.006 375.505 255.018 375.516 255.032 375.524C255.046 375.532 255.062 375.536 255.079 375.536C255.079 375.827 255.361 376.144 255.695 376.016C258.896 374.791 262.466 373.876 265.188 371.736C266.78 370.434 268.338 368.08 266.866 366.137ZM260.163 373.165C258.605 373.807 257.022 374.363 255.489 375.065C256.645 373.353 257.715 371.53 259.042 369.929C259.668 369.133 260.349 368.381 261.079 367.678C262.226 366.617 266.78 364.323 266.147 368.594C265.796 370.914 262.021 372.36 260.163 373.165Z" fill="#263238"/>
<path id="Vector_151" d="M245.09 374.5C248.308 375.827 251.998 375.716 255.413 376.007C255.489 376.007 255.564 375.989 255.632 375.954C255.7 375.919 255.758 375.869 255.803 375.807C255.847 375.745 255.876 375.673 255.887 375.598C255.898 375.522 255.891 375.446 255.867 375.373C255.882 375.367 255.895 375.358 255.906 375.346C255.917 375.334 255.926 375.32 255.93 375.304C255.935 375.289 255.937 375.272 255.935 375.256C255.933 375.24 255.927 375.224 255.918 375.211C253.865 372.204 251.054 369.795 247.769 368.226C245.843 367.37 242.847 367.181 241.931 369.621C241.075 371.924 243.207 373.721 245.09 374.5ZM243.301 371.744C241.503 367.815 246.519 368.748 247.915 369.458C248.807 369.931 249.665 370.466 250.483 371.059C252.195 372.258 253.744 373.679 255.336 375.031C253.667 374.791 251.989 374.689 250.32 374.509C248.325 374.286 244.294 373.91 243.301 371.744Z" fill="#263238"/>
<path id="Vector_152" d="M249.097 366.068L212.699 384.943C212.699 384.943 174.744 350.592 171.269 350.335C167.794 350.078 116.725 384.729 91.019 384.832C64.3974 384.943 63.0449 357.055 63.0449 357.055L101.865 348.135C129.856 334.337 159.02 309.547 178.091 311.858C198.832 314.375 249.097 366.068 249.097 366.068Z" fill="#455A64"/>
<path id="Vector_153" d="M240.227 361.232C234.081 364.271 235.802 363.321 229.69 366.419C226.694 367.943 211.628 375.544 209.069 377.427C209.057 377.437 209.048 377.451 209.045 377.466C209.041 377.482 209.043 377.498 209.05 377.512C209.057 377.526 209.069 377.537 209.083 377.543C209.097 377.55 209.114 377.551 209.129 377.547C212.142 376.537 227.036 368.611 230.007 367.036C236.067 363.826 234.287 364.682 240.279 361.403C240.293 361.404 240.308 361.4 240.322 361.394C240.335 361.388 240.347 361.378 240.356 361.366C240.365 361.354 240.371 361.341 240.374 361.326C240.377 361.311 240.376 361.296 240.371 361.282C240.367 361.268 240.36 361.255 240.349 361.244C240.339 361.233 240.326 361.225 240.312 361.22C240.298 361.215 240.283 361.214 240.268 361.216C240.253 361.218 240.239 361.223 240.227 361.232Z" fill="#263238"/>
<path id="Vector_154" d="M206.245 376.246C199.123 369.963 175.78 349.513 174.838 348.752C174.102 348.053 173.286 347.444 172.407 346.937C172.043 346.793 171.651 346.735 171.261 346.766C170.871 346.797 170.493 346.917 170.156 347.117C169.077 347.622 168.024 348.169 166.954 348.692L160.637 351.773C152.48 355.762 144.373 359.845 136.138 363.697C128.229 367.404 122.579 370.896 114.319 373.738C106.106 376.637 97.6103 378.662 88.9729 379.782C87.9114 379.91 86.8414 380.03 85.7714 380.124C85.6944 380.124 85.7029 380.252 85.7714 380.244C94.2473 379.747 102.627 378.188 110.715 375.604C118.899 373.088 124.454 369.826 132.227 366.248C140.281 362.542 148.217 358.544 156.195 354.632C160.389 352.544 164.566 350.446 168.769 348.383C169.728 347.921 171.08 346.903 172.193 347.408C172.647 347.662 173.067 347.973 173.443 348.332L174.847 349.496C176.644 350.994 205.252 375.63 206.194 376.34C206.219 376.4 206.296 376.306 206.245 376.246Z" fill="#263238"/>
<path id="Vector_155" d="M62.9679 357.054C62.9679 357.054 58.6194 382.238 71.2112 392.15C83.803 402.063 176.08 400.839 190.084 396.327C204.088 391.816 204.516 369.209 189.228 363.979C174.676 358.997 112.744 356.575 111.212 355.967C110.827 355.813 116.708 352.295 116.682 352.081L102.584 347.801L62.9679 357.054Z" fill="#455A64"/>
<path id="Vector_156" d="M82.0892 356.412C82.0892 356.31 81.9009 356.344 81.9009 356.412C81.9067 359.338 80.8755 362.171 78.9905 364.408C76.8505 366.89 73.6833 368.277 70.8242 369.723C70.5418 369.86 70.7558 370.297 71.0382 370.203C72.7963 369.68 74.4925 368.968 76.0972 368.08C77.5691 367.294 78.8653 366.216 79.9064 364.913C80.8391 363.724 81.5148 362.355 81.8906 360.892C82.2663 359.429 82.334 357.903 82.0892 356.412Z" fill="#263238"/>
<path id="Vector_157" d="M110.183 353.297C109.541 352.441 108.839 351.705 108.18 350.909C106.596 349.034 105.013 347.142 103.361 345.336C103.207 345.165 102.899 345.404 103.044 345.593C104.157 347.048 105.338 348.46 106.468 349.873C107.059 350.6 107.658 351.319 108.257 352.047C108.884 352.693 109.444 353.401 109.926 354.161C110.363 354.975 109.798 355.659 108.959 355.754C108.218 355.77 107.499 355.503 106.947 355.009C105.694 353.901 104.547 352.677 103.523 351.354C102.864 350.609 102.197 349.864 101.52 349.128C100.844 348.392 100.039 347.596 99.329 346.808C99.329 346.766 99.192 346.808 99.2348 346.885C99.8597 347.741 100.433 348.64 101.067 349.496C101.7 350.352 102.325 351.208 102.967 352.064C103.609 352.92 104.217 353.648 104.867 354.41C105.408 355.082 106.056 355.661 106.785 356.122C107.983 356.832 110.063 356.978 110.705 355.437C110.813 355.066 110.822 354.673 110.73 354.297C110.638 353.922 110.45 353.577 110.183 353.297Z" fill="#263238"/>
<path id="Vector_158" d="M188.166 396.395C183.347 396.49 178.528 396.764 173.709 396.866C168.889 396.969 164.138 396.995 159.362 396.952C149.752 396.866 140.153 396.493 130.566 395.831C120.885 395.163 110.433 394.196 100.82 392.869C96.2148 392.227 91.5496 391.696 86.9957 390.72C82.9117 389.955 79.1311 388.04 76.0988 385.199C69.8672 379.156 67.4447 370.27 66.4517 361.779C66.3233 360.64 66.212 359.502 66.1179 358.355C66.1179 358.339 66.1116 358.324 66.1003 358.312C66.0891 358.301 66.0739 358.295 66.058 358.295C66.0421 358.295 66.0268 358.301 66.0156 358.312C66.0044 358.324 65.998 358.339 65.998 358.355C66.563 367.052 67.9155 376.125 73.3853 383.127C75.7005 386.177 78.7763 388.565 82.3048 390.053C86.5848 391.765 91.3956 392.184 95.9409 392.8C105.605 394.11 116.091 395.12 125.807 395.873C135.522 396.627 145.375 397.106 155.185 397.251C164.994 397.397 174.796 397.251 184.588 396.772C185.778 396.712 186.977 396.644 188.166 396.541C188.235 396.498 188.235 396.395 188.166 396.395Z" fill="#263238"/>
<path id="Vector_159" d="M157.768 359.365C154.738 358.928 151.708 358.509 148.661 358.167C145.613 357.824 142.489 357.576 139.407 357.311C133.295 356.797 127.175 356.335 121.055 356.044C117.579 355.881 114.104 355.864 110.629 355.907C110.509 355.907 110.526 356.069 110.629 356.078C116.749 356.634 122.869 357.02 128.998 357.43C135.127 357.841 141.23 358.372 147.334 358.954C150.758 359.279 154.259 359.536 157.717 359.81C157.768 359.803 157.815 359.78 157.851 359.743C157.887 359.706 157.91 359.659 157.916 359.608C157.922 359.556 157.911 359.505 157.884 359.461C157.857 359.417 157.816 359.383 157.768 359.365Z" fill="#263238"/>
<path id="Vector_160" d="M117.382 351.755C114.936 352.805 112.585 354.062 110.354 355.513C108.083 356.876 105.909 358.394 103.849 360.059C103.797 360.11 103.849 360.187 103.926 360.153C106.314 359.057 108.608 357.67 110.877 356.352C113.177 355.06 115.398 353.63 117.528 352.072C117.673 351.969 117.588 351.67 117.382 351.755Z" fill="#263238"/>
<path id="Vector_161" d="M94.0659 312.774C95.4526 324.399 106.255 348.581 111.682 352.732C115.175 355.395 129.847 357.971 137.474 357.706C140.607 357.603 142.156 336.075 137.474 335.938C131.806 335.782 126.176 334.97 120.696 333.515C119.917 333.293 114.113 327.095 102.138 312.115C97.6525 306.517 93.304 306.226 94.0659 312.774Z" fill="#EB9481"/>
<path id="Vector_162" d="M134.795 357.371C137.796 358.385 140.865 359.183 143.98 359.76C146.436 360.085 153.55 360.855 154.183 358.185C154.62 356.361 150.485 355.42 147.583 354.684C146.051 354.298 144.057 353.057 144.339 352.064C144.844 350.352 148.79 351.414 151.444 352.467C156.58 354.504 163.582 358.459 166.107 355.677C167.057 354.607 165.551 353.151 163.462 351.807C166.741 353.245 170.173 354.307 171.277 353.168C171.557 352.87 171.712 352.477 171.712 352.069C171.712 351.66 171.557 351.267 171.277 350.969C171.681 351.088 172.111 351.085 172.514 350.96C172.916 350.835 173.272 350.594 173.537 350.267C174.393 349.094 173.657 347.656 172.364 346.278C172.544 346.229 172.71 346.138 172.848 346.013C172.986 345.888 173.093 345.732 173.161 345.559C174.753 342.135 163.068 334.602 159.37 334.285C148.474 333.352 137.414 335.937 137.414 335.937C133.81 339.832 134.786 357.371 134.795 357.371Z" fill="#EB9481"/>
<path id="Vector_163" d="M148.816 345.379C151.38 345.399 153.91 345.965 156.238 347.04C159.165 348.401 161.245 350.198 163.796 351.936C163.856 351.987 163.796 352.09 163.719 352.047C162.512 351.191 157.539 348.169 156.272 347.493C153.977 346.246 151.426 345.54 148.816 345.43C148.816 345.43 148.79 345.379 148.816 345.379Z" fill="#263238"/>
<path id="Vector_164" d="M150.116 340.628C153.017 340.873 155.885 341.412 158.676 342.237C161.698 343.247 164.24 345.25 166.74 347.176C168.241 348.317 169.713 349.504 171.157 350.737C171.217 350.788 171.157 350.9 171.088 350.848C168.543 348.851 165.944 346.936 163.29 345.105C160.841 343.382 158.074 342.163 155.15 341.518C153.438 341.15 151.777 340.91 150.082 340.662C150.082 340.688 150.082 340.619 150.116 340.628Z" fill="#263238"/>
<path id="Vector_165" d="M152.487 336.279C155.252 336.433 157.666 336.553 160.26 337.64C163.192 339.008 165.943 340.733 168.452 342.776C169.813 343.863 171.14 344.984 172.458 346.131C172.509 346.183 172.458 346.277 172.372 346.226C169.385 343.728 166.24 341.427 162.956 339.335C161.411 338.313 159.715 337.539 157.931 337.041C156.139 336.627 154.315 336.367 152.479 336.262C152.479 336.262 152.47 336.279 152.487 336.279Z" fill="#263238"/>
<path id="Vector_166" opacity="0.1" d="M133.955 357.662C126.011 357.259 114.686 355.025 111.699 352.731C106.272 348.58 95.4346 324.398 94.0736 312.773C93.5514 308.399 95.3319 307.081 97.8913 308.348L133.955 357.662Z" fill="black"/>
<path id="Vector_167" d="M92.0622 312.722C92.824 317.909 96.8815 327.856 96.8815 327.856L116.338 325.433C116.338 325.433 105.732 312.148 97.7888 307.303C94.5959 305.369 91.3003 307.474 92.0622 312.722Z" fill="#E6089D"/>
<path id="Vector_168" d="M96.728 325.212C99.587 324.656 102.455 324.151 105.348 323.774C106.795 323.586 108.233 323.415 109.679 323.269C111.126 323.124 112.598 323.124 114.036 322.961C114.113 322.961 114.122 323.081 114.036 323.081C112.59 323.175 111.143 323.457 109.696 323.629L105.365 324.159C102.48 324.536 99.5956 324.895 96.728 325.332C96.6167 325.349 96.6167 325.221 96.728 325.212Z" fill="#263238"/>
<path id="Vector_169" opacity="0.1" d="M92.0631 312.713C92.825 317.909 96.8824 327.856 96.8824 327.856L111.434 326.041L96.7369 306.833C93.9463 305.857 91.3783 308.031 92.0631 312.713Z" fill="#020100"/>
<path id="Vector_170" d="M60.2363 359.896C61.8028 360.606 109.696 352.577 109.696 352.577L106.092 335.86C106.092 335.86 109.388 330.997 108.712 325.879C107.856 319.031 96.7276 306.678 95.8716 305.917C92.2935 302.895 88.9038 302.133 85.4883 303.468C71.2702 309.015 60.2363 359.896 60.2363 359.896Z" fill="#E6089D"/>
<path id="Vector_171" d="M92.8671 308.519C93.1168 308.536 93.3557 308.627 93.5537 308.781C93.7518 308.934 93.9 309.142 93.9797 309.379C94.0594 309.617 94.067 309.872 94.0016 310.114C93.9362 310.355 93.8007 310.572 93.6122 310.737C93.4236 310.902 93.1905 311.007 92.9423 311.039C92.6941 311.071 92.4419 311.029 92.2175 310.919C91.993 310.808 91.8065 310.633 91.6814 310.416C91.5563 310.199 91.4983 309.95 91.5146 309.7C91.5255 309.534 91.5691 309.371 91.643 309.221C91.717 309.072 91.8197 308.938 91.9454 308.829C92.0711 308.719 92.2172 308.635 92.3753 308.582C92.5335 308.529 92.7006 308.507 92.8671 308.519ZM79.2652 308.904C79.2489 309.154 79.307 309.403 79.4321 309.62C79.5572 309.837 79.7437 310.012 79.9681 310.122C80.1925 310.233 80.4447 310.275 80.693 310.243C80.9412 310.211 81.1743 310.106 81.3628 309.941C81.5513 309.776 81.6869 309.559 81.7523 309.318C81.8177 309.076 81.8101 308.821 81.7303 308.583C81.6506 308.346 81.5024 308.138 81.3044 307.984C81.1064 307.831 80.8674 307.74 80.6177 307.723C80.4281 307.707 80.2374 307.736 80.0613 307.808C79.7959 308.117 79.5391 308.442 79.2823 308.776C79.2823 308.776 79.2738 308.853 79.2652 308.904ZM102.548 329.131C102.532 329.381 102.59 329.63 102.715 329.847C102.84 330.064 103.027 330.239 103.251 330.35C103.476 330.461 103.728 330.503 103.976 330.47C104.224 330.438 104.457 330.333 104.646 330.168C104.835 330.003 104.97 329.787 105.035 329.545C105.101 329.303 105.093 329.048 105.014 328.811C104.934 328.573 104.786 328.365 104.588 328.212C104.39 328.059 104.151 327.968 103.901 327.95C103.734 327.939 103.567 327.96 103.409 328.013C103.251 328.066 103.105 328.15 102.979 328.26C102.854 328.37 102.751 328.503 102.677 328.653C102.603 328.802 102.559 328.965 102.548 329.131ZM90.2991 328.327C90.2828 328.577 90.3408 328.826 90.4659 329.042C90.591 329.259 90.7775 329.434 91.0019 329.545C91.2263 329.656 91.4786 329.698 91.7268 329.666C91.975 329.633 92.2081 329.528 92.3966 329.363C92.5852 329.199 92.7207 328.982 92.7861 328.74C92.8515 328.499 92.8439 328.243 92.7642 328.006C92.6845 327.769 92.5362 327.56 92.3382 327.407C92.1402 327.254 91.9013 327.163 91.6515 327.146C91.3159 327.124 90.9855 327.237 90.7322 327.458C90.4789 327.679 90.3232 327.991 90.2991 328.327ZM78.0497 327.531C78.0334 327.781 78.0915 328.03 78.2166 328.246C78.3416 328.463 78.5282 328.638 78.7526 328.749C78.977 328.86 79.2292 328.902 79.4774 328.87C79.7257 328.837 79.9588 328.732 80.1473 328.567C80.3358 328.403 80.4713 328.186 80.5368 327.944C80.6022 327.703 80.5945 327.447 80.5148 327.21C80.4351 326.973 80.2869 326.764 80.0889 326.611C79.8908 326.458 79.6519 326.367 79.4022 326.349C79.0665 326.328 78.7361 326.441 78.4828 326.662C78.2295 326.883 78.0739 327.195 78.0497 327.531ZM97.0358 319.39C97.0211 319.64 97.0807 319.889 97.2072 320.105C97.3337 320.321 97.5214 320.495 97.7466 320.604C97.9717 320.714 98.2243 320.754 98.4723 320.72C98.7204 320.686 98.9528 320.579 99.1403 320.413C99.3277 320.247 99.4618 320.03 99.5256 319.787C99.5893 319.545 99.5799 319.29 99.4986 319.053C99.4172 318.816 99.2675 318.609 99.0683 318.457C98.8692 318.305 98.6296 318.216 98.3797 318.2C98.213 318.189 98.0457 318.21 97.8875 318.264C97.7293 318.318 97.5834 318.403 97.4583 318.513C97.3332 318.624 97.2314 318.759 97.1589 318.909C97.0863 319.06 97.0445 319.223 97.0358 319.39ZM84.7864 318.586C84.77 318.836 84.8281 319.085 84.9535 319.302C85.0789 319.519 85.2659 319.694 85.4908 319.805C85.7157 319.916 85.9684 319.957 86.2169 319.925C86.4655 319.892 86.6987 319.786 86.887 319.62C87.0753 319.455 87.2102 319.237 87.2748 318.995C87.3393 318.752 87.3305 318.497 87.2495 318.259C87.1685 318.022 87.0189 317.814 86.8197 317.662C86.6205 317.51 86.3806 317.42 86.1303 317.404C85.7961 317.385 85.4679 317.499 85.2165 317.72C84.9651 317.941 84.8106 318.252 84.7864 318.586ZM73.3246 319.048C73.4515 319.093 73.5839 319.122 73.7183 319.133C74.0036 319.151 74.2865 319.072 74.521 318.909C74.7556 318.745 74.928 318.507 75.0103 318.234C75.0926 317.96 75.0799 317.667 74.9744 317.401C74.8688 317.135 74.6766 316.913 74.4288 316.771C74.0522 317.507 73.6841 318.269 73.3246 319.048ZM101.333 347.758C101.317 348.008 101.375 348.257 101.5 348.474C101.625 348.69 101.811 348.865 102.036 348.976C102.26 349.087 102.512 349.129 102.761 349.097C103.009 349.064 103.242 348.959 103.43 348.795C103.619 348.63 103.755 348.413 103.82 348.172C103.885 347.93 103.878 347.674 103.798 347.437C103.718 347.2 103.57 346.991 103.372 346.838C103.174 346.685 102.935 346.594 102.685 346.577C102.35 346.556 102.019 346.668 101.766 346.889C101.513 347.11 101.357 347.423 101.333 347.758ZM89.0835 346.962C89.0672 347.212 89.1253 347.461 89.2504 347.678C89.3755 347.894 89.562 348.069 89.7864 348.18C90.0108 348.291 90.2631 348.333 90.5113 348.301C90.7595 348.268 90.9926 348.163 91.1811 347.999C91.3697 347.834 91.5052 347.617 91.5706 347.375C91.636 347.134 91.6284 346.878 91.5487 346.641C91.4689 346.404 91.3207 346.195 91.1227 346.042C90.9247 345.889 90.6857 345.798 90.436 345.781C90.1004 345.759 89.77 345.872 89.5167 346.093C89.2634 346.314 89.1077 346.626 89.0835 346.962ZM76.8342 346.166C76.8213 346.415 76.8823 346.663 77.0096 346.877C77.137 347.092 77.3249 347.264 77.5498 347.373C77.7747 347.481 78.0266 347.521 78.2739 347.486C78.5211 347.452 78.7527 347.345 78.9395 347.18C79.1264 347.014 79.2602 346.797 79.3241 346.556C79.3879 346.314 79.3791 346.059 79.2987 345.823C79.2183 345.587 79.0698 345.38 78.872 345.227C78.6741 345.075 78.4357 344.985 78.1867 344.967C78.0189 344.956 77.8504 344.978 77.6912 345.032C77.5319 345.086 77.3851 345.172 77.2592 345.283C77.1333 345.395 77.0309 345.53 76.9579 345.682C76.8849 345.833 76.8429 345.998 76.8342 346.166ZM64.5848 345.361C64.5681 345.612 64.6265 345.862 64.7525 346.08C64.8785 346.298 65.0664 346.473 65.2923 346.583C65.5182 346.694 65.7719 346.735 66.021 346.7C66.2702 346.666 66.5035 346.559 66.6913 346.391C66.8792 346.224 67.013 346.005 67.0757 345.761C67.1385 345.518 67.1273 345.261 67.0437 345.024C66.9601 344.787 66.8078 344.58 66.6062 344.43C66.4046 344.279 66.1628 344.192 65.9116 344.18C65.5803 344.166 65.2564 344.281 65.0088 344.502C64.7611 344.722 64.609 345.03 64.5848 345.361ZM95.8203 338.017C95.8038 338.267 95.862 338.516 95.9874 338.733C96.1127 338.951 96.2997 339.126 96.5246 339.236C96.7495 339.347 97.0023 339.389 97.2508 339.356C97.4993 339.323 97.7325 339.217 97.9208 339.051C98.1091 338.886 98.2441 338.668 98.3086 338.426C98.3731 338.184 98.3643 337.928 98.2833 337.69C98.2023 337.453 98.0527 337.245 97.8535 337.093C97.6543 336.941 97.4144 336.851 97.1642 336.835C96.8294 336.814 96.5 336.927 96.248 337.148C95.9961 337.37 95.8423 337.682 95.8203 338.017ZM83.5709 337.263C83.5545 337.514 83.6126 337.763 83.738 337.98C83.8634 338.197 84.0504 338.372 84.2753 338.483C84.5002 338.594 84.7529 338.635 85.0014 338.602C85.25 338.57 85.4831 338.464 85.6715 338.298C85.8598 338.133 85.9947 337.915 86.0592 337.673C86.1238 337.43 86.115 337.174 86.034 336.937C85.953 336.7 85.8034 336.492 85.6042 336.34C85.4049 336.188 85.165 336.098 84.9148 336.082C84.7488 336.071 84.5822 336.092 84.4245 336.145C84.2668 336.198 84.1213 336.282 83.9963 336.392C83.8713 336.502 83.7694 336.636 83.6963 336.785C83.6233 336.935 83.5807 337.097 83.5709 337.263ZM71.3215 336.407C71.3 336.748 71.4146 337.083 71.6401 337.339C71.8657 337.595 72.1837 337.751 72.5242 337.773C72.8648 337.794 73.1999 337.68 73.456 337.454C73.712 337.229 73.868 336.911 73.8895 336.57C73.9002 336.401 73.8776 336.232 73.8229 336.073C73.7683 335.913 73.6827 335.765 73.571 335.638C73.4593 335.512 73.3237 335.408 73.172 335.334C73.0203 335.259 72.8555 335.215 72.6869 335.205C72.5182 335.194 72.3492 335.217 72.1893 335.271C72.0294 335.326 71.8819 335.412 71.7551 335.523C71.6283 335.635 71.5248 335.771 71.4504 335.922C71.376 336.074 71.3322 336.239 71.3215 336.407ZM82.3554 355.839C82.3432 356.044 82.3804 356.249 82.4638 356.436C82.5472 356.624 82.6744 356.789 82.8347 356.917L84.6666 356.626C84.7905 356.44 84.8642 356.225 84.8806 356.001C84.9022 355.661 84.7876 355.326 84.562 355.07C84.3365 354.813 84.0184 354.658 83.6779 354.636C83.3374 354.614 83.0022 354.729 82.7462 354.955C82.4901 355.18 82.3342 355.498 82.3126 355.839H82.3554ZM70.106 355.034C70.0896 355.284 70.1477 355.534 70.2731 355.751C70.3985 355.968 70.5855 356.143 70.8104 356.254C71.0353 356.364 71.288 356.406 71.5366 356.373C71.7851 356.34 72.0183 356.234 72.2066 356.069C72.3949 355.903 72.5298 355.685 72.5944 355.443C72.6589 355.201 72.6501 354.945 72.5691 354.708C72.4881 354.47 72.3385 354.263 72.1393 354.11C71.9401 353.958 71.7002 353.869 71.4499 353.853C71.113 353.834 70.7823 353.95 70.5304 354.174C70.2785 354.399 70.1259 354.714 70.106 355.051V355.034Z" fill="white"/>
<path id="Vector_172" d="M102.368 334.585C100.652 334.448 98.9266 334.681 97.3091 335.27C95.5971 335.818 91.7622 337.701 90.7949 338.163C90.7949 338.163 90.7949 338.232 90.7949 338.223C92.0383 337.908 93.2525 337.487 94.4244 336.965C96.0813 336.288 97.7729 335.7 99.4919 335.202C100.425 334.957 101.38 334.808 102.342 334.757C102.402 334.748 102.428 334.594 102.368 334.585Z" fill="#263238"/>
<path id="Vector_173" d="M105.039 336.468C103.339 335.959 101.527 335.959 99.8262 336.468C99.8262 336.468 99.8262 336.536 99.8262 336.528C100.682 336.485 101.538 336.434 102.394 336.434C103.25 336.434 104.106 336.494 104.962 336.519C105.056 336.545 105.065 336.477 105.039 336.468Z" fill="#263238"/>
<path id="Vector_174" d="M78.0757 312.217C74.412 319.271 64.8419 345.302 66.9477 351.063C70.0806 359.828 98.8936 355.865 106.392 355.933C108.96 355.933 108.25 334.011 105.605 333.403C103.293 332.873 85.9166 336.185 85.5914 335.218C85.3517 334.422 85.8739 326.23 84.9922 312.962C84.2646 302.519 79.9931 308.528 78.0757 312.217Z" fill="#EB9481"/>
<path id="Vector_175" d="M110.596 331.956C117.273 331.322 119.079 332.187 124.429 328.669C127.947 326.366 130.926 327.616 128.811 331.442C125.387 337.691 116.904 340.31 113.72 340.37L110.596 331.956Z" fill="#EB9481"/>
<path id="Vector_176" d="M92.6953 337.546C92.6953 337.546 100.331 333.745 107.376 332.367C112.255 331.426 123.083 330.544 132.902 341.629C135.23 344.257 136.685 349.658 131.327 346.765C127.509 344.694 125.72 342.228 123.28 341.432C123.28 341.432 124.316 348.52 121.568 350.754C119.183 352.704 116.663 354.484 114.027 356.078C113.627 355.659 113.252 355.216 112.905 354.752C112.905 354.752 110.166 356.601 105.201 355.899L92.6953 337.546Z" fill="#EB9481"/>
<path id="Vector_177" d="M112.136 332.213C114.388 333.514 119.113 336.364 122.169 340.028C125.593 344.111 130.994 352.868 127.955 355.351C125.73 357.165 123.359 353.998 123.359 353.998C123.359 353.998 124.839 358.098 122.503 359.297C120.345 360.384 118.659 357.833 118.659 357.833C118.659 357.833 119.13 360.469 116.853 361.12C114.105 361.908 113.566 356.241 110.099 354.632C109.32 354.272 112.136 332.213 112.136 332.213Z" fill="#EB9481"/>
<path id="Vector_178" d="M117.271 342.896C120.391 345.852 122.535 349.689 123.418 353.896C123.418 354.007 123.366 354.075 123.323 353.981C121.762 350.065 119.73 346.354 117.271 342.93C117.271 342.93 117.271 342.879 117.271 342.896Z" fill="#263238"/>
<path id="Vector_179" d="M113.273 346.441C114.788 347.973 118.11 352.964 118.752 357.792C118.752 357.894 118.683 357.963 118.649 357.869C117.286 353.876 115.468 350.053 113.23 346.475C113.23 346.475 113.256 346.424 113.273 346.441Z" fill="#263238"/>
<path id="Vector_180" d="M108.035 332.256C111.408 330.895 115.157 331.794 118.684 331.271C115.217 332.376 111.528 331.468 108.035 332.256Z" fill="#263238"/>
<path id="Vector_181" d="M126.55 334.43L125.531 335.431V335.38C127.582 336.67 129.515 338.136 131.309 339.763C133.064 341.398 134.793 343.349 135.153 345.926C134.973 351.396 126.593 343.478 124.735 342.459C124.296 342.124 123.796 341.877 123.263 341.731L123.546 341.226C125.951 344.77 128.682 348.485 129.195 352.851C129.315 356.711 125.608 356.592 123.486 354.28L123.7 354.143C123.955 354.819 124.073 355.538 124.048 356.259C124.023 356.981 123.855 357.69 123.554 358.346C123.302 358.754 122.94 359.084 122.51 359.296C122.919 359.056 123.258 358.713 123.495 358.302C123.732 357.891 123.858 357.425 123.862 356.951C123.907 355.851 123.708 354.755 123.28 353.741L123.657 354.075C125.557 355.95 128.896 356.386 128.699 352.851C128.014 348.4 125.129 344.548 122.57 340.952C123.476 341.033 124.343 341.358 125.078 341.894C126.542 342.613 134.579 350.223 134.605 345.934C134.348 343.606 132.688 341.612 131.053 340.002C129.314 338.334 127.455 336.798 125.489 335.406L126.55 334.455V334.43Z" fill="#263238"/>
<path id="Vector_182" d="M67.9238 332.376L87.3978 327.848C87.3978 327.848 87.5091 317.798 86.7901 312.226C85.8399 304.856 82.8782 303.477 77.8106 311.053C74.4209 316.095 67.9238 332.376 67.9238 332.376Z" fill="#E6089D"/>
<path id="Vector_183" d="M85.0179 328.379C85.2233 328.293 87.2092 327.763 87.3633 327.763C87.3633 326.581 87.3119 325.4 87.3119 324.219C87.3119 323.628 87.3119 323.038 87.3119 322.447C87.3119 321.856 87.3119 321.052 87.3119 320.478C87.3119 320.384 87.4318 320.375 87.4403 320.478C87.4917 321.231 87.5088 321.788 87.5431 322.438C87.5773 323.089 87.6115 323.603 87.6201 324.15C87.6201 325.383 87.7228 326.718 87.68 327.925C86.7966 328.154 85.8985 328.323 84.9922 328.43C84.9922 328.43 84.9922 328.396 85.0179 328.379Z" fill="#263238"/>
<path id="Vector_184" d="M70.0457 329.174C72.725 328.318 75.4128 327.565 78.1349 326.897C79.4959 326.563 80.857 326.255 82.2266 325.964C83.5962 325.673 85 325.519 86.3611 325.211C86.4381 325.211 86.4552 325.314 86.3611 325.331C84.9915 325.57 83.639 325.998 82.2779 326.307C80.9169 326.615 79.5473 326.94 78.1863 327.274C75.4727 327.924 72.7507 328.575 70.0457 329.294C69.9858 329.32 69.9687 329.2 70.0457 329.174Z" fill="#263238"/>
<path id="Vector_185" d="M74.9944 316.488C75.0001 316.474 75.0007 316.459 74.9962 316.445C74.9916 316.432 74.9821 316.42 74.9695 316.412C74.9568 316.405 74.942 316.403 74.9276 316.405C74.9133 316.408 74.9005 316.416 74.8916 316.428C74.2924 317.472 73.7104 318.525 73.1796 319.578C73.2883 319.131 73.4403 318.695 73.6333 318.277C73.3467 318.844 73.1228 319.441 72.9656 320.057C72.2295 321.453 71.519 322.856 70.8599 324.294C69.5989 326.911 68.5178 329.611 67.6242 332.375C67.5728 332.538 67.7526 332.666 67.8981 332.623C68.814 332.409 69.7728 332.144 70.7058 332.007C70.7174 332.011 70.7298 332.012 70.742 332.011C70.7542 332.009 70.7657 332.004 70.7758 331.997C70.7858 331.99 70.7939 331.981 70.7996 331.97C70.8052 331.959 70.8082 331.947 70.8082 331.934C70.8082 331.922 70.8052 331.91 70.7996 331.899C70.7939 331.888 70.7858 331.879 70.7758 331.871C70.7657 331.864 70.7542 331.86 70.742 331.858C70.7298 331.856 70.7174 331.857 70.7058 331.862C69.8758 332.01 69.0386 332.116 68.1977 332.178C69.3276 329.61 70.3206 327.042 71.4505 324.474C72.5804 321.906 73.7104 319.107 74.9944 316.488Z" fill="#263238"/>
<path id="Vector_186" d="M89.1348 305.754C89.1348 306.661 91.9852 313.167 95.9828 313.869C97.2753 314.1 98.8332 307.089 98.8332 307.089L99.0644 306.601L102.317 299.753L93.9797 291.373C93.9797 291.373 89.1433 305.369 89.1348 305.754Z" fill="#EB9481"/>
<path id="Vector_187" d="M102.291 299.729L99.038 306.577C97.2545 305.408 95.7353 303.879 94.5781 302.087C93.4208 300.296 92.6511 298.283 92.3184 296.176C93.1744 293.745 93.842 291.725 93.9362 291.426C93.9398 291.412 93.9398 291.397 93.9362 291.383L95.0062 292.384L102.291 299.729Z" fill="#263238"/>
<path id="Vector_188" d="M91.4712 295.029C91.2302 295.371 91.0612 295.758 90.9747 296.168C90.581 298.025 91.5739 299.789 92.6867 301.15C93.7995 302.511 95.5886 303.872 96.2991 305.686C96.6137 306.393 96.6593 307.191 96.4275 307.929C96.2556 308.31 96.0038 308.649 95.6892 308.924C95.3746 309.199 95.0045 309.402 94.6042 309.521C93.7482 309.847 92.7467 310.044 92.2502 310.857C92.075 311.202 91.9837 311.583 91.9837 311.97C91.9837 312.356 92.075 312.738 92.2502 313.082C93.012 314.888 95.1092 315.65 96.4446 316.96C97.874 318.352 98.8522 320.141 99.2523 322.096C99.607 323.93 99.4196 325.828 98.713 327.557C98.3811 328.405 97.9253 329.198 97.3605 329.911C96.7271 330.707 95.9395 331.341 95.2719 332.111C94.931 332.445 94.6618 332.845 94.4808 333.287C94.2998 333.728 94.2107 334.202 94.219 334.679C94.3131 335.441 96.0765 337.632 99.4149 338.463C99.6546 338.523 99.5262 338.951 99.2608 338.976C98.7579 339.035 98.252 339.063 97.7457 339.062C95.6465 339.052 93.5795 338.545 91.7148 337.58C89.8501 336.616 88.2411 335.223 87.02 333.515C85.7251 331.665 84.905 329.525 84.6318 327.283C84.5403 326.032 84.3485 324.789 84.0583 323.568C83.7216 322.513 83.1341 321.556 82.3463 320.778C80.8739 319.254 79.0592 318.107 77.8437 316.335C76.7875 314.73 76.1436 312.89 75.9691 310.977C75.7959 309.01 76.0479 307.028 76.7082 305.167C77.3684 303.306 78.4213 301.609 79.7954 300.191C82.5089 297.409 91.5911 294.841 91.4712 295.029Z" fill="#263238"/>
<path id="Vector_189" d="M91.3942 295.139C90.9817 295.854 90.7387 296.653 90.6837 297.476C90.6784 298.223 90.8609 298.959 91.2144 299.616C92.0766 301.012 93.1982 302.229 94.5186 303.203C95.7953 304.11 96.7609 305.39 97.2835 306.866C97.4674 307.527 97.4674 308.226 97.2835 308.887C97.0221 309.588 96.4967 310.159 95.8197 310.479C94.5956 311.129 92.8494 311.549 92.507 313.115C92.1646 314.682 93.5342 315.914 94.51 316.847C96.8897 319.141 100.322 321.761 99.8343 325.502C99.4726 327.428 98.6535 329.239 97.4461 330.783C96.6586 331.879 95.6399 333.274 96.0251 334.704C96.0251 334.763 96.1193 334.704 96.1107 334.704C95.7255 333.18 96.9667 331.964 97.8227 330.869C98.8633 329.58 99.6478 328.104 100.134 326.52C100.573 324.929 100.37 323.229 99.569 321.787C98.7208 320.323 97.6295 319.014 96.3419 317.917C95.6999 317.335 95.0493 316.762 94.433 316.163C93.8351 315.642 93.3588 314.996 93.0377 314.271C92.8971 313.904 92.8777 313.501 92.9825 313.122C93.0872 312.743 93.3106 312.408 93.6198 312.165C94.2803 311.696 94.9962 311.311 95.7512 311.018C96.4114 310.735 96.974 310.265 97.3691 309.666C97.6708 309.145 97.8302 308.555 97.8313 307.954C97.821 306.623 97.3143 305.344 96.4103 304.367C95.1777 302.963 93.5171 302.004 92.3101 300.575C91.6547 299.853 91.2105 298.964 91.0261 298.007C90.9499 297.033 91.1393 296.057 91.5739 295.182C91.5698 295.163 91.5604 295.146 91.5469 295.132C91.5333 295.118 91.5162 295.109 91.4975 295.104C91.4787 295.1 91.4591 295.101 91.4408 295.107C91.4226 295.113 91.4064 295.124 91.3942 295.139Z" fill="#263238"/>
<path id="Vector_190" d="M78.059 300.397C76.7145 301.84 75.7739 303.611 75.3321 305.533C74.8903 307.455 74.9628 309.46 75.5423 311.345C76.171 313.45 77.2919 315.375 78.8122 316.96C80.2161 318.458 81.851 319.785 82.9125 321.566C84.0766 323.534 83.9654 325.794 84.1794 327.994C84.3476 329.772 84.8996 331.492 85.7972 333.036C87.561 336.035 90.4374 338.216 93.8008 339.105C94.2239 339.216 94.6525 339.304 95.0848 339.37C95.0962 339.37 95.107 339.366 95.1151 339.358C95.1231 339.35 95.1276 339.339 95.1276 339.328C95.1276 339.316 95.1231 339.305 95.1151 339.297C95.107 339.289 95.0962 339.285 95.0848 339.285C92.5466 338.799 90.214 337.559 88.3921 335.726C86.5701 333.894 85.3435 331.554 84.8727 329.013C84.5132 326.958 84.7614 324.818 84.1194 322.807C83.5288 320.924 82.1164 319.46 80.6954 318.107C79.1158 316.726 77.7841 315.084 76.7578 313.254C75.8558 311.49 75.4325 309.521 75.5302 307.543C75.6278 305.564 76.243 303.646 77.3142 301.98C79.8822 298.265 84.2735 296.793 88.4422 295.937L90.1542 295.603C90.2227 295.603 90.2056 295.492 90.1542 295.5C85.8828 296.177 81.2433 297.187 78.059 300.397Z" fill="#263238"/>
<path id="Vector_191" d="M90.4022 292.906C89.7602 293.112 89.1096 293.865 89.1439 294.319C89.1781 294.772 91.5835 297.366 92.4652 297.34C93.3468 297.315 93.5523 295.714 93.5523 295.714L90.4022 292.906Z" fill="#E6089D"/>
<path id="Vector_192" d="M115.671 292.006C113.805 305.223 105.682 305.6 102.831 305.197C100.263 304.829 91.4808 303.246 91.9773 289.901C92.4737 276.556 99.2019 273.26 105.16 273.782C111.117 274.304 117.537 278.79 115.671 292.006Z" fill="#EB9481"/>
<path id="Vector_193" d="M113.719 291.219C113.426 291.109 113.14 290.98 112.863 290.834C112.548 290.741 112.274 290.545 112.084 290.277C112.041 290.182 112.03 290.075 112.053 289.973C112.076 289.871 112.132 289.78 112.212 289.712C112.392 289.605 112.598 289.549 112.807 289.549C113.016 289.549 113.222 289.605 113.402 289.712C113.808 289.87 114.138 290.176 114.326 290.568C114.356 290.655 114.361 290.748 114.342 290.837C114.323 290.926 114.28 291.009 114.217 291.076C114.155 291.142 114.076 291.191 113.988 291.216C113.9 291.241 113.807 291.242 113.719 291.219Z" fill="#263238"/>
<path id="Vector_194" d="M104.852 289.329C105.157 289.346 105.463 289.346 105.768 289.329C106.091 289.384 106.423 289.327 106.709 289.166C106.792 289.101 106.85 289.009 106.873 288.906C106.896 288.804 106.884 288.696 106.838 288.601C106.722 288.427 106.562 288.286 106.374 288.194C106.186 288.102 105.976 288.063 105.768 288.079C105.339 288.04 104.913 288.169 104.578 288.439C104.501 288.502 104.446 288.587 104.417 288.683C104.389 288.778 104.39 288.88 104.419 288.975C104.448 289.07 104.505 289.154 104.582 289.217C104.659 289.28 104.753 289.319 104.852 289.329Z" fill="#263238"/>
<path id="Vector_195" d="M106.555 291.682C106.555 291.682 106.477 291.682 106.469 291.75C106.315 292.606 105.99 293.642 105.125 293.779V293.83C106.144 293.89 106.555 292.555 106.555 291.682Z" fill="#263238"/>
<path id="Vector_196" d="M105.947 290.595C104.535 290.193 103.842 293.044 105.151 293.412C106.461 293.78 107.129 290.921 105.947 290.595Z" fill="#263238"/>
<path id="Vector_197" d="M105.348 290.604C105.057 290.706 104.749 290.929 104.441 290.886C104.133 290.843 103.893 290.475 103.739 290.133C103.739 290.133 103.688 290.133 103.679 290.133C103.573 290.383 103.566 290.664 103.658 290.919C103.75 291.175 103.935 291.386 104.176 291.511C104.698 291.716 105.194 291.323 105.468 290.809C105.52 290.741 105.468 290.569 105.348 290.604Z" fill="#263238"/>
<path id="Vector_198" d="M111.451 292.641C111.451 292.641 111.511 292.701 111.503 292.735C111.254 293.591 111.117 294.652 111.837 295.149C111.837 295.149 111.837 295.209 111.837 295.192C110.878 294.815 111.075 293.428 111.451 292.641Z" fill="#263238"/>
<path id="Vector_199" d="M112.47 291.895C113.916 292.143 113.326 295.011 111.973 294.78C110.621 294.549 111.28 291.715 112.47 291.895Z" fill="#263238"/>
<path id="Vector_200" d="M113.035 292.229C113.223 292.435 113.394 292.76 113.659 292.829C113.925 292.897 114.267 292.657 114.515 292.401C114.515 292.401 114.515 292.401 114.515 292.443C114.413 292.991 114.113 293.522 113.565 293.522C113.017 293.522 112.812 292.974 112.795 292.401C112.838 292.289 112.992 292.152 113.035 292.229Z" fill="#263238"/>
<path id="Vector_201" d="M104.201 298.589C104.329 298.863 104.432 299.214 104.731 299.351C105.049 299.463 105.388 299.504 105.724 299.471C105.724 299.471 105.776 299.471 105.724 299.531C105.54 299.654 105.326 299.726 105.104 299.738C104.883 299.75 104.662 299.702 104.466 299.599C104.309 299.489 104.188 299.335 104.118 299.157C104.048 298.979 104.032 298.785 104.072 298.597C104.106 298.538 104.175 298.546 104.201 298.589Z" fill="#263238"/>
<path id="Vector_202" d="M108.925 296.501C108.925 296.501 108.711 297.853 108.522 298.47C108.522 298.521 108.351 298.47 108.137 298.47C107.583 298.405 107.057 298.188 106.618 297.844C106.178 297.499 105.842 297.041 105.646 296.518C105.639 296.503 105.639 296.486 105.644 296.471C105.65 296.456 105.661 296.444 105.676 296.437C105.691 296.43 105.708 296.429 105.723 296.435C105.738 296.441 105.751 296.452 105.758 296.467C106.378 297.239 107.23 297.791 108.189 298.042C108.283 297.879 108.48 295.705 108.582 295.731C109.044 295.92 109.479 296.171 109.875 296.475C110.414 293.668 110.491 290.8 111.065 288.009C111.065 287.987 111.074 287.965 111.09 287.949C111.106 287.933 111.128 287.924 111.15 287.924C111.173 287.924 111.195 287.933 111.211 287.949C111.227 287.965 111.236 287.987 111.236 288.009C111.253 291.083 110.966 294.151 110.38 297.169C110.26 297.528 109.139 296.681 108.925 296.501Z" fill="#263238"/>
<path id="Vector_203" d="M107.855 298.128C107.384 298.479 106.829 298.703 106.246 298.778C105.925 298.814 105.601 298.745 105.322 298.581C104.722 298.23 104.876 297.623 105.133 297.143C105.279 296.892 105.451 296.656 105.647 296.441C106.185 297.224 106.959 297.814 107.855 298.128Z" fill="#263238"/>
<path id="Vector_204" d="M106.246 298.744C105.925 298.78 105.601 298.711 105.322 298.547C104.722 298.196 104.876 297.589 105.133 297.109C105.475 297.218 105.771 297.438 105.972 297.734C106.174 298.031 106.27 298.387 106.246 298.744Z" fill="#FF98B9"/>
<path id="Vector_205" d="M91.4804 290.766C93.5776 291.528 95.8716 286.315 95.8716 286.315C95.8716 286.315 100.229 287.53 103.404 281.658C102.758 283.501 101.589 285.116 100.04 286.306C100.04 286.306 107.958 287.616 112.975 282.077C112.975 282.077 110.775 284.996 109.242 285.827C111.358 285.771 113.392 284.998 115.012 283.635C115.012 283.635 115.337 287.727 116.09 289.037C116.09 289.037 120.482 275.135 106.623 273.475C106.623 273.475 97.712 271.206 93.2009 276.608C88.6898 282.009 91.4804 290.766 91.4804 290.766Z" fill="#263238"/>
<path id="Vector_206" d="M93.9279 291.219C93.9279 291.219 92.0276 286.503 89.9561 287.085C87.8846 287.667 88.655 294.053 90.6323 295.354C90.8736 295.539 91.1501 295.674 91.4449 295.75C91.7398 295.825 92.0469 295.841 92.3478 295.794C92.6487 295.748 92.937 295.641 93.1953 295.48C93.4537 295.319 93.6767 295.107 93.8509 294.857L93.9279 291.219Z" fill="#EB9481"/>
<path id="Vector_207" d="M90.222 288.908C90.222 288.908 90.1707 288.951 90.222 288.968C91.6002 289.927 92.071 291.536 92.2936 293.111C92.2407 292.942 92.1522 292.786 92.0341 292.654C91.916 292.522 91.771 292.417 91.6088 292.345C91.4466 292.274 91.271 292.238 91.0938 292.24C90.9166 292.243 90.742 292.283 90.5816 292.358C90.5302 292.358 90.5816 292.443 90.5816 292.443C90.8721 292.423 91.1615 292.495 91.4089 292.649C91.6563 292.803 91.849 293.03 91.9597 293.299C92.1576 293.738 92.3041 294.197 92.3963 294.669C92.3963 294.815 92.6959 294.806 92.6873 294.669V294.626C93.1324 292.64 92.2508 289.584 90.222 288.908Z" fill="#263238"/>
<path id="Vector_208" d="M159.189 361.086H103.703V363.568H159.189V361.086Z" fill="#263238"/>
<path id="Vector_209" d="M159.189 361.086V363.577H125.908L127.809 361.086H159.189Z" fill="#172228"/>
<path id="Vector_210" d="M134.135 363.577H188.217L192.711 326.846H138.637L134.135 363.577Z" fill="#172228"/>
<path id="Vector_211" d="M136.969 363.577H191.042L195.545 326.846H141.471L136.969 363.577Z" fill="#263238"/>
<path id="Vector_212" d="M162.966 345.216C162.956 345.645 163.033 346.073 163.192 346.472C163.351 346.872 163.588 347.236 163.89 347.542C164.191 347.848 164.551 348.091 164.948 348.256C165.345 348.421 165.771 348.505 166.201 348.503C167.077 348.498 167.917 348.153 168.542 347.539C169.167 346.925 169.528 346.091 169.548 345.216C169.559 344.785 169.482 344.357 169.324 343.956C169.166 343.556 168.929 343.191 168.627 342.884C168.325 342.576 167.965 342.333 167.568 342.167C167.17 342.002 166.743 341.918 166.313 341.92C165.435 341.924 164.594 342.271 163.969 342.887C163.343 343.503 162.983 344.338 162.966 345.216Z" fill="#37474F"/>
<g id="Group" filter="url(#filter0_f_575_22797)">
<path id="Vector_213" d="M414.733 171.2C440.971 171.2 462.241 149.93 462.241 123.692C462.241 97.4541 440.971 76.1841 414.733 76.1841C388.495 76.1841 367.225 97.4541 367.225 123.692C367.225 149.93 388.495 171.2 414.733 171.2Z" fill="#051D2A" fill-opacity="0.5"/>
</g>
</g>
<defs>
<filter id="filter0_f_575_22797" x="355.225" y="64.1841" width="119.016" height="119.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_575_22797"/>
</filter>
</defs>
</svg>
          </div>

        </div>
        <div className="services-slider">
          <div className="container">
            {initialServices.map((service) => (
              <div key={service.title} className="cardactive">
                <div className="image-container">{service.svg}</div>
                <div className="title-container">
                  <div className="title">{service.title}</div>
                </div>
                <div className="description-container">
                  <div className="description">{service.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="nav-container">
            <button className="service-navButton" onClick={handlePrevious}>
                 {/*Previous button image*/}
            <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-left-circle">
                    <path id="Vector" 
                          d="M46.1669 84.5555C67.1844 84.5555 84.2224 67.5175 84.2224 46.5C84.2224 25.4825 67.1844 8.4444 46.1669 8.4444C25.1494 8.4444 8.11133 25.4825 8.11133 46.5C8.11133 67.5175 25.1494 84.5555 46.1669 84.5555Z" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" 
                          d="M46.1666 31.2778L30.9443 46.5L46.1666 61.7222" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_3" 
                          d="M61.3888 46.5H30.9443" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
            </button>         
            <button className="service-navButton" onClick={handleNext}>
                {/*Next button image*/}
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow-right-circle">
                    <path id="Vector" 
                          d="M46.4999 84.5555C67.5174 84.5555 84.5555 67.5175 84.5555 46.5C84.5555 25.4825 67.5174 8.4444 46.4999 8.4444C25.4824 8.4444 8.44434 25.4825 8.44434 46.5C8.44434 67.5175 25.4824 84.5555 46.4999 84.5555Z" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" 
                          d="M46.5 61.7222L61.7222 46.5L46.5 31.2778" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_3" 
                          d="M31.2773 46.5H61.7218" 
                          stroke="#BEB8B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
            </button>  
            <div className="progress-lineContainer">
              <div className="progress-backgroundLine" />
              <div className="progressLine" style={{ width: `${progressWidth}%` }} />
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-text">
            <div className="footer-text-content">
              <span className="text-light">All rights reserved</span>
              <span className="text-bold">@PIXS TECHNOLOGY SOLUTIONS.</span>
            </div>
          </div>
          <div className="social-icons">
            <div className="icon">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Round icons">
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" fill="#99969C"/>
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" stroke="black"/>
<g id="Social icon" clip-path="url(#clip0_647_4866)">
<path id="Vector" d="M18.3506 17.0762L18.7505 14.4973H16.2499V12.8237C16.2499 12.1182 16.5992 11.4304 17.7192 11.4304H18.856V9.23478C18.856 9.23478 17.8244 9.06055 16.838 9.06055C14.7787 9.06055 13.4326 10.2957 13.4326 12.5318V14.4973H11.1436V17.0762H13.4326V23.3105H16.2499V17.0762H18.3506Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_647_4866">
<rect width="9" height="14.25" fill="white" transform="translate(10.5 9.06055)"/>
</clipPath>
</defs>
</svg>
            </div>
            <div className="icon">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Round icons">
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" fill="#99969C"/>
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" stroke="black"/>
<g id="Social icon" clip-path="url(#clip0_647_4867)">
<path id="Vector" d="M15.0027 12.7785C13.2992 12.7785 11.9251 14.1312 11.9251 15.8081C11.9251 17.4851 13.2992 18.8377 15.0027 18.8377C16.7063 18.8377 18.0804 17.4851 18.0804 15.8081C18.0804 14.1312 16.7063 12.7785 15.0027 12.7785ZM15.0027 17.7778C13.9018 17.7778 13.0018 16.8945 13.0018 15.8081C13.0018 14.7218 13.8992 13.8385 15.0027 13.8385C16.1063 13.8385 17.0036 14.7218 17.0036 15.8081C17.0036 16.8945 16.1036 17.7778 15.0027 17.7778V17.7778ZM18.9242 12.6546C18.9242 13.0475 18.6027 13.3613 18.2063 13.3613C17.8072 13.3613 17.4884 13.0448 17.4884 12.6546C17.4884 12.2644 17.8099 11.948 18.2063 11.948C18.6027 11.948 18.9242 12.2644 18.9242 12.6546ZM20.9626 13.3718C20.917 12.4252 20.6974 11.5867 19.9929 10.8959C19.2911 10.2051 18.4393 9.98889 17.4777 9.94143C16.4867 9.88606 13.5161 9.88606 12.5251 9.94143C11.5661 9.98625 10.7143 10.2025 10.0099 10.8933C9.30541 11.5841 9.08845 12.4226 9.04023 13.3692C8.98398 14.3448 8.98398 17.2689 9.04023 18.2445C9.08577 19.191 9.30541 20.0295 10.0099 20.7203C10.7143 21.4112 11.5634 21.6274 12.5251 21.6748C13.5161 21.7302 16.4867 21.7302 17.4777 21.6748C18.4393 21.63 19.2911 21.4138 19.9929 20.7203C20.6947 20.0295 20.9143 19.191 20.9626 18.2445C21.0188 17.2689 21.0188 14.3474 20.9626 13.3718V13.3718ZM19.6822 19.2912C19.4733 19.808 19.0688 20.2062 18.5411 20.4145C17.751 20.723 15.8759 20.6518 15.0027 20.6518C14.1295 20.6518 12.2518 20.7203 11.4643 20.4145C10.9393 20.2088 10.5349 19.8107 10.3233 19.2912C10.0099 18.5134 10.0822 16.6677 10.0822 15.8081C10.0822 14.9486 10.0126 13.1002 10.3233 12.325C10.5322 11.8082 10.9367 11.4101 11.4643 11.2018C12.2545 10.8933 14.1295 10.9645 15.0027 10.9645C15.8759 10.9645 17.7536 10.8959 18.5411 11.2018C19.0661 11.4074 19.4706 11.8056 19.6822 12.325C19.9956 13.1029 19.9233 14.9486 19.9233 15.8081C19.9233 16.6677 19.9956 18.516 19.6822 19.2912Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_647_4867">
<rect width="12" height="13.5" fill="white" transform="translate(9 9.06055)"/>
</clipPath>
</defs>
</svg>
            </div>
            <div className="icon">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Round icons">
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" fill="#99969C"/>
<rect x="0.5" y="1.31006" width="29" height="29" rx="14.5" stroke="black"/>
<g id="Social icon" clip-path="url(#clip0_647_4868)">
<path id="Vector" d="M20.3628 13.1993C20.3714 13.3151 20.3714 13.431 20.3714 13.5468C20.3714 17.0789 17.5875 21.1488 12.4992 21.1488C10.9316 21.1488 9.47543 20.7103 8.25049 19.9493C8.47321 19.9741 8.68734 19.9824 8.91864 19.9824C10.2121 19.9824 11.4028 19.5606 12.3536 18.8409C11.1372 18.8161 10.1179 18.0468 9.76666 16.9879C9.93799 17.0127 10.1093 17.0293 10.2892 17.0293C10.5376 17.0293 10.786 16.9962 11.0173 16.9383C9.74955 16.6901 8.79869 15.6148 8.79869 14.3161V14.283C9.16702 14.4815 9.59535 14.6056 10.0493 14.6221C9.30407 14.1423 8.81583 13.3234 8.81583 12.3969C8.81583 11.9006 8.95286 11.4456 9.19272 11.0486C10.5547 12.6699 12.602 13.7287 14.8977 13.8445C14.8549 13.646 14.8292 13.4392 14.8292 13.2324C14.8292 11.76 16.0627 10.5605 17.596 10.5605C18.3926 10.5605 19.1122 10.8832 19.6176 11.4043C20.2429 11.2885 20.8425 11.0651 21.3736 10.7591C21.168 11.3795 20.7311 11.9006 20.1572 12.2315C20.714 12.1736 21.2537 12.0247 21.7505 11.8179C21.3736 12.3473 20.9025 12.8188 20.3628 13.1993V13.1993Z" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_647_4868">
<rect width="13.5" height="11.25" fill="white" transform="translate(8.25049 10.5605)"/>
</clipPath>
</defs>
</svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testing;