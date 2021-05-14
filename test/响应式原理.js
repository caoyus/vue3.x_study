//目标对象

const nagisa = {
  name: "nagisa",
  age: 16,
  gender: "female",
  boyfriend: {
    name: "tomoya",
    age: 16,
  },
};

//吧目标对象变成代理对象
const proxyNagisa = new Proxy(nagisa, {
  get(target, prop) {
    //获取目标对象的属性值
    console.log("get");
    return Reflect.get(target, prop);
  },
  //修改目标对象的属性值也可以为目标对象添加新的属性
  set(target, prop) {
    console.log("set");
    return Reflect.set(target, prop);
  },
  //删除目标对象的属性值
  deleteProperty(target, prop) {
    console.log("delete");
    return Reflect.deleteProperty(target, prop);
  },
});
console.log(proxyNagisa.name); //nagisa
proxyNagisa.name = "sakura";
proxyNagisa.boyfriend.gender = "male";
proxyNagisa.boyfriend.name = "haru";
console.log(
  "%c 🍣 proxyNagisa: ",
  "font-size:20px;background-color: #465975;color:#fff;",
  proxyNagisa
);
delete proxyNagisa.boyfriend;
proxyNagisa;
console.log(
  "%c 🍚  proxyNagisa: ",
  "font-size:20px;background-color: #F5CE50;color:#fff;",
  proxyNagisa
);
