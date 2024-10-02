import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./main-menu.scss";

const MainMenu = () => {
  const { pathname } = useLocation();

  // Rotalarınızı bir listeye koyuyoruz
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/hello-world", label: "Hello World" },
    { path: "/hello-react", label: "Hello React" },
    { path: "/jsx/1", label: "JSX1" },
    { path: "/jsx/2", label: "JSX2" },
    { path: "/jsx/3", label: "JSX3" },
    { path: "/jsx/4", label: "JSX4" },
    { path: "/jsx/5", label: "JSX5" },
    { path: "/jsx/6", label: "JSX6" },
    { path: "/jsx/7", label: "JSX7" },
    { path: "/style/1", label: "STYLE1" },
    { path: "/style/2", label: "STYLE2" },
    { path: "/style/3", label: "STYLE3" },
    { path: "/style/4", label: "STYLE4" },
    { path: "/style/5", label: "STYLE5" },
    { path: "/customers", label: "Customers" },
    { path: "/useNavigate", label: "UseNavigate" },
    { path: "/converter", label: "Converter" },
    
    
  ];

  return (
    <Card style={{ height: "65vh", overflowY: "auto" }}>
      <Card.Body>
        <Nav className="flex-column">
          {/* Rotaları dinamik olarak map ile render ediyoruz */}
          {navItems.map((item, index) => (
            <Nav.Link
              key={index}
              to={item.path}
              as={Link}
              active={pathname === item.path}
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default MainMenu;


//! usteki yapi ile ayni



// import React from "react";
// import { Card, Nav } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import "./main-menu.scss";

// const MainMenu = () => {
//   const { pathname } = useLocation();

//   return (
//     <Card style={{ height: "65vh", overflowY: "auto" }}>
//       <Card.Body>
//         <Nav className="flex-column">
//           {/*<Link to="/" className="nav-link"></Link>    BU SEKILDE DE YAPILABILIR !     */}
//           <Nav.Link to="/" as={Link}  active={pathname === "/" ? true : false}>
//             Home
//           </Nav.Link>
//           <Nav.Link
//             to="/hello-world"
//             as={Link}
//             active={pathname === "/hello-world" ? true : false}
//           >
//             Hello World
//           </Nav.Link>
//           <Nav.Link to="/hello-react" as={Link} active={pathname === "/hello-react" ? true : false}>
//             Hello React
//           </Nav.Link>
//           <Nav.Link to="/jsx/1" as={Link} active={pathname === "/jsx/1" ? true : false}>
//             JSX1
//           </Nav.Link>
//           <Nav.Link to="/jsx/2" as={Link} active={pathname === "/jsx/2" ? true : false}>
//             JSX2
//           </Nav.Link>
//           <Nav.Link to="/jsx/3" as={Link} active={pathname === "/jsx/3" ? true : false}>
//             JSX3
//           </Nav.Link>
//           <Nav.Link to="/jsx/4" as={Link} active={pathname === "/jsx/4" ? true : false}>
//             JSX4
//           </Nav.Link>
//           <Nav.Link to="/jsx/5" as={Link} active={pathname === "/jsx/5" ? true : false}>
//             JSX5
//           </Nav.Link>
//           <Nav.Link to="/jsx/6" as={Link} active={pathname === "/jsx/6" ? true : false}>
//             JSX6
//           </Nav.Link>
//           <Nav.Link to="/jsx/7" as={Link} active={pathname === "/jsx/7" ? true : false}>
//             JSX7
//           </Nav.Link>
//           <Nav.Link to="/style/1" as={Link} active={pathname === "/style/1" ? true : false}>
//             STYLE1
//           </Nav.Link>
//           <Nav.Link to="/style/2" as={Link} active={pathname === "/style/2" ? true : false}>
//             STYLE2
//           </Nav.Link>
//           <Nav.Link to="/style/3" as={Link} active={pathname === "/style/3" ? true : false}>
//             STYLE3
//           </Nav.Link>
//           <Nav.Link to="/style/4" as={Link} active={pathname === "/style/4" ? true : false}>
//             STYLE4
//           </Nav.Link>
//           <Nav.Link to="/style/5" as={Link} active={pathname === "/style/5" ? true : false}>
//             STYLE5
//           </Nav.Link>
//         </Nav>
//       </Card.Body>
//     </Card>
//   );
// };

// export default MainMenu;  cla
