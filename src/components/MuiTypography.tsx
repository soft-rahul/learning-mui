import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography> Without </Typography>
      <Typography variant="h1"> Heading 1</Typography>
      <Typography variant="h2"> Heading 1</Typography>
      <Typography variant="h3"> Heading 1</Typography>
      <Typography variant="h4"> Heading 1</Typography>
      <Typography variant="h5"> Heading 1</Typography>
      <Typography variant="h6"> Heading 1</Typography>
      <Typography variant="subtitle1"> Heading 1</Typography>
      <Typography variant="subtitle2"> Heading 1</Typography>
      <Typography variant="body1" noWrap>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, esse
        deleniti modi blanditiis est quis mollitia molestias dolorem culpa
        doloribus aspernatur labore obcaecati, exercitationem sit, voluptas
        placeat recusandae officia minus!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam
        mollitia optio. Quam ea assumenda alias nisi sed cupiditate quis vitae
        aliquam suscipit, unde eveniet itaque molestias quod quos ex!
      </Typography>
    </div>
  );
};

export default MuiTypography;
