import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./PlantDrawer.module.scss";
import Drawer from "@mui/material/Drawer";
import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Slider, Typography, Chip } from "@mui/material";

export default function PlantDrawer({
  drawerOpen,
  name,
  dryThreshold,
  moisture,
}) {
  const [open, setOpen] = useState(drawerOpen);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <Drawer
      className={styles.drawer}
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
    >
      <Box className={styles.main}>
        <IoArrowBackOutline
          className={styles.close}
          onClick={toggleDrawer(false)}
        />
        <Box className={styles.header}>
          <Typography variant="h5">{name}</Typography>
          {moisture < dryThreshold ? (
            <Chip
              className={styles.chip}
              label="DRY"
              color="error"
              size="small"
            />
          ) : (
            <Chip
              className={styles.chip}
              label="WET"
              color="success"
              size="small"
            />
          )}
        </Box>
        <Box className={styles.graph}>Graph will go here</Box>
        <Box>
          <span style={{ fontWeight: "600" }}>DRY</span>
          <span> Threshold</span>
        </Box>
        <Box className={styles.controls}>
          <Slider className={styles.slider} valueLabelDisplay="auto" />
          <span className={styles.label}>
            {Math.round(dryThreshold * 100)}%
          </span>
        </Box>
        <Button className={styles.water} variant="contained">
          Water
        </Button>
      </Box>
    </Drawer>
  );
}
