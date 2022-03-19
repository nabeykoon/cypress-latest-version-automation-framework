describe('Lighthouse audit for Automation Store', () => {
    it('Run performance audit in Automation Store Homepage', () => {
      cy.visit('https://automationteststore.com/');

      const customThresholds = {
        performance: 50,
        accessibility: 50,
        'best-practices': 80,
        seo: 70,
        'first-contentful-paint': 2000,
        'largest-contentful-paint': 3000,
        'cumulative-layout-shift': 0.1,
        'total-blocking-time': 500,
      };

      const desktopConfig = {
        formFactor: 'desktop',
        screenEmulation: { disabled: true },
      };

      cy.lighthouse(customThresholds, desktopConfig);
    });
  });