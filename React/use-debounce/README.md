## 🔍 Purpose
By using **debounce** hook, it can live search to limit the number of request to the API

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/04/debounce.png)
ref: https://css-tricks.com/debouncing-throttling-explained-examples/

## 📚 What I've learned

### 1. meaning of [] at the end of useEffect 

```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```
- assign when 'useEffect' is called
*https://reactjs.org/docs/hooks-effect.html*

### 2. map(element, index)
```
results.map((el, i) => <div key={i}>{el}</div>)

```
i is parameter and it's a number type

### setTimeout
`setTimeout(function, ms)`
: after `ms`, run `function`



Source Reference: 
https://www.instagram.com/p/Cf9HSdgjikS/?igshid=YmMyMTA2M2Y%3D