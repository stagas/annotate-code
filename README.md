<h1>
annotate-code <a href="https://npmjs.org/package/annotate-code"><img src="https://img.shields.io/badge/npm-v2.0.3-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-120-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/annotate-code@2.0.3/dist/annotate-code.min.js"><img src="https://img.shields.io/badge/brotli-744b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

beautifully annotate source code with a message, given an index, like a parser or compiler

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i annotate-code </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add annotate-code </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add annotate-code</code>
</td></tr></table>
</h4>

## Examples

<details id="example$basic" title="basic" open><summary><span><a href="#example$basic">#</a></span>  <code><strong>basic</strong></code></summary>  <ul>    <details id="source$basic" title="basic source code" ><summary><span><a href="#source$basic">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/basic.ts">example/basic.ts</a>  <p>

```ts
import { annotate } from 'annotate-code'

const input = `01234
6789 and a 2
line 3
and 4
another 5
error should be here 6
and 7
more 8
lines 9
`

const message = 'some error message'

let i = 0
const print = (m: string) => {
  console.log(++i + ' -------------------------------------')
  console.log(m)
}

print(
  annotate({
    message,
    index: 48,
    size: 6,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
    linesAfter: 5,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
    linesAfter: 100,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    linesBefore: 5,
    input,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    linesBefore: 100,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 7,
    linesAfter: 100,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 5,
    linesBefore: 2,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    input: `12345`,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input: ``,
  }).message
)

print(
  annotate({
    message,
    index: 1,
    input: ``,
  }).message
)

print(
  annotate({
    message,
    index: -1,
    input: `abc`,
  }).message
)
```

</p>
</details></ul></details>

## API

<p>  <details id="annotate$1" title="Function" open><summary><span><a href="#annotate$1">#</a></span>  <code><strong>annotate</strong></code><em>({ index, input, linesAfter, linesBefore, message, showLineNumbers, size })</em>     &ndash; Annotates a source code string given an index and a message.</summary>  <a href="src/index.ts#L44">src/index.ts#L44</a>  <ul>    <p>    <details id="settings$3" title="Parameter" ><summary><span><a href="#settings$3">#</a></span>  <code><strong>settings</strong></code>    </summary>    <ul><p>{<p>  <details id="index$7" title="Property" ><summary><span><a href="#index$7">#</a></span>  <code><strong>index</strong></code>     &ndash; The index position</summary>  <a href="src/index.ts#L55">src/index.ts#L55</a>  <ul><p>number</p>        </ul></details><details id="input$6" title="Property" ><summary><span><a href="#input$6">#</a></span>  <code><strong>input</strong></code>     &ndash; The code to annotate</summary>  <a href="src/index.ts#L54">src/index.ts#L54</a>  <ul><p>string</p>        </ul></details><details id="linesAfter$9" title="Property" ><summary><span><a href="#linesAfter$9">#</a></span>  <code><strong>linesAfter</strong></code>     &ndash; How many lines after to show</summary>  <a href="src/index.ts#L57">src/index.ts#L57</a>  <ul><p>number</p>        </ul></details><details id="linesBefore$8" title="Property" ><summary><span><a href="#linesBefore$8">#</a></span>  <code><strong>linesBefore</strong></code>     &ndash; How many lines before to show</summary>  <a href="src/index.ts#L56">src/index.ts#L56</a>  <ul><p>number</p>        </ul></details><details id="message$5" title="Property" ><summary><span><a href="#message$5">#</a></span>  <code><strong>message</strong></code>     &ndash; The message to display</summary>  <a href="src/index.ts#L53">src/index.ts#L53</a>  <ul><p>string</p>        </ul></details><details id="showLineNumbers$11" title="Property" ><summary><span><a href="#showLineNumbers$11">#</a></span>  <code><strong>showLineNumbers</strong></code>     &ndash; Whether to show line numbers</summary>  <a href="src/index.ts#L59">src/index.ts#L59</a>  <ul><p>boolean</p>        </ul></details><details id="size$10" title="Property" ><summary><span><a href="#size$10">#</a></span>  <code><strong>size</strong></code>     &ndash; The size of the arrows ^^^^</summary>  <a href="src/index.ts#L58">src/index.ts#L58</a>  <ul><p>number</p>        </ul></details></p>}</p>        </ul></details>  <p><strong>annotate</strong><em>({ index, input, linesAfter, linesBefore, message, showLineNumbers, size })</em>  &nbsp;=&gt;  <ul>{<p>  <details id="col$14" title="Property" ><summary><span><a href="#col$14">#</a></span>  <code><strong>col</strong></code>    </summary>  <a href="src/index.ts#L62">src/index.ts#L62</a>  <ul><p>number</p>        </ul></details><details id="line$13" title="Property" ><summary><span><a href="#line$13">#</a></span>  <code><strong>line</strong></code>    </summary>  <a href="src/index.ts#L61">src/index.ts#L61</a>  <ul><p>number</p>        </ul></details><details id="message$15" title="Property" ><summary><span><a href="#message$15">#</a></span>  <code><strong>message</strong></code>    </summary>  <a href="src/index.ts#L63">src/index.ts#L63</a>  <ul><p>string</p>        </ul></details></p>}</ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/annotate-code/fork) or [edit](https://github.dev/stagas/annotate-code) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
