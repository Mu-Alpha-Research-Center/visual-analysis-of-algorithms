## Recursion

The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement. In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.

--- Niklaus Wirth, Algorithms + Data Structures = Programs, 1976[^1]

[^1]: https://archive.org/details/algorithmsdatast00wirt/page/126]

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
