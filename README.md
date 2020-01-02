# playing_with_react_hooks


## Explanation for usingMemo example:
    You can see in the console that every time counter 2 is incerement,
    in the none memoized version, the isEven function will be called,
    and in the momized version, is wont
    cause when count 2 is incerement set state is called,
    and the component is re-rendered,
    since in the memoized version the memoized function 
    has a dependency on counterOne,
    is wont change on call for incrementCounterTwo, 
    thus the same reference to the function, wont be changed 

## What do we see in 'exampleUseCallback'?
    When setSalary or setAge is called, the entire component is re-rendered
    thus the functions within the functional component: Parent.js are re-created.
    we dont want the function of incrementSalary,
    to be re-created when incrementAge is called, and vise versa.
    useCallback solved this, when giving incrementSalary a dependency of 'salary',
    the memoize instance of the funciton will be re-created only if 
    'salary' has changed, 
    in a very similar way for incrementAge and 'age'. 
    It is easy to see on the console that when incrementing 'salary',
    no logs from age are displayed, and vise versa. 