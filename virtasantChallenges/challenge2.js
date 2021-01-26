function inventoryList() {
  let list = [];

  function add(name) {
    const sameName = list.find((item) => item === name);
    if (!sameName) list.push(name);
  }

  function remove(name) {
    const removed = list.filter((item) => item !== name);
    list = [...removed];
  }

  function getList() {
    return list.join(" ");
  }

  this.add = add;
  this.remove = remove;
  this.getList = getList;

  return this;
}

var obj = inventoryList();
obj.add("Pants");
obj.add("Pants");
obj.add("Shirts");
console.log(obj.getList());
obj.remove("Shirts");
console.log(obj.getList());
