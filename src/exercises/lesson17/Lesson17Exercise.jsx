import styles from "./Lesson17Exercise.module.css";
import { ThemeProvider,ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

/**
 * Lesson 17 Exercise: Context with Theme
 *
 * 1. Create a Context Provider that has a useState value for [theme, setTheme]
 * 2. Choose any number of theme values, typical basic themes might be 'light' and 'dark'
 * 3. Use the context values in the content container to switch the css classes

 */

/**
 *
 * Lesson 17 Homework:
 * 1. Create a data provider called CartProvider that's wrapped around all of our app
 * 2. Define the cart items in the CartProvider and use useContext to access the data and the setters in the child components
 */

const ChildButtonContainer = () => {
const {theme, setTheme} = useContext(ThemeContext);
const changeTheam=() => {
  {theme === 'light' ? setTheme('dark'):setTheme('light')};
}
  return (
    <div className={theme === 'light'?styles.theme1:styles.theme2}>
      <p>Select a theme</p>
      <button onClick={changeTheam}>Toggle Theme - (Show Current Theme {theme})</button>
    </div>
  );
};

const ChildContentContainer = () => {
  return (
    <div className={""}>
      <header>Here is our header</header>
      <p>Here is some fun text to read</p>
      <button>
        Here is a themed button to click
      </button>
      <input defaultValue={'And a themed input'}></input>
    </div>
  );
};

export const Lesson17Exercise = () => {
  return (
    <ThemeProvider>
      <div >
        <ChildButtonContainer />
        <ChildContentContainer />
      </div>
    </ThemeProvider>
  );
};

export default Lesson17Exercise;
