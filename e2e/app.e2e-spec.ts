import { Ng2CribsFromScratchPage } from './app.po';

describe('ng2-cribs-from-scratch App', () => {
  let page: Ng2CribsFromScratchPage;

  beforeEach(() => {
    page = new Ng2CribsFromScratchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
