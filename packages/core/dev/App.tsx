import { For, onMount } from "solid-js";

import { Button, HStack } from "../src";

const range = [...Array(3000).keys()];

export default function App() {
  const startTime = new Date().getTime();

  onMount(() => {
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
  });

  return (
    <HStack spacing={4} wrap="wrap" p="4">
      <For each={range}>{(_, i) => <Button>Button</Button>}</For>
    </HStack>
  );
}

/*
import { For, onMount } from "solid-js";

import { Button } from "../src";

const range = [...Array(3000).keys()];

export default function App() {
  const startTime = new Date().getTime();

  onMount(() => {
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
  });

  return <For each={range}>{(_, i) => <Button>Button</Button>}</For>;
}
*/
