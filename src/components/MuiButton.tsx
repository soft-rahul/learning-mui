import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";

const MuiButton = () => {
  const [textFormats, setTextFormats] = useState<string[]>(['bold']);
  const handleTextFormatChange = (e:React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
      console.log(updatedFormats);
      setTextFormats(updatedFormats);
  } 
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <Button> Button Normal </Button>
        <Button variant="text"> Button Text </Button>
        <Button variant="outlined" href="https://www.google.com">
          {" "}
          Button Outlined{" "}
        </Button>
        <Button variant="contained"> Button Contained </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          {" "}
          Primary{" "}
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          Secondary{" "}
        </Button>
        <Button variant="contained" color="success">
          {" "}
          Success{" "}
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          Warning{" "}
        </Button>
        <Button variant="contained" color="info">
          {" "}
          Info{" "}
        </Button>
        <Button variant="contained" color="error">
          {" "}
          Error{" "}
        </Button>
      </Stack>
      <Stack display={"block"} spacing={1} direction={"row"}>
        <Button variant="outlined" size="small">
          {" "}
          small{" "}
        </Button>
        <Button variant="outlined" size="medium">
          {" "}
          Medium{" "}
        </Button>
        <Button variant="outlined" size="large">
          {" "}
          large{" "}
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button
          color="success"
          variant="contained"
          size="large"
          endIcon={<EditOutlinedIcon />}
        >
          {" "}
          Edit{" "}
        </Button>
      </Stack>
      <ButtonGroup
        variant="outlined"
        orientation="vertical"
        color="secondary"
        size="large"
        aria-label="navigation"
      >
        <Button>Start</Button>
        <Button>Progress...</Button>
        <Button>End</Button>
      </ButtonGroup>
      <Stack direction={"row"}>
        <ToggleButtonGroup aria-label="text format" value={textFormats} onChange={handleTextFormatChange}>
          <ToggleButton value={"bold"} aria-label="bold">
            {" "}
            <FormatBoldIcon />{" "}
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            {" "}
            <FormatItalicIcon />{" "}
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            {" "}
            <FormatUnderlinedIcon />{" "}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
