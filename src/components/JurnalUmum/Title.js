import { Button } from "@mui/material";
import React from "react";
import TitleCard from "../shared/TitleCard";
import AddIcon from "@mui/icons-material/Add";

const Title = ({ title, navigate, nav }) => {
  return (
    <TitleCard title={title}>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        endIcon={<AddIcon />}
        onClick={() => navigate(nav)}
      >
        TAMBAH
      </Button>
    </TitleCard>
  );
};

export default Title;
