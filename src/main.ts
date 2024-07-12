import { pick } from "./utils";

const main = async () => {
  const obj = { hello: "world", foo: "bar" };
  const picked = pick(obj, ["hello"]);
  console.log(JSON.stringify(picked));
};

main().catch((err) => {
  console.error(err);
});
