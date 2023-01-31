import React, { useState } from 'react';
import { Grid, Button, Segment, GridRow } from 'semantic-ui-react';

const Counter = (Props) => {
    const [isNegative, SetIsNegative] = useState(true);
    const [counts, setCounts] = useState(0)
  return (
    <Segment raised style={{margin: "13% 33% 8%", padding: "3% 4.1%", borderRadius: "8px" }}>
      <Grid centered>
        <Grid.Row centered>
            <Grid.Column textAlign='center' as={"h1"}>
                Count
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column textAlign='center' as={"h2"}>
                    {Props.counts}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
                <Grid.Column textAlign="center">
                    <Button
                    size="medium"
                    color="green"
                    onClick={() => {
                     let count = Props.counts;
                     Props.setCounts(++count);
                     count > 0 ? SetIsNegative(false) : SetIsNegative(true);  
                    }}
                    >
                         Increment
                    </Button>
                </Grid.Column>
                <Grid.Column textAlign="center">
                <Button
                color="red"
                size="medium"
                disabled ={isNegative}
                onClick={() => {
                    let count = Props.counts;
                     Props.setCounts(--count);
                     count <= 0 ? SetIsNegative(true) : SetIsNegative(false);  
                    }}
                    >
                        Decrement
                    </Button>
                    </Grid.Column>
            </Grid.Row>
          </Grid>
    </Segment>
  );
};

export default Counter;