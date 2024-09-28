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
