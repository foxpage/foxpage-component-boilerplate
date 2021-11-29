import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Input, Label } = props.widgets;
  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>text:</Label>
          <Input propKey="text" />
        </Field>
        <Field>
          <Label>number:</Label>
          <Input propKey="number" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
