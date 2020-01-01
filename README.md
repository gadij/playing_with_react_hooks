# playing_with_react_hooks


## Explanation for usingMemo example:
    you can see in the console that every time counter 2 is incerement,
    in the none memoized version, the isEven function will be called,
    and in the momized version, is wont
    cause when count 2 is incerement set state is called,
    and the component is re-rendered,
    since in the memoized version the memoized function 
    has a dependency on counterOne,
    is wont change on call for incrementCounterTwo, 
    thus the same reference to the function, wont be changed 