import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import FilePresentIcon from "@mui/icons-material/FilePresent";

export const SocialIcons = [
  {
    id: 1,
    linkUrl: "https://www.linkedin.com/in/sachingour",
    socialIcon: <LinkedInIcon />,
    altProperty: "twitter",
  },
  {
    id: 2,
    linkUrl: "https://github.com/sachingour007",
    socialIcon: <GitHubIcon />,
    altProperty: "facebook",
  },
  {
    id: 3,
    linkUrl: "https://mail.google.com/",
    socialIcon: <GoogleIcon />,
    altProperty: "insta",
  },
  {
    id: 4,
    linkUrl: "./public/Resume-SachinGour.pdf",
    socialIcon: <FilePresentIcon />,
    altProperty: "linkedin",
  },
];
