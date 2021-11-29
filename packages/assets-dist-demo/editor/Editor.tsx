import React from 'react';
import { EditorFC } from '@foxpage/foxpage-component-editor-storybook-addon';
import { AssetsDistDemoProps } from '../src/typing';

const Editor: EditorFC<AssetsDistDemoProps> = props => {
  const { Group, Title, Field, Input, Label } = props.widgets;

  return (
    <div>
      <Group>
        <Title>Base</Title>
        <Field>
          {/* <Label>text:</Label> */}
          {/* <Input propKey="text" /> */}
        </Field>
      </Group>
    </div>
  );
};

export default Editor;
