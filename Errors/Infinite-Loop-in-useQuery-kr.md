# useQuery에서 무한 루프 발생
### 문제:
- useQuery를 컴포넌트나 훅 안에서 정의하여 무한 리렌더링을 일으킬 수 있습니다.
### 원인:
- 쿼리 함수나 키를 인라인으로 정의하면, React가 이를 매 렌더링마다 새로운 함수로 간주하게 되어 무한 루프를 발생시킬 수 있습니다.
### 해결 방법:
- 쿼리 함수나 키를 useCallback이나 useMemo를 사용하여 메모이제이션하세요
```javascript
const fetchUser = useCallback(() => fetchUserData(userId), [userId]);
const { data, error } = useQuery(['user', userId], fetchUser);
```
### 발생한 날짜:
-  Oct 23, 2024
