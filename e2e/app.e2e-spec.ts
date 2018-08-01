import { MyNodeServerPage } from './app.po';

describe('my-node-server App', function() {
  let page: MyNodeServerPage;

  beforeEach(() => {
    page = new MyNodeServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
