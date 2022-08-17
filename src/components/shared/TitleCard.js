import { CardContent, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

function TitleCard({ title, children }) {
  return (
    <Box>
      <CardContent>
        <Grid container columns={6} spacing={2} alignItems="center">
          <Grid item xs={1} md={5} lg={5}>
            {title}
          </Grid>
          <Grid
            item
            xs={1}
            md={1}
            lg={1}
            display="flex"
            justifyContent="flex-end"
          >
            {children}
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Box>
  );
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
};

TitleCard.defaultProps = {
  title: "Your Title",
};

export default TitleCard;
