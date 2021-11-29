import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { addons } from '@storybook/addons';
import { IconButton, Icons, WithTooltip, TooltipLinkList } from '@storybook/components';
import { useParameter } from '@storybook/api';
import { ON_THEME_CHANGE, ThemeOptions, PARAMETERS_KEY } from '../constants';

interface ThemeToolBarProps {}

const ThemeToolBar: React.FC<ThemeToolBarProps> = () => {
  const { theme, testFun } = useParameter(PARAMETERS_KEY, { theme: '', testFun: null });
  // const { theme } = useParameter(PARAMETERS_KEY, { theme: '' });
  const [selected, setSelected] = useState(theme || ThemeOptions[0]);
  // toolbar 先于 decorator, parameter 初始化, 此时 theme 为空
  useEffect(() => {
    if (theme) {
      setSelected(theme);
    }
  }, [theme]);
  const channel = addons.getChannel();
  const handleSelect = useCallback((value: string) => {
    setSelected(value);
    channel.emit(ON_THEME_CHANGE, value);
    if (testFun) testFun(value + '?');
  }, [testFun]);

  const links = useMemo(() => {
    return ThemeOptions.map(val => {
      return {
        id: val,
        title: val,
        active: val === selected,
        onClick: () => handleSelect(val),
      }
    })
  }, [selected, handleSelect]);
  return (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={<TooltipLinkList links={links} />}
    >
      <IconButton title="theme">
        <Icons icon="grow" />
        <div style={{
          fontSize: '13px',
          marginLeft: '10px',
        }}>
          {selected || 'none'}
        </div>
      </IconButton>
    </WithTooltip>
  );
};

export default ThemeToolBar;
