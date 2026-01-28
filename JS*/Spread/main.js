//
const a = [1, 2];

const b = [...a];
// TODO: tạo b từ a bằng spread

b.push(3);

console.log("a:", a); // [1,2]
console.log("b:", b); // [1,2,3]

const user = { name: "An", age: 20 };

// TODO: tạo newUser từ user bằng spread
const newUser = { ...user };
newUser.age = 30;

console.log(user.age); // 20
console.log(newUser.age); // 30

// const state = {
//   user: {
//     name: "An",
//   },
// };

// // TODO: copy state bằng spread

// newState.user.name = "Binh";

// console.log(state.user.name); // ❓

//Tôi nghĩ log sẽ ra Bình vì bạn chỉ coppy yếu(tôi không chắc phần này)

const state = {
  user: {
    name: "An",
  },
};

const newState = { ...state, user: { ...state.user } };
// TODO: clone đúng cách

newState.user.name = "Binh";

console.log(state.user.name); // "An"
console.log(newState.user.name); // "Binh"

const stateA = {
  todos: ["learn JS", "learn React"],
};
const newStateA = { todos: [...stateA.todos] };
newStateA.todos.push("learn Node");
// TODO: tạo newState thêm "learn Node"

console.log(stateA.todos); // cũ
console.log(newStateA.todos); // có thêm

const stateB = {
  user: {
    profile: {
      city: "HN",
      age: 20,
    },
  },
};

const newStateB = {
  ...stateB,
  user: {
    ...stateB.user,
    profile: {
      ...stateB.user.profile,
      city: "HCM",
    },
  },
};

console.log(stateB.user.profile.city); // "HN"
console.log(newStateB.user.profile.city); // "HCM"



function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

// TODO: gọi sum bằng spread

console.log();
