/* eslint-disable react/no-unescaped-entities */
import { Meta } from '@storybook/react';
import Card from '.';
import { ArrowLeftSolid, XmarkSolid } from '../Icons';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {},
};

export default meta;

export const DefaultCard = () => {
  return (
    <div className="w-[500px]">
      <Card>
        <Card.Header>
          <div className="ods-flex ods-gap-2 ods-items-center">
            <ArrowLeftSolid fill="black" />
            <Card.Title>Card UI</Card.Title>
          </div>
          <XmarkSolid fill="black" />
        </Card.Header>
        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Card.Body>
      </Card>
    </div>
  );
};
