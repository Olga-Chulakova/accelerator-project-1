module.exports = async (page, scenario, vp) => {
  console.log(`SCENARIO > ${ scenario.label}`);

  // add more ready handlers here...
  await page.waitForFunction(() => document.fonts.ready.then(() => {
    console.log('Fonts loaded');
    return true;
  }));

  await page.evaluate((scenario) => {
    /** force load lazy images */
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((i) => {
      i.removeAttribute('loading');
    });
  }, scenario);

  const getByText = async ($container, text) => {
    const [$el] = await $container.$$(`xpath/.//*[text()='${text}']`);
    return $el ? [$el] : $container.$$(`xpath/.//*[contains(text(), '${text}')]`);
  };

  const container = await page.$('[data-test="faq"]');
  const [, $second] = await container.$$('[data-test="toggle"]');

  if (!$second) {
    throw new Error('Element with data-test="toggle" not found in "faq" container');
  }
  await $second.click();

  const [$el] = await getByText(container, 'Правила');
  if (!$el) {
    throw new Error('Element with text "Правила" not found in "faq" container');
  }
  await $el.click();

  await page.waitForTimeout(scenario.delay || 0);

};
