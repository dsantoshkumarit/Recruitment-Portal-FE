import { Grid, Card } from "semantic-ui-react";

export default function CandidateHome({ _id }) {
  const items = [
    {
      header: "Java Developer",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "Experience : 1-3yrs",
    },
    {
      header: "Project Report - May",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%",
    },
    {
      header: "Project Report - June",
      description:
        "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
      meta: "ROI: 27%",
    },
  ];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card.Group></Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
