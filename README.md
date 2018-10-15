# karma-vue-test-utils
Karma &amp; Vue-test-utils suite

This can help you when you want to integrate Karma and vue-test-utils together into some CLI tools.

## Installation

``npm i karma-vue-test-utils --save-dev``

## Usage

Add 'vue-test-utils' to 'framework' item.

```javascript
    // karma.conf.js
    config.set({
        // ...
        framework: ['vue-test-utils']
    })
```

In *.spec.js files, you can use vue-test-utils like with a global object ``VueTest``

```javascript
    describe('Count.vue', function () {
        let wrapper;
        beforeEach(function () {
            wrapper = VueTest.shallowMount(Count);
        })
        
        // ...
    })
```


