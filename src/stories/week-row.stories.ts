import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WeekRowComponent } from '../app/components/week-row/week-row.component';
import { DayCardComponent } from '../app/components/day-card/day-card.component';

export default {
    title: 'Calendar/Week Row',
    component: WeekRowComponent,
    decorators: [
        moduleMetadata({
            declarations: [DayCardComponent],
            imports: [CommonModule]
        })
    ]
} as Meta;

const Template: Story<WeekRowComponent> = (args: WeekRowComponent) => ({
    props: args,
});

export const Week_Row = Template.bind({});
Week_Row.args = {
    cards:[ {
        day: {
          weeklyDay: 'Monday',
          numberDay: 1,
        },
        activities: [
        ],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 2,
        },
        activities: [
        ],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 3,
        },
        activities: [
        ],
      }, {
        day: {
          weeklyDay: 'Monday',
          numberDay: 4,
        },
        activities: [
        ],
      }, {
        day: {
          weeklyDay: 'Monday',
          numberDay: 5,
        },
        activities: [
        ],
      }, {
        day: {
          weeklyDay: 'Monday',
          numberDay: 6,
        },
        activities: [
        ],
      }, {
        day: {
          weeklyDay: 'Monday',
          numberDay: 7,
        },
        activities: [
        ],
      }
    ],
};