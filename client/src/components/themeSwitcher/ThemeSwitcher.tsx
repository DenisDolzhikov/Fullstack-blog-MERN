import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import { SwitchButton } from './SwitchButton';

const ThemeSwitchButton = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }: any) => (
      <SwitchButton
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark);
          if (theme === themes.dark) setTheme(themes.light);
        }}
        value={theme === themes.dark}
      />
    )}
  </ThemeContext.Consumer>
);

export { ThemeSwitchButton };
