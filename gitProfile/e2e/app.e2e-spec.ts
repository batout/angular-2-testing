import { GitProfilePage } from './app.po';

describe('git-profile App', () => {
  let page: GitProfilePage;

  beforeEach(() => {
    page = new GitProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
