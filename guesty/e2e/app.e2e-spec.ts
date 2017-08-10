import { GuestyPage } from './app.po';

describe('guesty App', () => {
  let page: GuestyPage;

  beforeEach(() => {
    page = new GuestyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
