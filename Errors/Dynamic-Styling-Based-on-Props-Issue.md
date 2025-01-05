# Dynamic Styling Based on Props Issue
>[!NOTE]
>Issue: Misusing or not properly handling props to apply dynamic styles can result in unexpected behavior or styles not applying as intended.

### Common Mistake Developers make:
```javascript
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props.primary ? 'white' : 'black'};
`;
```
Here, the color property is incorrectly using props.primary directly inside the template literal without a function, leading to a potential error.

### Correct Usage:
```javascript
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: ${props => (props.primary ? 'white' : 'black')};
`;
```
### Key Points to Remember:
- Always Use Functions for Dynamic Props: Dynamic values based on props should always be wrapped in a function to access props.
- Consistent Syntax: Ensure consistency in how you handle props within styled-components to avoid confusion and errors.
- Prop Types or Default Props: Consider using prop types or default props to manage and validate the props passed to components.

### Encountered Date:
- Oct 5, 2024
