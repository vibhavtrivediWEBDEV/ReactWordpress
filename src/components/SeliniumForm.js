import React from 'react';
// import { webdriver } from 'selenium-webdriver';


function SeliniumForm() {
  // Call the Selenium WebDriver function


  return (
    <>
      <div>SeleniumForm</div>

      <form>
        <input style={{ color: '#111' }} type="text" name='title' placeholder='name' />
        <input style={{ color: '#111' }} type="text" name='views' placeholder='password' />
        <input style={{ color: '#111' }} type="submit" value="submit" name='submit' />
      </form>
    </>
  );
}

export default SeliniumForm;
