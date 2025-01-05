# 스타일드 컴포넌트에서 동적 스타일링과 관련된 문제
>[!NOTE]
>### 문제:
>- props를 기반으로 동적 스타일을 적용할 때 props를 잘못 사용하거나 적절히 처리하지 않으면 예상치 못한 동작이나 스타일이 제대로 적용되지 않는 경우가 있습니다.

### 일반적인 실수:
```javascript
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props.primary ? 'white' : 'black'};
`;
```
위 예시에서 color 속성은 props.primary를 함수 없이 직접 사용하고 있어 오류가 발생할 수 있습니다.
올바른 사용법:
```javascript
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props => (props.primary ? 'white' : 'black')};
`;
```
### 중요 포인트:
- 동적 props는 항상 함수로 감싸야 함: props를 기반으로 한 동적 값은 항상 함수로 감싸서 props에 접근해야 합니다.
- 일관된 문법 사용: 스타일드 컴포넌트 내에서 props를 처리하는 방식에 일관성을 유지하여 혼란과 오류를 방지하세요.
- PropTypes나 기본 props 사용: 전달되는 props를 관리하고 유효성을 검사하기 위해 prop-types나 기본 props를 사용하는 것을 고려하세요.

### 발생 날자:
- Oct 5, 2024
