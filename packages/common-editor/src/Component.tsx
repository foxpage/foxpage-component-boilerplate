import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';

const CommonEditor: EditorFC = props => {
  const { Group, Title, Field, Label, Input } = props.widgets;
  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>text:</Label>
          <Input propKey="text" />
        </Field>
      </Group>
    </div>
  );
};

export default CommonEditor;
