//Какой будет порядок
function test() {
  const p = Promise.resolve();

  setTimeout(() => {
    console.log("timeout 1");

    p.then(() => {
      console.log("promise 1");
    });
  }, 0);

  setTimeout(() => {
    console.log("timeout 2");
  }, 0);
}

test();
// timeout 1
// promise 1
// timeout 2

function test() {
  const p = Promise.resolve();

  requestAnimationFrame(() => {
    console.log("raf 1");

    p.then(() => {
      console.log("promise 1");
    });
  }, 0);

  requestAnimationFrame(() => {
    console.log("raf 2");
  }, 0);
}

test();
//Если заменим на raf порядок должен сохранится
// raf 1
// promise 1
// raf 2