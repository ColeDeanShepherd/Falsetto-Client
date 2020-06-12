import * as React from "react";
import { Typography } from "@material-ui/core";
import { Card } from "../ui/Card/Card";

export class AboutPage extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Card>
        <Typography gutterBottom={true} variant="h5" component="h2">
          About
        </Typography>
        <p>Falsetto was made by <a href="http://coledeanshepherd.com" target="_blank">Cole Shepherd</a>.</p>
        <p>You can contact us with any questions or comments <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHT8tJTdmW_hCjxMPUf14wchM6GBPQAaq8PSMW05C01gBW4g/viewform" target="_blank">here</a>.</p>
      </Card>
    );
  }
}