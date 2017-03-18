import { WordGamePage } from './app.po';

describe('word-game App', () => {
  let page: WordGamePage;

  beforeEach(() => {
    page = new WordGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
