import { Dialog, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./WaterDialog.module.scss";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

function CircularProgressWithLabel(props) {
  return (
    <Box className={styles.progressBox}>
      <CircularProgress
        className={styles.progress}
        variant="indeterminate"
        {...props}
      />
      <Box className={styles.progressLabel}>
        <Typography className={styles.watering}>Watering...</Typography>
        <Typography className={styles.seconds}>
          {props.waterSeconds} s
        </Typography>
      </Box>
    </Box>
  );
}

export default function WaterDialog({ dialogOpen, plantName, waterSeconds }) {
  const [open, setOpen] = useState(dialogOpen);

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
      <DialogTitle className={styles.title}>{plantName}</DialogTitle>
      <CircularProgressWithLabel size={180} thickness={1.5} waterSeconds={15} />
      <Typography className={styles.autoStops} variant="body2">
        Auto-stops after {waterSeconds} seconds
      </Typography>
      <Button fullWidth onClick={toggleDialog(false)}>
        Stop
      </Button>
    </Dialog>
  );
}
