// import React, { useState } from "react";

// import changeDescription from "../../data/changeDescription.json";

// import "./styles.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Description = () => {
//   const [hoveredItem, setHoveredItem] = useState(false);
//   const [text, setText] = useState("1.");

//   const handleMouseEnter = (itemId, itemDescription) => {
//     setHoveredItem(itemId);
//     setText(itemDescription);
//     console.log(itemDescription);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(false);
//     setText("Passe o mouse em algum icone.");
//   };

//   const skillsData = changeDescription.map((item) => {
//     return (
//       <ul className="description-list" key={item.id}>
//         <li
//           className="description-item"
//           onMouseEnter={() => handleMouseEnter(item.id, item.description)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <i className="description-link">
//             <FontAwesomeIcon icon={item.icon} />
//           </i>
//         </li>
//       </ul>
//     );
//   });
//   return <aside className="description">{skillsData}</aside>;
// };

// export default Description;

//FALTA IMPLEMENTAR ISSO COMO PROP E RENDERIZAR NO COMPONENTE SKILLS
