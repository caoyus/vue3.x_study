## 比较 vue2 和 vue3 的响应式

> vue2 的响应式

- 对象:通过 defineProperty 对对象的已有属性值的读取和修改进行劫持拦截(监视/拦截)
- 数组:通过重写数组更新数组一系列更新元素的方法来实现元素的修改的劫持

```jsx
Object.defineProperty(data, "count", {
  get() {},
  set() {},
});
```

**问题**

- 对象直接新添加的属性或者删除已有的属性,界面是不会自动更新的;
- 直接通过下标替换元素或者更新 length,界面不会自动更新 arr[1]={}

> vue3 的响应式

- 通过 Proxy 拦截对 data 任意属性的任意操作,包括属性值的读写,属性的添加,属性的删除等...
- 通过 reflect:动态对代理对象的响应数据进行特定的操作

```jsx
/**
 * 语法:
 * const p=new Proxy(target,handler)
 *
 * Reflect是一个内置的对象,他提供拦截js操作的方法,这些方法与proxy handlers的方法相同,Reflect不是一个函数对象,因此他是不可构造的,也就是不能new,里面是静态方法进行调用.
 */
new Proxy(data, {
  //拦截读取属性值
  get(target, prop) {
    return Reflect.get(target, prop);
  },
  //拦截设置属性值或添加属性
  set(target, prop) {
    return Reflect.set(target, prop);
  },
  //拦截删除属性

  deleteProperty(target, prop) {
    return reflect.deleteProperty(target, prop);
  },
});
```

## 2.x 和 3.x 声明周期的对比

- ~~beforeCreate() 3 3 33 3333~~ ===>使用 `setup()`;
- ~~created~~ ===> 使用 `setup()`
- beforeMount===>onBeforeMount
- MOunted===>onMounted
- beforeUpdate===>onUpdated
- updated ===> onUpdated
- beforeDestroy===>onBeforeUnmount
- destroyed====> onUnmount
- errorCaptured===>onErrorCaptured
