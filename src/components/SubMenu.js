import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

/* const MenuData = [
  {
    title: "Login",
    icon: <ChevronRightIcon />,
    subnav: [
      {
        title: "Template 1",
      },
      {
        title: "Template 1",
      },
      {
        title: "Template 1",
      },
    ],
  },
  {
    title: "Registration",
    icon: <ChevronRightIcon />,
    subnav: [
      {
        title: "Template 1",
      },
      {
        title: "Template 1",
      },
      {
        title: "Template 1",
      },
    ],
  },
];
 */
export default function SubMenu(items) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={
            (onclick = "handleClick" ? (
              <ChevronRightIcon />
            ) : (
              <ExpandLessIcon />
            ))
          }
          aria-controls="Login"
          id="Login"
        >
          <Typography>Login</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Template 1 </Typography>
          <Typography>Template 1 </Typography>
          <Typography>Template 1 </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={
            (onclick = "handleClick" ? (
              <ChevronRightIcon />
            ) : (
              <ExpandLessIcon />
            ))
          }
          aria-controls="Registration"
          id="Registration"
        >
          <Typography>Registration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Template 1 </Typography>
          <Typography>Template 1 </Typography>
          <Typography>Template 1 </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
