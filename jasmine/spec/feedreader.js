/**
 * @description feedreader.js:这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
                我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
                我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000; //网络延迟严重，更改默认间隔时间为15秒
  /**
   * @description 这是一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
                  都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
   */
  let oldContent;
  describe('RSS Feeds', function() {
    /**
     *@description 这是一个测试 - 它用来保证 allFeeds 变量被定义了而且不是空的。
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /**
     * @description 这是一个测试，遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
     */
    it('every object of allFeeds has url-field and it is not null', function() {
      for (let feed of allFeeds) {
        expect(feed.url.length).not.toBe(0);
      }
    });

    /**
     * @description 这是一个测试，遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
     */
    it('every object of allFeeds has name-field and it is not null', function() {
      for (let feed of allFeeds) {
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  /**
   *@description  "The menu"测试用例
   */
  describe('The menu', function() {
    /**
     * @description 这是一个测试用例保证菜单元素默认是隐藏的。默认body标签类为'menu-hidden'。
     */
    it('the menu defualt hide', function() {
      expect(document.querySelector("body").getAttribute('class')).toBe('menu-hidden');
    })
    /**
     * @description 这是一个测试，保证当菜单图标被点击的时候菜单会切换可见状态。这个
                    测试应该包含两个 expectation ： 当点击图标的时候菜单是否显示，
                    再次点击的时候是否隐藏。
     */
    it('clicking menu-icon can change visible status', function() {
      let body = document.querySelector("body"); //获取body元素
      let icon = document.querySelector(".icon-list"); //获取list图标
      body.setAttribute('class', 'menu-hidden'); //body默认隐藏
      icon.click(); //点击后显示
      expect(body.getAttribute('class')).toBe('');
      icon.click(); //再次点击后隐藏
      expect(body.getAttribute('class')).toBe('menu-hidden');
    });
  });

  /**
   *@description  "Initial Entries" 测试用例
   */
  describe('Initial Entries', function() {
    /**
     * @description 这是一个测试，保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
                    里面至少有一个 .entry 的元素。
     */
    beforeEach(function(done) {
      setTimeout(function() {
        done();
      }, 8000); //网络问题，设置10秒，保证函数执行完成
    });
    it('loadFeed can work', function(done) {
      //loadFeed(0);  //index.html初始化会调用该函数
      oldContent = document.querySelector('.feed').children[0].children[0].children[0].textContent; //获取旧源第一个标题
      expect(document.querySelector('.feed').children[0].children[0].getAttribute('class')).toBe('entry');
      done();
      let id = Math.round(Math.random() * 2) + 1; //1--3之间之间随机整数
      loadFeed(id);
    });
  });

  /**
   *@description "New Feed Selection" 测试用例
   */
  describe('New Feed Selection', function() {
    let newContent; //新源第一个标题
    /**
     *@description 这是一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
                   记住，loadFeed() 函数是异步的。
     */
    beforeEach(function(done) {
      setTimeout(function() {
        done();
      }, 8000);
    });
    it('when add new source,the content will change', function(done) {
      newContent = document.querySelector('.feed').children[0].children[0].children[0].textContent;
      expect(oldContent).not.toBe(newContent); //旧源标题与新源标题不一样
      done();
    });
  });
}());