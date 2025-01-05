# Infinite Loop in useQuery
### Issue:
A common mistake is placing the useQuery inside a component or hook that causes it to re-render infinitely.
### Cause:
This often happens when the query function or key is defined inline, causing React to treat it as a new function on each render.
### Solution:
Memoize the query function or key using useCallback or useMemo
```javascript
const fetchUser = useCallback(() => fetchUserData(userId), [userId]);
const { data, error } = useQuery(['user', userId], fetchUser);
```
Encontered:
- Oct 23, 2024
  
