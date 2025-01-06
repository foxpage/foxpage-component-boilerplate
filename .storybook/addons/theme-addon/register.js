import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_LOCALE_ID } from './constants';
import ThemeToolBar from './components/ThemeToolBar';

addons.register(ADDON_ID, () => {
  addons.add(TOOL_LOCALE_ID, {
    title: 'My Theme Addon',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <ThemeToolBar />,
  });
});
