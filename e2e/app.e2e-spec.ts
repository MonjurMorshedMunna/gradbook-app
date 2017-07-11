import { GradbookAppPage } from './app.po';

describe('gradbook-app App', () => {
  let page: GradbookAppPage;

  beforeEach(() => {
    page = new GradbookAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
