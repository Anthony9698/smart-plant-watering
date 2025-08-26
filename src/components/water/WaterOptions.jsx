import React, { useState } from "react";
import styles from "./WaterOptions.module.scss";
import {
  Button,
  Dialog,
  DialogTitle,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { relativeFromUnix } from "../../utils/time";
import { IoWater } from "react-icons/io5";

export default function WaterOptions({
  optionsOpen,
  plantName,
  lastWatered,
  moisture,
  dryThreshold,
}) {
  const [open, setOpen] = useState(optionsOpen);

  const toggleDialog = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <Dialog
      className={styles.dialog}
      open={open}
      onClose={toggleDialog(false)}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "325px",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            textAlign: "center",
          },
        },
      }}
    >
      <Box className={styles.header}>
        <DialogTitle className={styles.title}>{plantName}</DialogTitle>
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
      <Typography className={styles.lastWatered} variant="body2">
        <span> Last watered: {relativeFromUnix(lastWatered)}</span>
        <IoWater />
      </Typography>
      <Button fullWidth>Water</Button>
      <Button fullWidth color="info">
        Smart Water
      </Button>
      <Button className={styles.cancel} fullWidth onClick={toggleDialog(false)}>
        Cancel
      </Button>
    </Dialog>
  );
}
