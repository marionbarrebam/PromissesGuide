const { timeoutPromise } = require("./promess");
async function main2() {
  const promise1 = () => timeoutPromise("promesse 1", 500, false);
  const promise2 = () => timeoutPromise("promesse 2", 100, "erreur");
  const promise3 = () => timeoutPromise("promesse 3", 400, false);
  const array = [promise1, promise2, promise3];

  await Promise.all(
    array.map(async promise => {
      try {
        return promise();
      } catch (error) {
        console.log("il y a une erreur");
      }
    })
  );
  console.log("Finished");
}
// main();
main2();
