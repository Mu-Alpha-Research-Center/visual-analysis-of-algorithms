## Recursion

### Overview

### Fibonacci Sequence

$F_{0} = 0$  
$F_{1} = 1$  
$F_{n} = F_{n-1}+F_{n-2}\qquad for\ n > 1$

![](images/fibonacci-sequence-recursion.png)

$F_{n} = F_{n-1}+F_{n-2}$  
$F_{5} = F_{4}+F_{3}$  
$F_{5} = (F_{3}+F_{2})+(F_{2}+F_{1})$  
$F_{5} = ((F_{2}+F_{1})+(F_{1}+F_{0}))+((F_{1}+F_{0})+F_{1})$  
$F_{5} = (((F_{1}+F_{0})+F_{1})+(F_{1}+F_{0}))+((F_{1}+F_{0})+F_{1})$  
$F_{5} = (((1+0)+1)+(1+0))+((1+0)+1)$  
$F_{5} = 5$

```typescript
export function fib(n: number): number {
    if (n == 0 || n == 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}
```
