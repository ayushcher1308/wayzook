import { WayzookPage } from './app.po';

describe('wayzook App', function() {
  let page: WayzookPage;

  beforeEach(() => {
    page = new WayzookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
