import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { addons, useParameter } from '@storybook/manager-api';
import { IconButton, Icons, WithTooltip, TooltipLinkList } from '@storybook/components';
import { ON_THEME_CHANGE, ThemeOptions, PARAMETERS_KEY } from '../constants';

interface ThemeToolBarProps {}

const ThemeToolBar: React.FC<ThemeToolBarProps> = () => {
  const themeParam = useParameter<{ theme: string }>(PARAMETERS_KEY, { theme: '' });
  const [selected, setSelected] = useState(themeParam?.theme || ThemeOptions[0]);

  useEffect(() => {
    if (themeParam?.theme) {
      setSelected(themeParam.theme);
    }
  }, [themeParam?.theme]);

  const channel = addons.getChannel();
  const handleSelect = useCallback((value: string) => {
    setSelected(value);
    channel.emit(ON_THEME_CHANGE, value);
  }, []);

  const links = useMemo(() => {
    return ThemeOptions.map(val => ({
      id: val,
      title: val,
      active: val === selected,
      onClick: () => handleSelect(val),
    }));
  }, [selected, handleSelect]);

  return (
    <WithTooltip placement="top" trigger="click" tooltip={<TooltipLinkList links={links} />}>
      <IconButton title="theme">
        <Icons icon="grow" />
        <div
          style={{
            fontSize: '13px',
            marginLeft: '10px',
          }}
        >
          {selected || 'none'}
        </div>
      </IconButton>
    </WithTooltip>
  );
};

export default ThemeToolBar;
