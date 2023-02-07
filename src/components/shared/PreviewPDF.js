import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Slide
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PreviewPDF({
  show,
  handleClose,
  url
}) {
  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      disableEscapeKeyDown={true}
    >
      <DialogContent>
        <iframe
          style={{
            width: '100%',
            height: '500px'
          }}
          title="Laporan"
          src={url}
          datatype="application/pdf"
          frameborder="0"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Keluar</Button>
      </DialogActions>
    </Dialog>
  )
}