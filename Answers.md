1. What problem does the context API help solve?

Context API help solve the problem of having to pass state through various component levels of your App through prop drilling. It does this by storing state in an easily accessible context object that can be accessed globally through passing down multiple layers.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions come from the action creator which is invoked when there is some event ot interaction with the App. Actions commmunicate what changes from the event occur.

Reducers handle the resulting action and update/replace the store/application state accordingly.

The store is known as a 'single source of truth' in a redux application because it contains the application state, all functions in Redux must be pure functions and return a copy of our state vs changing the store/application state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global iteration of state - meaning any component in the app can access it so long as they hook into it.

Component state however lives in that specific component. It can only be updated within that component and passed down to its children components by props.

Application state is particularly useful in larger more complex applications where passing state between components is extremely complicated. Component state is good to use in smaller and simpler applications where it's easier to pass state along.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` effectively handles our actions when they become more complex than a simple object. A thunk is a function within a function. It intercepts and acts on returned data to check what data is being returned: if returned is an action (object), it forwards it to the reducer; if a function is returned it invokes the function and passes it the dispatch function - allowing for asyncronous actions and utilizing the ability to dispatch an action inside a .then().

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I don't really have a favorite, just depends on the project being worked on. I prefer to use Context API at this point because it seems to be simple way of managing state without having as many moving parts and better for smaller projects. However, redux is better for larger apps.