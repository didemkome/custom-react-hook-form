# React Hook Form
A simple component library, composed out of pure HTML form elements to make your live easier composing forms with React Hook Form and React.

## Installation
```
npm install react-hook-form
```

## Usage

It is implemented from within the react-hook-form file. For example:
```
import { useForm } from "react-hook-form";

export default function App() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit" />
    </form>
  );
}
```

# Styled-components
It is a component-based styling framework.

## Installation

```
npm install --save styled-components
```

## Usage
It is implemented from within the styled-components file. For example:
```
import styled from 'styled-components';

const Title = styled.h1`
  color: #4d4d4d;
  font-weight: 600;
  font-size: 16px;
`;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
