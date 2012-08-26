// Generated by CoffeeScript 1.3.3
var promiseMock;

window.Mocks || (window.Mocks = {});

promiseMock = {
  pipe: function() {},
  fail: function() {},
  done: function() {},
  then: function() {}
};

Mocks.Hoodie = function() {
  return {
    baseUrl: 'http://my.cou.ch',
    trigger: function() {},
    request: function() {},
    on: function() {},
    one: function() {},
    unbind: function() {},
    defer: $.Deferred,
    isPromise: Hoodie.prototype.isPromise,
    my: {
      store: {
        uuid: function() {
          return 'mock567';
        },
        create: function() {
          return promiseMock;
        },
        destroy: function() {
          return promiseMock;
        },
        save: function() {
          return promiseMock;
        },
        update: function() {
          return promiseMock;
        },
        updateAll: function() {
          return promiseMock;
        },
        find: function() {
          return promiseMock;
        },
        findAll: function() {
          return promiseMock;
        },
        findOrCreate: function() {
          return promiseMock;
        },
        "delete": function() {
          return promiseMock;
        },
        destroyAll: function() {
          return promiseMock;
        },
        changedDocs: function() {},
        db: {
          getItem: function() {},
          setItem: function() {},
          removeItem: function() {}
        }
      },
      account: {
        authenticate: function() {
          return {
            then: function() {},
            pipe: function() {
              return {
                fail: function() {}
              };
            }
          };
        },
        db: function() {},
        on: function() {},
        owner: 'owner_hash'
      },
      config: {
        set: function() {},
        get: function() {},
        remove: function() {},
        clear: function() {}
      }
    }
  };
};
