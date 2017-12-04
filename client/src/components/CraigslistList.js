import React from 'react';
import { Grid } from 'semantic-ui-react';
import CraigslistListItem from './CraigslistListItem';

const CraigslistList = ({ list, onButtonClick, toggleShowHide }) => {
  const renderedList = list[0] || [];
  return (
    <Grid centered={true} divided="vertically">
      <Grid.Row columns={3} stretched={true} textAlign={'center'}>
        {renderedList.map((item, i) => {
          if (item.show) {
            return (
              <Grid.Column key={i}>
                <CraigslistListItem item={item} key={i} toggleShowHide={toggleShowHide} />
              </Grid.Column>
            );
          }
          return (
            <div>
              <h3>CraigslistList</h3>
            </div>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default CraigslistList;
