import { A2websitePage } from './app.po';

describe('a2website App', () => {
  let page: A2websitePage;

  beforeEach(() => {
    page = new A2websitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
