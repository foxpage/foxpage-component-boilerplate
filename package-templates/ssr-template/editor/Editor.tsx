import React from 'react';
import { EditorFC, EditorWidgets } from '@foxpage/foxpage-component-editor-storybook-addon';
import { ComponentProps } from '../src/typing';

const Editor: EditorFC<ComponentProps> = props => {
  const { Group, Title, Field, Label, Input } = props.widgets as EditorWidgets;

  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          <Label>api:</Label>
          <Input propKey="api" />
        </Field>
      </Group>
    </div>
  );
};

export default Editor;