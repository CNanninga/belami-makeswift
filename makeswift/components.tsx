import { runtime } from "./runtime"
import { Style } from "@makeswift/runtime/controls"

function HelloWorld(props: any) {
  return <p {...props}>Hello, world!</p>
}

runtime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Hello, world!",
  props: {
    className: Style(),
  },
})
